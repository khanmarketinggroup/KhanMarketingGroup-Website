"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MovingBorder } from "@/components/ui/moving-border";

const serviceOptions = [
  "Website",
  "Google Business Profile",
  "Social Media Setup",
  "Logo Design",
  "Domain Setup",
  "Professional Email Setup",
  "Print Design",
  "Business Starter Package",
  "Google & Social Media Ads (Waitlist)",
  "Social Media Posts (Waitlist)",
];

const contactMethods = ["Call", "Text", "Email"];

export function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    services: [] as string[],
    contactMethod: "",
    projectDetails: "",
    hearAboutUs: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "9fabd736-cee0-4de9-a27d-1a08eb52a2be",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business_name: formData.businessName,
          services: formData.services.join(", "),
          preferred_contact: formData.contactMethod,
          project_details: formData.projectDetails,
          referral_source: formData.hearAboutUs,
          subject: `New Inquiry from ${formData.name} - ${formData.businessName}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          services: [],
          contactMethod: "",
          projectDetails: "",
          hearAboutUs: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = cn(
    "w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/[0.12]",
    "text-white placeholder:text-[#707070]",
    "focus:outline-none focus:border-[#2563eb]/60 focus:ring-2 focus:ring-[#2563eb]/20",
    "transition-all duration-300"
  );

  if (submitStatus === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2563eb]/20 to-[#06b6d4]/20 flex items-center justify-center mx-auto mb-6 border border-[#06b6d4]/30">
          <svg className="w-8 h-8 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
          Message Sent!
        </h3>
        <p className="text-[#d4d4d4] mb-6">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-[#06b6d4] hover:text-[#22d3ee] transition-colors text-sm"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#d4d4d4] mb-2">Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm text-[#d4d4d4] mb-2">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#d4d4d4] mb-2">Phone *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClasses}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm text-[#d4d4d4] mb-2">Business Name *</label>
          <input
            type="text"
            required
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className={inputClasses}
            placeholder="Your business name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-[#d4d4d4] mb-3">Services Interested In</label>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => handleServiceToggle(service)}
              className={cn(
                "px-4 py-2 rounded-full text-sm border transition-all duration-300",
                formData.services.includes(service)
                  ? "bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white border-transparent shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-transparent text-[#d4d4d4] border-white/[0.12] hover:border-[#2563eb]/50 hover:text-white"
              )}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm text-[#d4d4d4] mb-3">Preferred Contact Method</label>
        <div className="flex gap-3">
          {contactMethods.map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => setFormData({ ...formData, contactMethod: method })}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm border transition-all duration-300",
                formData.contactMethod === method
                  ? "bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white border-transparent shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-transparent text-[#d4d4d4] border-white/[0.12] hover:border-[#2563eb]/50 hover:text-white"
              )}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm text-[#d4d4d4] mb-2">Tell Us About Your Project</label>
        <textarea
          value={formData.projectDetails}
          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          className={cn(inputClasses, "min-h-[120px] resize-none")}
          placeholder="What are you looking to accomplish?"
        />
      </div>

      <div>
        <label className="block text-sm text-[#d4d4d4] mb-2">How Did You Hear About Us?</label>
        <input
          type="text"
          value={formData.hearAboutUs}
          onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
          className={inputClasses}
          placeholder="Google, referral, social media..."
        />
      </div>

      {submitStatus === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Submit button with animated border */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full p-[2px] rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl">
          {mounted && (
            <MovingBorder duration={3000} rx="12px" ry="12px">
              <div className="h-20 w-20 bg-[radial-gradient(#06b6d4_40%,transparent_60%)] opacity-80" />
            </MovingBorder>
          )}
        </div>
        
        {/* Gradient background */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#06b6d4]" />
        
        {/* Hover glow */}
        <div className="absolute inset-[-4px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md bg-gradient-to-r from-[#2563eb]/40 to-[#06b6d4]/40" />
        
        {/* Content */}
        <div className="relative bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white py-4 rounded-xl font-medium tracking-wide">
          {isSubmitting ? "Sending..." : "Send Message"}
        </div>
      </button>
    </form>
  );
}
