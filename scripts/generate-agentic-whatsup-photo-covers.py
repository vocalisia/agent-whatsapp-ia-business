#!/usr/bin/env python3
"""Generate dedicated photorealistic blog covers for Agentic Whatsup."""

import argparse
import gc
import json
import struct
import time
from pathlib import Path

import safetensors.torch as safetensors_torch
import torch
import transformers.modeling_utils as transformers_modeling
from diffusers import AutoPipelineForText2Image
from diffusers.models.attention_processor import AttnProcessor2_0
from PIL import Image, ImageEnhance


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "images" / "blog"
MODEL_ID = "SG161222/RealVisXL_V4.0"

SCENES = {
    "gouvernance-agent-ia-whatsapp": (
        62011,
        "RAW photorealistic photo, hand holding smartphone in foreground, screen softly blurred with green business chat glow, laptop dashboard out of focus behind, checklist paper on desk, no legible screen content, governance review",
    ),
    "whatsapp-opt-in-stop-agent-ia": (
        62012,
        "RAW photorealistic photo, close-up finger tapping smartphone on warm wooden desk, screen softly blurred with green interface glow, privacy paperwork out of focus, no legible screen content, compliance workflow, shallow depth of field",
    ),
    "templates-whatsapp-business-agent-ia": (
        52013,
        "RAW photorealistic photo, professional editing message template cards on laptop, smartphone beside keyboard with green chat bubbles, blank sticky notes, modern coworking office, shallow depth of field",
    ),
    "qualite-numero-whatsapp-business-ia": (
        62014,
        "RAW photorealistic photo, support operations desk, smartphone beside laptop, laptop screen softly blurred with green dashboard glow, headset and notebook nearby, no legible screen content, realistic modern office",
    ),
    "supervision-humaine-agent-ia-whatsapp": (
        62015,
        "RAW photorealistic photo, over shoulder view of human support manager at laptop, smartphone nearby with soft green interface glow, screen content blurred and unreadable, focused supervision in real office",
    ),
    "journalisation-agent-ia-whatsapp": (
        52016,
        "RAW photorealistic photo, secure audit workstation, laptop with abstract event timeline UI, smartphone with green chat bubbles, notebook pen small lock object, cybersecurity governance desk",
    ),
    "automatisation-whatsapp-ecommerce": (
        72001,
        "RAW photorealistic photo, ecommerce manager at desk reviewing online store dashboard on laptop, smartphone beside laptop with soft green chat glow, parcels and notebook nearby, no legible text",
    ),
    "integrer-agent-ia-whatsapp-shopify": (
        72002,
        "RAW photorealistic photo, developer and ecommerce operator looking at laptop dashboard, smartphone with blurred green messaging interface, product boxes on modern office desk, no logos, no readable text",
    ),
    "whatsapp-shopify-integration-catalogue": (
        72003,
        "RAW photorealistic photo, product catalog review on laptop with blurred product grid, smartphone showing soft green chat glow, small packaged products on desk, clean ecommerce studio, no text",
    ),
    "whatsapp-shopify-integration-panier-abandonne": (
        82004,
        "RAW photorealistic photo, abandoned cart workflow scene, small shopping basket and parcel on desk, smartphone with soft green chat glow, laptop in background heavily blurred, no visible words, no logos",
    ),
    "whatsapp-shopify-integration-sav": (
        72005,
        "RAW photorealistic photo, customer support agent checking ecommerce order on laptop, smartphone with green chat glow, return parcel and support headset on desk, no readable text",
    ),
    "agent-ia-whatsapp-ecommerce-suivi-commande": (
        72006,
        "RAW photorealistic photo, ecommerce order tracking workspace, laptop with blurred shipment dashboard, smartphone with green chat glow, parcels and shipping label shapes without text, realistic office",
    ),
    "agent-ia-whatsapp-ecommerce-fidelisation": (
        72007,
        "RAW photorealistic photo, marketing team reviewing customer segments on laptop, smartphone with green messaging glow, product samples and notes on table, warm ecommerce office, no readable text",
    ),
}

NEGATIVE = (
    "logo, watermark, readable words, letters, typography overlay, blank screen, black screen, "
    "cartoon, illustration, drawing, vector, 3d render, CGI, anime, poster, infographic, "
    "deformed hands, extra fingers, bad anatomy, blurry main subject, low quality"
)

DTYPES = {
    "F64": torch.float64,
    "F32": torch.float32,
    "F16": torch.float16,
    "BF16": torch.bfloat16,
    "I64": torch.int64,
    "I32": torch.int32,
    "I16": torch.int16,
    "I8": torch.int8,
    "U8": torch.uint8,
    "BOOL": torch.bool,
}


def parse_safetensor_header(file_handle):
    header_length = struct.unpack("<Q", file_handle.read(8))[0]
    metadata = json.loads(file_handle.read(header_length))
    return metadata, 8 + header_length


def read_tensor(file_handle, info, data_start, device):
    dtype = DTYPES[info["dtype"]]
    shape = info["shape"]
    start = data_start + info["data_offsets"][0]
    end = data_start + info["data_offsets"][1]
    nbytes = end - start
    element_size = torch.empty(0, dtype=dtype).element_size()
    file_handle.seek(start)
    raw = file_handle.read(nbytes)
    tensor = torch.frombuffer(raw, dtype=dtype, count=nbytes // element_size).clone()
    del raw
    if shape:
        tensor = tensor.reshape(shape)
    if device and device != "cpu":
        tensor = tensor.to(device)
    return tensor


def no_mmap_load_file(filename, device=None):
    output = {}
    with open(filename, "rb") as file_handle:
        metadata, data_start = parse_safetensor_header(file_handle)
        for name, info in metadata.items():
            if name != "__metadata__":
                output[name] = read_tensor(file_handle, info, data_start, device or "cpu")
    return output


class TensorSlice:
    def __init__(self, tensor):
        self.tensor = tensor

    def __getitem__(self, key):
        return self.tensor[key]

    def get_shape(self):
        return list(self.tensor.shape)

    def get_dtype(self):
        return self.tensor.dtype


class NoMmapSafeOpen:
    def __init__(self, filename, framework="pt", device="cpu"):
        self.device = device
        self.file_handle = open(filename, "rb")
        self.metadata, self.data_start = parse_safetensor_header(self.file_handle)

    def __enter__(self):
        return self

    def __exit__(self, *_):
        self.file_handle.close()

    def keys(self):
        return [key for key in self.metadata if key != "__metadata__"]

    def get_tensor(self, name):
        return read_tensor(self.file_handle, self.metadata[name], self.data_start, self.device)

    def get_slice(self, name):
        return TensorSlice(read_tensor(self.file_handle, self.metadata[name], self.data_start, self.device))


def patch_safetensors_for_windows():
    safetensors_torch.load_file = no_mmap_load_file
    safetensors_torch.safe_open = NoMmapSafeOpen
    transformers_modeling.safe_open = NoMmapSafeOpen


def load_pipeline():
    patch_safetensors_for_windows()
    pipe = AutoPipelineForText2Image.from_pretrained(
        MODEL_ID,
        torch_dtype=torch.float16,
        local_files_only=True,
    )
    pipe.enable_sequential_cpu_offload()
    pipe.unet.set_attn_processor(AttnProcessor2_0())
    pipe.vae.enable_slicing()
    pipe.set_progress_bar_config(disable=True)
    return pipe


def save_cover(image, out_path):
    image = image.convert("RGB").resize((1600, 900), Image.Resampling.LANCZOS)
    image = ImageEnhance.Color(image).enhance(0.92)
    image = ImageEnhance.Contrast(image).enhance(1.05)
    image = ImageEnhance.Sharpness(image).enhance(1.06)
    image.save(out_path, "JPEG", quality=88, optimize=True, progressive=True)


def generate(pipe, slug):
    seed, prompt = SCENES[slug]
    out_path = OUT_DIR / f"{slug}.jpg"
    generator = torch.Generator(device="cuda").manual_seed(seed)
    start = time.time()
    print(f"Generating {slug}...")
    result = pipe(
        prompt=prompt,
        negative_prompt=NEGATIVE,
        width=768,
        height=432,
        num_inference_steps=22,
        guidance_scale=7.0,
        generator=generator,
    )
    save_cover(result.images[0], out_path)
    print(f"Wrote {out_path.name} ({out_path.stat().st_size // 1024} KB) in {time.time() - start:.1f}s")
    del result
    gc.collect()
    torch.cuda.empty_cache()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--slug", choices=sorted(SCENES.keys()), action="append")
    args = parser.parse_args()

    selected = args.slug or list(SCENES.keys())
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    pipe = load_pipeline()
    for slug in selected:
        generate(pipe, slug)


if __name__ == "__main__":
    main()
