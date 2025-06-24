"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ctaRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate main content
    tl.fromTo(
      ctaRef.current.querySelector(".cta-content"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      ctaRef.current.querySelector(".cta-subtitle"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Animate stats with proper null check
    if (statsRef.current?.children) {
      tl.fromTo(
        statsRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
    }

    // Animate buttons with proper null check
    if (buttonRef.current?.children) {
      tl.fromTo(
        buttonRef.current.children,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    }

    // Animate floating elements
    const floatingElements =
      ctaRef.current.querySelectorAll(".floating-element");
    floatingElements.forEach((el, index) => {
      gsap.to(el, {
        y: -20,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2,
      });
    });

    // Pulse animation for urgency
    const urgencyElement = ctaRef.current.querySelector(".urgency-pulse");
    if (urgencyElement) {
      gsap.to(urgencyElement, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <section ref={ctaRef} className="relative py-20">
      {/* Animated Background - matching the existing style */}
      <div className="-absolute inset-0">
        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-teal-500/30 blur-[100px] floating-element" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-[80px] floating-element" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center">
          {/* Main CTA Content */}
          <motion.div
            className="cta-content mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 ring-1 ring-emerald-500/20">
                <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 urgency-pulse"></span>
                Limited Availability - Book Now
              </span>
            </div>

            <h2 className="mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-6xl">
              Ready to Build Something
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>

            <p className="cta-subtitle mx-auto mb-12 max-w-3xl text-lg text-gray-400 md:text-xl">
              Join 50+ founders who&apos;ve transformed their ideas into
              successful products. Let&apos;s create something that changes the
              world together.
            </p>
          </motion.div>

          {/* Social Proof Stats - matching project card style */}
          <motion.div
            ref={statsRef}
            className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-emerald-400 md:text-4xl">
                15+
              </div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-teal-400 md:text-4xl">
                98%
              </div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-emerald-400 md:text-4xl">
                24h
              </div>
              <div className="text-sm text-gray-400">Response Time</div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons - matching hero section button style */}
          <motion.div
            ref={buttonRef}
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Primary CTA - matching hero primary button */}
            <Link
              href="https://cal.com/anindo-neel-dutta-epyib1/30min"
              target="_blank"
            >
              <motion.button
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 p-[1px] transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 block rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all group-hover:bg-transparent">
                  Book a call
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            </Link>

            {/* Secondary CTA - matching hero secondary button */}
            <Link href="#projects">
              <motion.button
                className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 p-[1px] backdrop-blur-sm transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 block rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all group-hover:bg-transparent">
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
