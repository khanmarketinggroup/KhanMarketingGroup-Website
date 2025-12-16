"use client";

import { IconWorld } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface WebsiteTier {
  title: string;
  price: string;
  bullets: string[];
  hasButton?: boolean;
}

interface WebsiteTiersProps {
  tiers: WebsiteTier[];
}

export function WebsiteTiers({ tiers }: WebsiteTiersProps) {
  return (
    <div className="mb-12">
      {/* Header */}
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/20 flex items-center justify-center">
            <IconWorld className="w-6 h-6 text-[#06b6d4]" />
          </div>
          <h3 
            className="text-2xl font-semibold text-white"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            Websites
          </h3>
        </div>
      </ScrollReveal>

      {/* Tiers Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map((tier, index) => (
          <ScrollReveal key={tier.title} delay={index * 0.1}>
            <div className="group relative rounded-2xl overflow-hidden h-full">
              {/* Hover glow */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#2563eb]/0 to-[#06b6d4]/0 group-hover:from-[#2563eb]/10 group-hover:to-[#06b6d4]/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Card border */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-[#2563eb]/30 transition-colors duration-300" />
              
              {/* Background */}
              <div className="absolute inset-[1px] rounded-2xl bg-[#111111]" />
              
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                <h4 
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {tier.title}
                </h4>
                
                {/* Price or Button */}
                {tier.hasButton ? (
                  <div className="mb-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4] hover:opacity-90 transition-opacity duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                    >
                      Let&apos;s Talk
                    </a>
                  </div>
                ) : (
                  <p className="text-[#06b6d4] text-xl font-bold mb-4">{tier.price}</p>
                )}
                
                {/* Bullet points */}
                <ul className="space-y-2 flex-grow">
                  {tier.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#d4d4d4] text-sm">
                      <span className="text-[#06b6d4] mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

