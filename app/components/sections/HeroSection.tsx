"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const BackgroundBeams = () => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const beams = beamsRef.current;
    const circles = beams.querySelectorAll("div");

    // Create floating animation for background circles
    gsap.to(circles[0], {
      y: -60,
      x: 30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to(circles[1], {
      y: 60,
      x: -30,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to(circles[2], {
      scale: 1.3,
      rotation: 15,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Add subtle pulse effect
    gsap.to(circles, {
      opacity: 0.6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 1,
    });
  }, []);

  return (
    <div ref={beamsRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/50 blur-[100px]"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-teal-500/30 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-[80px]"
      />
    </div>
  );
};

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ delay: 0.2 });

    // Animate title with fade in
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate subtitle
    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Animate buttons with stagger
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll("button");
      tl.to(
        buttons,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    }

    // Animate image with rotation and scale
    if (imageRef.current) {
      tl.to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Add floating animation to image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Add glow effect to image
      const glowEffect = imageRef.current.querySelector(".glow-effect");
      if (glowEffect) {
        gsap.to(glowEffect, {
          opacity: 0.8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }
    }

    // Start the greetings text animation after initial animation
    setTimeout(() => {
      startGreetingsAnimation();
    }, 2000);
  }, []);

  const startGreetingsAnimation = () => {
    if (!titleRef.current) {
      console.log("Title ref not found");
      return;
    }

    const greetingSpan = titleRef.current.querySelector(".greeting-word");
    if (!greetingSpan) {
      console.log("Greeting span not found");
      return;
    }

    console.log("Starting greetings animation");

    const greetings = [
      "নমস্কার",
      "¡Hola",
      "Bonjour",
      "Ciao",
      "Hallo",
      "Olá",
      "Привет",
      "こんにちは",
      "안녕하세요",
      "你好",
      "नमस्ते",
      "مرحبا",
      "Greetings",
    ];

    let currentIndex = 0;

    const animateGreetings = () => {
      if (!greetingSpan) return;

      console.log("Animating to:", greetings[currentIndex]);

      // Create a timeline for the flip animation
      const tl = gsap.timeline();

      tl.to(greetingSpan, {
        rotationX: 90,
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
        .call(() => {
          // Change text
          if (greetingSpan) {
            greetingSpan.textContent = greetings[currentIndex];
            console.log("Text changed to:", greetingSpan.textContent);
          }
        })
        .to(greetingSpan, {
          rotationX: 0,
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        })
        .call(() => {
          currentIndex = (currentIndex + 1) % greetings.length;
          setTimeout(animateGreetings, 2000);
        });
    };

    // Start the animation after a delay
    setTimeout(animateGreetings, 600);
  };

  return (
    <div
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <BackgroundBeams />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <div className="mb-8">
              <h1
                ref={titleRef}
                className="text-4xl font-bold text-white md:text-7xl opacity-0"
                style={{ transform: "translateY(50px)" }}
              >
                <span
                  className="greeting-word inline-block transform-gpu perspective-1000"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  Greetings
                </span>
                ! I&apos;m Anindo 👋🏻
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="mb-12 text-lg text-gray-400 md:text-xl opacity-0"
              style={{ transform: "translateY(30px)" }}
            >
              I build, ship, and scale digital products. Got a project in mind?
              How can I help?
            </p>

            <div ref={buttonsRef} className="flex items-center gap-6">
              <Link
                href="https://cal.com/anindo-neel-dutta-epyib1/30min"
                target="_blank"
              >
                <button
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 p-[1px] transition-all hover:scale-105 opacity-0"
                  style={{ transform: "translateY(20px) scale(0.8)" }}
                >
                  <span className="relative z-10 block rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all group-hover:bg-transparent">
                    Book a call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </Link>
              <Link href="#projects">
                <button
                  className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 p-[1px] backdrop-blur-sm transition-all hover:scale-105 opacity-0"
                  style={{ transform: "translateY(20px) scale(0.8)" }}
                >
                  <span className="relative z-10 block rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all group-hover:bg-transparent">
                    View Projects
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative aspect-square w-full max-w-[600px] overflow-hidden rounded-full transition-all duration-300 hover:rotate-12 opacity-0"
              style={{ transform: "scale(0.5) rotate(-15deg)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 glow-effect" />
              <Image
                src="/Me.png"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-full border border-white/10" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-teal-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
