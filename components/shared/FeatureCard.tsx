import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  exclusive?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  exclusive = false,
}: FeatureCardProps) {
  return (
    <div className="relative bg-surface rounded-xl p-6 border border-surface-2 hover:border-wa/50 transition-all duration-300 group">
      {exclusive && (
        <span className="absolute -top-3 left-4 bg-wa text-white text-xs font-bold px-3 py-1 rounded-full">
          EXCLUSIF
        </span>
      )}
      <div className="w-12 h-12 bg-wa/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-wa/20 transition-colors">
        <Icon className="text-wa" size={24} />
      </div>
      <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
