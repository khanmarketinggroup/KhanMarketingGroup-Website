"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "white" | "black";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ variant = "white", className, size = "md" }: LogoProps) {
  // Width-based sizing (logo is wider than tall)
  const sizeStyles = {
    sm: { width: 120, height: 45 },   // Header - compact
    md: { width: 180, height: 68 },   // Footer
    lg: { width: 300, height: 113 },  // Large
    xl: { width: 400, height: 150 },  // Extra large
  };

  const dimensions = sizeStyles[size];
  const imageSrc = variant === "white" ? "/portfolio/logo-white.png" : "/portfolio/logo-black.png";

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
