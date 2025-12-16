"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
    IconWorld, 
    IconMapPin, 
    IconBrandInstagram, 
    IconPalette, 
    IconLink,
    IconSparkles
} from "@tabler/icons-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

const services = [
    { icon: IconWorld, label: "Landing Page" },
    { icon: IconMapPin, label: "GBP Setup" },
    { icon: IconBrandInstagram, label: "Social Media" },
    { icon: IconPalette, label: "Logo Design" },
    { icon: IconLink, label: "Domain Setup" },
];

export function BusinessStarterHub() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [mounted]);

    return (
        <div ref={ref} className="relative flex flex-col items-center py-16">
            {/* Service badges at top */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {services.map((service, index) => (
                    <div
                        key={service.label}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-white/[0.08]"
                        style={{
                            opacity: mounted ? (isVisible ? 1 : 0) : 1,
                            transform: mounted ? (isVisible ? 'translateY(0)' : 'translateY(-30px)') : 'none',
                            transition: `all 0.5s ease-out ${index * 0.1}s`,
                        }}
                    >
                        <service.icon className="w-4 h-4 text-[#06b6d4]" />
                        <span className="text-sm text-white">{service.label}</span>
                    </div>
                ))}
            </div>

            {/* Connecting lines - SVG */}
            <svg
                className="w-full max-w-md h-24"
                viewBox="0 0 400 100"
                fill="none"
                style={{
                    opacity: mounted ? (isVisible ? 1 : 0) : 1,
                    transition: 'opacity 1s ease-out 0.5s',
                }}
            >
                {[0, 1, 2, 3, 4].map((i) => (
                    <path
                        key={i}
                        d={`M ${80 + i * 60} 0 Q ${80 + i * 60} 50, 200 80`}
                        stroke="url(#line-gradient)"
                        strokeWidth="1.5"
                        fill="none"
                    />
                ))}
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Main hub box */}
            <div 
                className="relative w-full max-w-lg p-8 md:p-10 pt-12 rounded-2xl border border-white/[0.08] bg-[#111111]"
                style={{
                    opacity: mounted ? (isVisible ? 1 : 0) : 1,
                    transform: mounted ? (isVisible ? 'scale(1)' : 'scale(0.9)') : 'none',
                    transition: 'all 0.6s ease-out 0.8s',
                }}
            >
                {/* Top highlight line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#06b6d4]/60 to-transparent" />
                
                {/* Title badge */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-[#06b6d4] text-sm rounded-full border border-[#06b6d4]/30">
                        <IconSparkles className="w-4 h-4" />
                        Best Value
                    </div>
                </div>

                <div className="text-center pt-2">
                    <h3 
                        className="text-2xl md:text-3xl font-semibold text-white mb-1"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                        Business Starter Package
                    </h3>
                    <p className="text-sm text-[#a3a3a3] mb-6">(Your Online Presence)</p>
                    
                    <p className="text-[#d4d4d4] mb-8">
                        Everything you need to start building your online presence.
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-center mb-8">
                        <span className="text-4xl md:text-5xl font-bold text-gradient">$600</span>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                        <MovingBorderButton
                            as="a"
                            href="#contact"
                            borderRadius="9999px"
                            containerClassName="h-14 w-44"
                            className="text-base px-8 tracking-wide"
                            duration={3000}
                        >
                            Get Started
                        </MovingBorderButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
