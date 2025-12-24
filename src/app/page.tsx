"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { ServiceCard } from "@/components/ui/service-card";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { ContactForm } from "@/components/ContactForm";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BusinessStarterHub } from "@/components/ui/business-starter-hub";
import { WebsiteTiers } from "@/components/ui/website-tiers";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import {
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
  IconMenu2,
  IconX,
  IconLink,
  IconMailForward,
  IconUsers,
} from "@tabler/icons-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen antialiased relative">
      {/* Background Animation */}
      <BackgroundPaths />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-2 flex items-center justify-between">
          {/* Logo - left-aligned on all screens */}
          <div className="flex flex-col">
            <div className="scale-[0.6] md:scale-100 origin-left md:origin-center">
              <Logo variant="white" size="sm" type="short" />
            </div>
            <AnimatedUnderline className="w-[39px] md:w-20 mt-0.5 md:mt-1 self-start md:self-center" />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="nav-link text-[#d4d4d4] text-sm tracking-wide">
              Services
            </a>
            <a href="#about" className="nav-link text-[#d4d4d4] text-sm tracking-wide">
              About
            </a>
            <a href="#portfolio" className="nav-link text-[#d4d4d4] text-sm tracking-wide">
              Portfolio
            </a>
            <a
              href="#contact"
              className="nav-button-premium px-6 py-2.5 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-full text-sm font-medium tracking-wide"
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
              <div className="px-4 py-5 flex flex-col gap-3">
                <a
                  href="#services"
                  onClick={handleNavClick}
                  className="nav-link text-[#d4d4d4] text-base py-2"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={handleNavClick}
                  className="nav-link text-[#d4d4d4] text-base py-2"
                >
                  About
                </a>
                <a
                  href="#portfolio"
                  onClick={handleNavClick}
                  className="nav-link text-[#d4d4d4] text-base py-2"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="nav-button-premium px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-full text-base font-medium text-center mt-2"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center overflow-hidden pt-20 md:pt-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 w-full text-center">
          {/* Full Logo */}
          <div
            className={`flex justify-center mt-12 md:mt-16 mb-6 md:mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100">
              <Logo variant="white" size="lg" type="full" />
            </div>
          </div>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-4 md:mb-6 tracking-tight transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            <span className="md:whitespace-nowrap">Marketing that actually works</span>
            <br />
            <span className="text-gradient">for local businesses.</span>
          </h1>

          <p
            className={`text-base md:text-lg text-[#d4d4d4] mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Websites and Google listings that bring in customers — not just clicks.
            Built by someone who&apos;s done it for their own business first.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <MovingBorderButton
              as="a"
              href="#contact"
              borderRadius="9999px"
              containerClassName="h-14 w-44 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-shadow duration-300 clickable-hover"
              className="text-base px-8 tracking-wide"
              duration={3000}
            >
              Get in Touch
            </MovingBorderButton>

            <a
              href="#services"
              className="clickable-hover px-8 py-4 rounded-full text-[#d4d4d4] hover:text-white border border-white/[0.1] hover:border-white/25 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 text-base tracking-wide"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <h2 
                className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Our Services
              </h2>
              <div className="w-24 h-[2px] premium-divider mx-auto" />
            </ScrollReveal>
          </div>

          {/* ROW 1 - Website Tiers */}
          <WebsiteTiers tiers={websiteTiers} />

          {/* ROW 2 - Online Presence Setup */}
          <div className="mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {onlinePresenceServices.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.1}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    subtitle={service.subtitle}
                    price={service.price}
                    bullets={service.bullets}
                    note={service.note}
                    index={index}
                    unavailable={service.unavailable}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ROW 3 - Branding */}
          <div className="mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {brandingServices.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.1}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    subtitle={service.subtitle}
                    price={service.price}
                    bullets={service.bullets}
                    note={service.note}
                    index={index}
                    unavailable={service.unavailable}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ROW 4 - Monthly Services (centered) */}
          <div className="mt-8">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] w-full">
                {monthlyServices.map((service, index) => (
                  <ScrollReveal key={service.title} delay={index * 0.1}>
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      subtitle={service.subtitle}
                      price={service.price}
                      bullets={service.bullets}
                      note={service.note}
                      index={index}
                      unavailable={service.unavailable}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Package Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <BusinessStarterHub />
        </div>
      </section>

      {/* Why Khan Marketing Group Exists Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Collapsible Story Toggle */}
            <div className="relative flex justify-center mb-16">
              {/* Floating Tab */}
              <div
                className="absolute -top-3 z-20 bg-[#06b6d4] text-black px-4 py-1.5 rounded-full text-sm font-bold"
                style={{
                  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.4)',
                  cursor: 'pointer'
                }}
              >
                {storyExpanded ? 'Click to close ▲' : 'Click to read ▼'}
              </div>

              {/* Main Button */}
              <button
                onClick={() => {
                  setButtonPressed(true);
                  setTimeout(() => {
                    setButtonPressed(false);
                    setStoryExpanded(!storyExpanded);
                  }, 100);
                }}
                className="group relative px-12 py-6 rounded-full bg-[#111111] text-[#2563eb] border-2 border-[#2563eb]/30 font-bold text-2xl md:text-3xl transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-[#2563eb]/60"
                style={{
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  animation: storyExpanded ? 'button-bounce-blue 0.4s ease-out' : 'pulse-glow-blue 3s ease-in-out infinite',
                  transform: buttonPressed ? 'scale(0.95)' : '',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(37, 99, 235, 1), 0 0 80px rgba(37, 99, 235, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                Why Khan Marketing Group Exists
              </button>
            </div>

            {/* Collapsible Story Content */}
            <motion.div
              initial={false}
              animate={{
                height: storyExpanded ? 'auto' : 0,
                opacity: storyExpanded ? 1 : 0,
                y: storyExpanded ? 0 : -20,
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                opacity: { duration: 0.5 },
                y: { duration: 0.5 }
              }}
              className="overflow-hidden"
            >
              <motion.div
                className="space-y-8 pt-4"
                initial={false}
                animate={storyExpanded ? "open" : "closed"}
                variants={{
                  open: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {/* Opening Story */}
                <motion.div
                  className="space-y-5 text-[#d4d4d4] text-lg leading-relaxed"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p>
                    Hey, I&apos;m Omair Khan, founder of Khan Marketing Group.
                  </p>
                  <p>
                    Before starting Khan Marketing Group, I paid <span className="text-[#06b6d4] font-semibold">$2,500</span> to a marketing company to set up my other business&apos;s online presence — website, Google Business Profile, professional email, the basics.
                  </p>
                  <p>
                    What I got back? A Wix website so bad I had to hire a freelancer on Fiverr for another <span className="text-[#06b6d4] font-semibold">$500</span> just to fix it. He did decent work — but every time I needed a change, I had to message him through the app and wait for him to be available. I couldn&apos;t even edit it myself. Every time I touched something in Wix, three other things would break.
                  </p>
                  <p>
                    That&apos;s <span className="text-[#06b6d4] font-semibold">$3,000</span> spent, and I still didn&apos;t have a website I was happy with.
                  </p>
                  <p>
                    So I learned to build websites the right way.
                  </p>
                </motion.div>

                {/* Three Options */}
                <motion.div
                  className="space-y-5 text-[#d4d4d4] text-lg leading-relaxed"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-white font-semibold text-xl">
                    Here&apos;s the thing — you have three options:
                  </p>
                  <p>
                    <span className="text-white font-semibold">Option 1: Hire a freelancer.</span> Sites like Fiverr charge anywhere from $300-$1,000. Sometimes you get lucky, sometimes you don&apos;t. Either way, once the job is done, you&apos;re on your own — just a chat thread on an app.
                  </p>
                  <p>
                    <span className="text-white font-semibold">Option 2: Hire an agency.</span> Agencies do quality work — but you&apos;re paying for it. Most charge $1,500-$10,000 depending on the scope. If you have the budget, nothing wrong with that.
                  </p>
                  <p>
                    <span className="text-white font-semibold">Option 3: Build it yourself.</span> Platforms like Wix and GoDaddy make it look easy. But your website is the first thing people see before they decide to work with you. If it looks like a basic template, you&apos;ve already lost their trust. And you&apos;re still paying $200-$400/year in platform fees — forever.
                  </p>
                </motion.div>

                {/* Platform Costs Intro */}
                <motion.div
                  className="text-[#d4d4d4] text-lg leading-relaxed"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-white font-semibold text-xl">
                    Think doing it yourself saves money? Here&apos;s what these &quot;affordable&quot; platforms actually cost:
                  </p>
                </motion.div>

            {/* Cost Comparison Section */}
            <motion.div
              className="my-12"
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -10 }
              }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                The Real Cost of &quot;Affordable&quot; Website Builders
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* GoDaddy Card */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 hover:border-[#ef4444]/30 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                    GoDaddy Website Builder
                  </h4>
                  <div className="space-y-3 text-[#d4d4d4]">
                    <div className="flex justify-between items-center">
                      <span>Basic plan:</span>
                      <span className="text-[#ef4444] font-semibold">$204/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Premium plan:</span>
                      <span className="text-[#ef4444] font-semibold">$360/year</span>
                    </div>
                    <p className="text-sm italic text-[#a3a3a3] pt-2">
                      And that&apos;s BEFORE your domain and email
                    </p>
                  </div>
                </div>

                {/* Wix Card */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 hover:border-[#ef4444]/30 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                    Wix
                  </h4>
                  <div className="space-y-3 text-[#d4d4d4]">
                    <div className="flex justify-between items-center">
                      <span>Core plan:</span>
                      <span className="text-[#ef4444] font-semibold">$348/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Domain renewal:</span>
                      <span className="text-[#ef4444] font-semibold">$21/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Email (resold at markup):</span>
                      <span className="text-[#ef4444] font-semibold">$168/year</span>
                    </div>
                    <div className="border-t border-white/[0.08] pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total:</span>
                        <span className="text-[#ef4444] font-bold text-xl">$537/year</span>
                      </div>
                      <p className="text-sm italic text-[#a3a3a3] pt-2">
                        Plus, they resell email services at nearly double the direct price.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-[#d4d4d4] text-lg leading-relaxed">
                <p>
                  With Wix, your website, domain, and email are all locked to their platform — and they charge a premium for it. GoDaddy is more flexible, but you&apos;re still paying hundreds per year for something that doesn&apos;t have to cost that much. <span className="text-white font-semibold">With us, you own everything outright.</span>
                </p>
              </div>
            </motion.div>

            {/* How We Do It Differently */}
            <motion.div
              className="my-12"
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -10 }
              }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                How We Do It Differently
              </h3>

              <div className="space-y-5 text-[#d4d4d4] text-lg leading-relaxed">
                <p>
                  I build you a professional website that doesn&apos;t look like a DIY template — hosted free on modern platforms. Your domain is registered in <span className="text-white font-semibold">YOUR name</span>. Professional email set up directly for you.
                </p>
                <p>
                  You&apos;re not locked into any platform. Need a small change down the road? Text me. I&apos;ll handle it. Want another developer to take over someday? They can — you own everything.
                </p>

                <div className="rounded-2xl border border-[#06b6d4]/30 bg-[#06b6d4]/5 p-6 my-6">
                  <p className="text-white font-medium mb-4">After the initial build, here&apos;s what you&apos;re looking at:</p>
                  <div className="space-y-2 text-[#d4d4d4]">
                    <div className="flex justify-between items-center">
                      <span>Domain:</span>
                      <span className="text-[#06b6d4] font-semibold">Around $20/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Professional email:</span>
                      <span className="text-[#06b6d4] font-semibold">Around $85/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Website hosting:</span>
                      <span className="text-[#06b6d4] font-semibold">FREE</span>
                    </div>
                    <div className="border-t border-[#06b6d4]/30 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-white">Total:</span>
                        <span className="text-[#06b6d4] font-bold text-2xl">Around $105/year</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#F5D547] text-base mt-4 leading-relaxed italic text-left font-medium">
                    These are your only ongoing costs — paid directly to the domain provider and email provider, not to us.
                    <br /><br />
                    Our fee is the one-time build cost. If you want help managing your website after launch, we can customize a plan based on what you need.
                  </p>
                </div>

                <p className="text-xl text-white font-semibold">
                  That&apos;s it. No $400+ yearly fees. No surprise renewals. No platform lock-in.
                </p>

                <p>
                  And if you ever want to walk away? I&apos;ll hand you everything. It&apos;s yours. No questions asked.
                </p>
              </div>
            </motion.div>

                {/* Proof It Works */}
                <motion.div
                  className="my-12"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-6 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                    Proof It Works
                  </h3>

                  <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-white/[0.06]">
                      <div className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">Clean & Green Property Care</p>
                        <p className="text-[#06b6d4] text-sm">40+ five-star Google reviews</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-white/[0.06]">
                      <div className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">Shifa Home Care</p>
                        <p className="text-[#06b6d4] text-sm">Went from 3.9 to 4.8 stars</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-white/[0.06]">
                      <div className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">Khan Marketing Group</p>
                        <p className="text-[#a3a3a3] text-sm">Yes, this site too</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* The Bottom Line */}
                <motion.div
                  className="my-12 space-y-6 text-[#d4d4d4] text-lg leading-relaxed"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                    The Bottom Line
                  </h3>

                  <p>
                    That&apos;s why the Business Starter Package exists — everything you need to launch your online presence, built the right way, so you actually own it. No lock-in.
                  </p>

                  <p className="text-white font-bold text-xl pt-4">
                    You work directly with the founder. No account managers. No runaround.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why KMG Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
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
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#2563eb]/20 to-[#06b6d4]/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#06b6d4]/50">
                    <IconCheck className="w-5 h-5 text-[#06b6d4]" strokeWidth={3} />
                  </div>
                  <span className="text-[#d0d0d0]">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <h2 
                className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Our Work
              </h2>
              <p className="text-[#a3a3a3] text-sm mb-6">(Click any project to see it live)</p>
              <div className="w-24 h-[2px] premium-divider mx-auto" />
            </ScrollReveal>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {portfolioItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.15} direction="right">
                <div className="w-full md:w-[380px]">
                  <PortfolioCard
                    title={item.title}
                    url={item.url}
                    details={item.details}
                    result={item.result}
                    image={item.image}
                    index={index}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-[#606060] mt-12 text-sm">More coming soon.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Let&apos;s Talk
            </h2>
            <p className="text-[#d4d4d4] text-lg">
              Let&apos;s talk about what you need. No pressure, no sales pitch.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-sm font-medium text-gradient uppercase tracking-widest mb-5">Contact Info</h3>
                <div className="space-y-6">
                  <a
                    href="tel:8472208550"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/30 flex items-center justify-center group-hover:border-[#06b6d4]/50 transition-colors flex-shrink-0">
                      <IconPhone className="w-4 h-4 text-[#06b6d4]" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[#06b6d4] text-sm font-medium">Call or Text</span>
                      <span className="text-[#d0d0d0] group-hover:text-white transition-colors">(847) 220-8550</span>
                    </div>
                  </a>
                  <a
                    href="mailto:Info@KhanMarketingGroup.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/30 flex items-center justify-center group-hover:border-[#06b6d4]/50 transition-colors flex-shrink-0">
                      <IconMail className="w-4 h-4 text-[#06b6d4]" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[#06b6d4] text-sm font-medium">Email</span>
                      <span className="text-[#d0d0d0] group-hover:text-white transition-colors">Info@KhanMarketingGroup.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gradient uppercase tracking-widest mb-5">Office</h3>
                <div className="flex items-start gap-4 text-[#d4d4d4]">
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
      <footer className="py-16 px-6 border-t border-white/[0.06] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Left - Contact */}
            <div>
              <h4 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-widest mb-5">Contact</h4>
              <div className="space-y-2 text-[#d4d4d4] text-sm leading-relaxed">
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

            {/* Middle - Follow Us */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-widest mb-5">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/110539080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:border-[#2563eb]/30 transition-all"
                >
                  <IconBrandLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61584909881446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:border-[#2563eb]/30 transition-all"
                >
                  <IconBrandFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/khanmarketinggroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:border-[#2563eb]/30 transition-all"
                >
                  <IconBrandInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right - Logo + Tagline */}
            <div className="flex flex-col items-end text-right">
              <Logo variant="white" size="md" className="mb-4" />
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                Marketing that works<br />for local businesses.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] text-center">
            <p className="text-[#606060] text-sm">
              © 2025 Khan Marketing Group. All rights reserved.
            </p>
            <p className="text-[#606060] text-sm mt-2 opacity-70">
              Built in-house
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ROW 2 - ONLINE PRESENCE SETUP
const onlinePresenceServices = [
  {
    icon: <IconMapPin className="w-6 h-6" />,
    title: "Google Business Profile",
    subtitle: undefined,
    price: "$119",
    bullets: [
      "Full profile setup or optimization",
      "Photo uploads",
      "Service & product listings",
      "Review generation strategy",
    ],
    note: undefined,
    unavailable: undefined,
  },
  {
    icon: <IconUsers className="w-6 h-6" />,
    title: "Social Media Setup",
    subtitle: undefined,
    price: "$119",
    bullets: [
      "Facebook profile setup",
      "Instagram profile setup",
      "LinkedIn profile setup",
      "Professional branding",
    ],
    note: undefined,
    unavailable: undefined,
  },
  {
    icon: <IconLink className="w-6 h-6" />,
    title: "Domain Setup",
    subtitle: undefined,
    price: "$99",
    bullets: [
      "Domain registration",
      "Technical setup to connect your web address",
      "Keeps your contact info private",
      "Email forwarding setup",
    ],
    note: undefined,
    unavailable: undefined,
  },
];

// ROW 3 - BRANDING
const brandingServices = [
  {
    icon: <IconPalette className="w-6 h-6" />,
    title: "Logo Design",
    subtitle: undefined,
    price: "Starting at $149",
    bullets: [
      "Simple, clean designs",
      "2 initial concepts",
      "2 revision rounds",
      "All file formats you need",
    ],
    note: "Need something more comprehensive? Reach out.",
    unavailable: undefined,
  },
  {
    icon: <IconMailForward className="w-6 h-6" />,
    title: "Professional Email Setup",
    subtitle: undefined,
    price: "$99",
    bullets: [
      "Professional email address (like you@yourbusiness.com)",
      "Setup in your email app (Outlook, Gmail, etc.)",
      "Secure setup & testing",
    ],
    note: undefined,
    unavailable: undefined,
  },
  {
    icon: <IconPrinter className="w-6 h-6" />,
    title: "Print Design",
    subtitle: undefined,
    price: "Starting at $150",
    bullets: [
      "Business cards",
      "Flyers",
      "Brochures",
      "Banners & signage",
    ],
    note: undefined,
    unavailable: undefined,
  },
];

// ROW 4 - MONTHLY SERVICES
const monthlyServices = [
  {
    icon: <IconAd className="w-6 h-6" />,
    title: "Google & Meta Ads",
    subtitle: "(Google + Facebook + Instagram)",
    price: "$1,000/mo",
    bullets: [
      "Google Search & Display ads",
      "Facebook & Instagram ads",
      "Ad spend included",
      "Monthly performance reports",
    ],
    note: undefined,
    unavailable: true,
  },
  {
    icon: <IconBrandInstagram className="w-6 h-6" />,
    title: "Social Media Posts",
    subtitle: undefined,
    price: "$300/mo",
    bullets: [
      "Facebook & Instagram content",
      "3-4 posts per week",
      "Custom graphics",
      "Caption writing",
    ],
    note: undefined,
    unavailable: true,
  },
];

const websiteTiers = [
  {
    title: "Basic Landing Page",
    price: "$249",
    bullets: [
      "Single page design",
      "Mobile responsive",
      "Optimized for search engines",
      "Custom contact form",
    ],
  },
  {
    title: "Standard Website",
    price: "$649",
    bullets: [
      "3-5 pages",
      "Mobile responsive",
      "Custom forms",
      "Basic animations",
    ],
  },
  {
    title: "Custom Builds",
    price: "Contact us for a quote",
    hasButton: true,
    bullets: [
      "Complex multi-page sites",
      "Advanced features",
      "Custom functionality (like this site)",
    ],
  },
];

const whyKmgReasons = [
  "One-on-one access to the founder",
  "Fast responses (usually same day)",
  "No long-term contracts — you're never locked in",
  "Local business owners ourselves — we know what actually works",
  "We've done this for our own business first — and seen real results. 40+ five-star Google reviews, plus helping other local businesses grow.",
  "No hidden fees — the price we quote is the price you pay",
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
];
