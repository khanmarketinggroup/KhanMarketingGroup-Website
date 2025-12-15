"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "white" | "black";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "white", className, size = "md" }: LogoProps) {
  const textColor = variant === "white" ? "#ffffff" : "#000000";
  const bgColor = variant === "white" ? "rgba(255,255,255,0.9)" : "#000000";
  const boxTextColor = variant === "white" ? "#000000" : "#ffffff";

  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };

  return (
    <svg
      viewBox="0 0 400 150"
      className={cn(sizeClasses[size], "w-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* KHAN text */}
      <text
        x="200"
        y="70"
        textAnchor="middle"
        fontFamily="'Times New Roman', Georgia, serif"
        fontSize="72"
        fontWeight="400"
        letterSpacing="8"
        fill={textColor}
      >
        KHAN
      </text>

      {/* MARKETING box */}
      <rect x="45" y="90" width="195" height="40" fill={bgColor} />
      <text
        x="142"
        y="118"
        textAnchor="middle"
        fontFamily="'Times New Roman', Georgia, serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="3"
        fill={boxTextColor}
      >
        MARKETING
      </text>

      {/* GROUP text */}
      <text
        x="310"
        y="118"
        textAnchor="middle"
        fontFamily="'Times New Roman', Georgia, serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="3"
        fill={textColor}
      >
        GROUP
      </text>
    </svg>
  );
}

