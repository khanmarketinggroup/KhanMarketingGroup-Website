"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "white" | "black";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  type?: "full" | "short";
}

export function Logo({ variant = "white", className, size = "md", type = "full" }: LogoProps) {
  // Width-based sizing
  const sizeStyles = {
    full: {
      sm: { width: 120, height: 45 },   // Header - compact
      md: { width: 180, height: 68 },   // Footer
      lg: { width: 168, height: 63 },   // Hero (30% smaller from 240)
      xl: { width: 400, height: 150 },  // Extra large
    },
    short: {
      sm: { width: 65, height: 65 },    // Header - compact (30% bigger)
      md: { width: 70, height: 70 },    // Medium
      lg: { width: 100, height: 100 },  // Large
      xl: { width: 150, height: 150 },  // Extra large
    }
  };

  const dimensions = sizeStyles[type][size];

  let imageSrc: string;
  if (type === "short") {
    // Short KMG logo (favicon)
    imageSrc = "/portfolio/favicon.png";
  } else {
    // Full logo
    imageSrc = variant === "white" ? "/portfolio/logo-white.png" : "/portfolio/logo-black.png";
  }

  return (
    <div className={cn("relative", className)}>
      <Image
        src={imageSrc}
        alt="Khan Marketing Group"
        width={dimensions.width}
        height={dimensions.height}
        className="w-auto h-auto"
        priority
      />
    </div>
  );
}
