"use client";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  index: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  price,
  index,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "premium-hover cursor-default"
      )}
      style={{ 
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Hover glow */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#2563eb]/0 to-[#06b6d4]/0 group-hover:from-[#2563eb]/10 group-hover:to-[#06b6d4]/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Card border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-[#2563eb]/30 transition-colors duration-300" />
      
      {/* Background */}
      <div className="absolute inset-[1px] rounded-2xl bg-[#111111]" />
      
      {/* Content */}
      <div className="relative z-10 p-7">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/20 flex items-center justify-center mb-5 group-hover:border-[#06b6d4]/40 transition-all duration-300">
          <div className="text-[#06b6d4]">{icon}</div>
        </div>
        <h3 
          className="text-xl font-semibold text-white mb-3"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          {title}
        </h3>
        <p className="text-[#b0b0b0] text-sm leading-relaxed mb-4">
          {description}
        </p>
        <p className="text-[#d0d0d0] text-sm font-medium">{price}</p>
      </div>
    </div>
  );
}
