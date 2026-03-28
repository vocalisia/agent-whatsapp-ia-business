import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "wa" | "outline" | "indigo";
  icon?: LucideIcon;
  external?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function CTAButton({
  href,
  label,
  variant = "wa",
  icon: Icon,
  external = false,
  size = "md",
}: CTAButtonProps) {
  const baseClass =
    "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variants = {
    wa: "bg-wa hover:bg-wa-hover text-white",
    outline: "border border-wa text-wa hover:bg-wa hover:text-white",
    indigo: "bg-indigo-500 hover:bg-indigo-600 text-white",
  };

  const className = `${baseClass} ${sizes[size]} ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {Icon && <Icon size={18} />}
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {Icon && <Icon size={18} />}
      {label}
    </Link>
  );
}
