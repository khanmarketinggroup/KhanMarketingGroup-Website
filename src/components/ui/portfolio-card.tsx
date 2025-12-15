"use client";

import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  url: string;
  details: string;
  result?: string;
  image: string;
  index: number;
}

export function PortfolioCard({
  title,
  url,
  details,
  result,
  image,
}: PortfolioCardProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block cursor-pointer"
    >
      <div className="aspect-video bg-[#111111] rounded-xl mb-5 overflow-hidden relative border border-white/[0.06] group-hover:border-[#2563eb]/30 transition-all duration-500">
        <Image
          src={image}
          alt={`${title} Website Screenshot`}
          width={600}
          height={338}
          className="w-full h-full object-cover object-top"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/0 to-[#06b6d4]/0 group-hover:from-[#2563eb]/20 group-hover:to-[#06b6d4]/20 transition-all duration-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 backdrop-blur-sm">
            <IconExternalLink className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <h3 
        className="text-lg font-semibold text-white mb-1 group-hover:text-[#06b6d4] transition-colors duration-300"
        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
      >
        {title}
      </h3>
      <p className="text-[#808080] text-sm mb-2">{details}</p>
      {result && (
        <p className="text-gradient text-sm font-semibold">{result}</p>
      )}
    </a>
  );
}
