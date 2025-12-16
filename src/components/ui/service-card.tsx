"use client";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  price: string;
  bullets: string[];
  note?: string;
  index: number;
}

export function ServiceCard({
  icon,
  title,
  subtitle,
  price,
  bullets,
  note,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "premium-hover cursor-default h-full"
      )}
    >
      {/* Hover glow */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#2563eb]/0 to-[#06b6d4]/0 group-hover:from-[#2563eb]/10 group-hover:to-[#06b6d4]/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Card border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-[#2563eb]/30 transition-colors duration-300" />
      
      {/* Background */}
      <div className="absolute inset-[1px] rounded-2xl bg-[#111111]" />
      
      {/* Content */}
      <div className="relative z-10 p-7 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/20 flex items-center justify-center mb-5 group-hover:border-[#06b6d4]/40 transition-all duration-300">
          <div className="text-[#06b6d4]">{icon}</div>
        </div>
        <h3 
          className="text-xl font-semibold text-white mb-1"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-[#a3a3a3] text-sm mb-3">{subtitle}</p>
        )}
        <p className="text-[#06b6d4] text-lg font-semibold mb-4">{price}</p>
        
        {/* Bullet points */}
        <ul className="space-y-2 mb-4 flex-grow">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-[#d4d4d4] text-sm">
              <span className="text-[#06b6d4] mt-1">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        
        {note && (
          <p className="text-[#a3a3a3] text-xs italic mt-auto">{note}</p>
        )}
      </div>
    </div>
  );
}
