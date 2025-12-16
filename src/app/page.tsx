"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { ServiceCard } from "@/components/ui/service-card";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { ContactForm } from "@/components/ContactForm";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import Image from "next/image";
import {
  IconWorld,
  IconAd,
  IconMapPin,
  IconBrandInstagram,
  IconPrinter,
  IconPalette,
  IconCheck,
  IconPhone,
  IconMail,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMapPinFilled,
  IconSparkles,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen antialiased relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between md:justify-between">
          {/* Mobile: empty spacer for centering */}
          <div className="w-10 md:hidden" />
          
          {/* Logo - centered on mobile, left on desktop */}
          <div className="md:flex-none">
            <Logo variant="white" size="sm" />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-[#b0b0b0] hover:text-white transition-colors text-sm tracking-wide">
              Services
            </a>
            <a href="#about" className="text-[#b0b0b0] hover:text-white transition-colors text-sm tracking-wide">
              About
            </a>
            <a href="#portfolio" className="text-[#b0b0b0] hover:text-white transition-colors text-sm tracking-wide">
              Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-full text-sm font-medium hover:opacity-90 transition-all tracking-wide"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.05] overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <a 
                  href="#services" 
                  onClick={handleNavClick}
                  className="text-[#b0b0b0] hover:text-white transition-colors text-base py-2"
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  onClick={handleNavClick}
                  className="text-[#b0b0b0] hover:text-white transition-colors text-base py-2"
                >
                  About
                </a>
                <a 
                  href="#portfolio" 
                  onClick={handleNavClick}
                  className="text-[#b0b0b0] hover:text-white transition-colors text-base py-2"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-full text-base font-medium text-center mt-2"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Device Mockup */}
            <div className="order-1">
              <div 
                className={`relative transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              >
                {/* Laptop mockup */}
                <div className="relative mx-auto max-w-xl">
                  {/* Glow effect behind */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/20 to-[#06b6d4]/20 blur-3xl rounded-full scale-110" />
                  
                  {/* Laptop frame */}
                  <div className="relative bg-[#1a1a1a] rounded-2xl p-3 border border-white/[0.1] shadow-2xl">
                    {/* Screen */}
                    <div className="aspect-[16/10] bg-[#0a0a0a] rounded-lg overflow-hidden border border-white/[0.05]">
                      <Image
                        src="/portfolio/clean-green.jpg"
                        alt="Clean & Green Property Care Website"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover object-top"
                        priority
                      />
                    </div>
                    {/* Laptop base */}
                    <div className="h-4 bg-[#1a1a1a] rounded-b-xl mt-2 mx-auto w-1/3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Text */}
            <div className="order-2">
              <div 
                className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              >
                <Logo variant="white" size="lg" className="mb-10 h-20 md:h-24" />
              </div>

              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-6 tracking-tight transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Marketing that actually works{" "}
                <span className="text-gradient">for local businesses.</span>
              </h1>

              <p 
                className={`text-lg text-[#b0b0b0] mb-10 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              >
                Websites, ads, and Google listings that bring in customers — not just clicks.
                Built by someone who&apos;s done it for their own business first.
              </p>

              <div 
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              >
                <MovingBorderButton
                  as="a"
                  href="#contact"
                  borderRadius="9999px"
                  containerClassName="h-14 w-44"
                  className="text-base px-8 tracking-wide"
                  duration={3000}
                >
                  Let&apos;s Talk
                </MovingBorderButton>
                
                <a
                  href="#services"
                  className="px-8 py-4 rounded-full text-[#b0b0b0] hover:text-white border border-white/[0.1] hover:border-white/25 transition-all duration-300 text-base tracking-wide"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Our Services
            </h2>
            <div className="w-24 h-[2px] premium-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Starter Package Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto relative">
          {/* Glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#2563eb]/[0.08] via-[#06b6d4]/[0.05] to-[#2563eb]/[0.08] rounded-3xl blur-2xl" />
          
          <div className="relative p-10 md:p-14 rounded-3xl bg-[#111111] border border-white/[0.08] overflow-hidden">
            {/* Top highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#06b6d4]/60 to-transparent" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#2563eb]/10 to-[#06b6d4]/10 text-[#06b6d4] text-sm rounded-full mb-8 border border-[#06b6d4]/20">
                <IconSparkles className="w-4 h-4" />
                Best Value
              </div>
              <h2 
                className="text-3xl md:text-4xl font-semibold text-white mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Business Starter Package
              </h2>
              <p className="text-[#b0b0b0] text-lg mb-10">
                Everything you need to start building your online presence.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {starterPackageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#2563eb]/20 to-[#06b6d4]/20 flex items-center justify-center border border-[#06b6d4]/30">
                      <IconCheck className="w-3 h-3 text-[#06b6d4]" />
                    </div>
                    <span className="text-[#d0d0d0]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <div>
                  <span className="text-[#606060] line-through text-lg">$2,000</span>
                  <span className="text-5xl font-bold text-gradient ml-3">$1,500</span>
                  <span className="text-[#06b6d4] ml-3 text-sm">Launch Special</span>
                </div>
                <MovingBorderButton
                  as="a"
                  href="#contact"
                  borderRadius="9999px"
                  containerClassName="h-12 w-40"
                  className="text-sm px-6 tracking-wide"
                  duration={3000}
                >
                  Get Started
                </MovingBorderButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              About the Founder
            </h2>
            <div className="w-24 h-[2px] premium-divider mx-auto" />
          </div>

          <div className="space-y-6">
            <p className="text-3xl font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              I&apos;m Omair Khan.
            </p>
            <div className="space-y-5 text-[#b0b0b0] text-lg leading-relaxed">
              <p>
                I run the complete backend of Clean & Green Property Care — marketing, operations, and business development. My partner handles the services and manages our team. I built the website, set up the Google listing, ran the ads, and figured out what actually works. Today the company has{" "}
                <span className="text-gradient font-semibold">40+ five-star reviews</span> and steady customers.
              </p>
              <p>
                I also helped Shifa Home Care&apos;s Bloomingdale office go from{" "}
                <span className="text-gradient font-semibold">3.9 to 4.8 stars</span> with 20+ reviews.
              </p>
              <p>
                I learned marketing by doing it for a real business first. Now I help other local business owners do the same — without the confusing jargon or overpriced agencies.
              </p>
              <p className="text-white font-semibold text-xl pt-2">
                You work directly with me. No account managers, no runaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why KMG Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Why Work With Us
            </h2>
            <div className="w-24 h-[2px] premium-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {whyKmgReasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#2563eb]/30 transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2563eb]/20 to-[#06b6d4]/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#06b6d4]/30">
                  <IconCheck className="w-3.5 h-3.5 text-[#06b6d4]" />
                </div>
                <span className="text-[#d0d0d0]">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Our Work
            </h2>
            <div className="w-24 h-[2px] premium-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={item.title}
                title={item.title}
                url={item.url}
                details={item.details}
                result={item.result}
                image={item.image}
                index={index}
              />
            ))}
          </div>

          <p className="text-center text-[#606060] mt-12 text-sm">More coming soon.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Ready to get more customers?
            </h2>
            <p className="text-[#b0b0b0] text-lg">
              Let&apos;s talk about what you need. No pressure, no sales pitch.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-sm font-medium text-gradient uppercase tracking-widest mb-5">Contact Info</h3>
                <div className="space-y-4">
                  <a
                    href="tel:8472208550"
                    className="flex items-center gap-4 text-[#d0d0d0] hover:text-white transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/30 flex items-center justify-center group-hover:border-[#06b6d4]/50 transition-colors">
                      <IconPhone className="w-4 h-4 text-[#06b6d4]" />
                    </div>
                    <span>(847) 220-8550</span>
                  </a>
                  <a
                    href="mailto:Info@KhanMarketingGroup.com"
                    className="flex items-center gap-4 text-[#d0d0d0] hover:text-white transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/30 flex items-center justify-center group-hover:border-[#06b6d4]/50 transition-colors">
                      <IconMail className="w-4 h-4 text-[#06b6d4]" />
                    </div>
                    <span>Info@KhanMarketingGroup.com</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gradient uppercase tracking-widest mb-5">Office</h3>
                <div className="flex items-start gap-4 text-[#b0b0b0]">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/30 flex items-center justify-center flex-shrink-0">
                    <IconMapPinFilled className="w-4 h-4 text-[#06b6d4]" />
                  </div>
                  <div className="pt-2.5 leading-relaxed">
                    655 Deerfield Rd
                    <br />
                    Suite 100, Unit 404
                    <br />
                    Deerfield, IL 60015
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-[#111111] rounded-2xl p-8 border border-white/[0.08]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Logo variant="white" size="sm" className="mb-5" />
              <p className="text-[#808080] text-sm leading-relaxed">
                Marketing that works for local businesses.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#808080] uppercase tracking-widest mb-5">Contact</h4>
              <div className="space-y-2 text-[#b0b0b0] text-sm leading-relaxed">
                <p>655 Deerfield Rd</p>
                <p>Suite 100, Unit 404</p>
                <p>Deerfield, IL 60015</p>
                <p className="mt-4">
                  <a href="mailto:Info@KhanMarketingGroup.com" className="hover:text-white transition-colors">
                    Info@KhanMarketingGroup.com
                  </a>
                </p>
                <p>
                  <a href="tel:8472208550" className="hover:text-white transition-colors">
                    (847) 220-8550
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#808080] uppercase tracking-widest mb-5">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/110539080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#808080] hover:text-white hover:border-[#2563eb]/30 transition-all"
                >
                  <IconBrandLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61584909881446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#808080] hover:text-white hover:border-[#2563eb]/30 transition-all"
                >
                  <IconBrandFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/khanmarketinggroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#808080] hover:text-white hover:border-[#2563eb]/30 transition-all"
                >
                  <IconBrandInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] text-center">
            <p className="text-[#606060] text-sm">
              © 2025 Khan Marketing Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    icon: <IconWorld className="w-6 h-6" />,
    title: "Websites",
    description:
      "Custom sites that look good and show up on Google. No templates. Built to get you found.",
    price: "Starting at $499",
  },
  {
    icon: <IconAd className="w-6 h-6" />,
    title: "Google & Social Ads",
    description:
      "Campaigns managed by Google-certified partners. We handle everything — you just answer the phone.",
    price: "Starting at $750/mo",
  },
  {
    icon: <IconMapPin className="w-6 h-6" />,
    title: "Google Business Profile",
    description:
      "Get set up, get reviews, get found. We'll build it or fix what you've got.",
    price: "Setup $150",
  },
  {
    icon: <IconBrandInstagram className="w-6 h-6" />,
    title: "Social Media Posts",
    description:
      "Consistent content on Facebook and Instagram. We post, you focus on your business.",
    price: "Starting at $300/mo",
  },
  {
    icon: <IconPrinter className="w-6 h-6" />,
    title: "Print Design",
    description:
      "Business cards, flyers, brochures — whatever you need to leave behind.",
    price: "Starting at $50",
  },
  {
    icon: <IconPalette className="w-6 h-6" />,
    title: "Logo Design",
    description: "Simple, clean logo to get your brand started.",
    price: "Starting at $150",
  },
];

const starterPackageFeatures = [
  "Landing page website",
  "Google Business Profile setup",
  "Social media setup (Facebook + Instagram)",
  "Basic logo design",
  "Domain setup",
];

const whyKmgReasons = [
  "You talk directly to the owner",
  "Fast responses (usually same day)",
  "No long-term contracts — you're never locked in",
  "Transparent pricing — no surprise fees",
  "Ad campaigns managed by Google-certified specialists",
];

const portfolioItems = [
  {
    title: "Clean & Green Property Care",
    url: "https://cleangreenproperty.com",
    details: "Website, Google Business Profile, Marketing",
    result: "40+ five-star reviews",
    image: "/portfolio/clean-green.jpg",
  },
  {
    title: "Shifa Home Care",
    url: "https://shifahomecareservices.com",
    details: "Website, Print Materials, Review Growth",
    result: "3.9 → 4.8 stars",
    image: "/portfolio/shifa-home-care.jpg",
  },
  {
    title: "American Physician Group",
    url: "https://americanphysiciangroup.com",
    details: "Website Design",
    image: "/portfolio/american-physician-group.jpg",
  },
];
