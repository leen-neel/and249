"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/seo";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/speaking", label: "Speaking" },
  { href: "/blog", label: "Blog" },
  { href: "/notes", label: "Notes" },
] as const;

const touchButtonClassName =
  "px-4 py-1.5 h-auto border border-[#53E6CC]/40 bg-[#53E6CC]/10 text-[#53E6CC] rounded-sm hover:border-[#53E6CC]/65 hover:bg-[#53E6CC]/18 hover:text-[#53E6CC] transition-all duration-200 hover:-translate-y-px text-[12px] font-medium";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-full w-full flex items-center justify-between px-8 lg:px-12"
      >
        <Link href="/" className="min-w-0">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <span
              className="text-[1.3rem] font-semibold leading-none text-[#53E6CC] shrink-0"
              aria-hidden="true"
            >
              &amp;
            </span>
            <span className="text-base sm:text-lg font-medium tracking-tight text-white truncate">
              {siteConfig.name}
            </span>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 items-center text-[12px] font-medium tracking-wide text-[#ccc]">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link hover:text-teal-400 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}

          <Link href="/#engagement">
            <Button variant="outline" className={touchButtonClassName}>
              Get in Touch
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-neutral-300 hover:text-teal-400 transition-colors"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[80px] z-40 bg-black/50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-x-0 top-[80px] z-50 md:hidden"
            >
              <div className="mx-auto max-w-7xl border-l border-r border-b border-dashed border-neutral-800/80 bg-[#121214] shadow-lg shadow-black/20">
                <nav className="flex flex-col">
                  {NAV_LINKS.map(({ href, label }) => {
                    const isActive =
                      href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(href);

                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between px-8 py-4 border-b border-dashed border-neutral-800/80 text-sm font-medium tracking-wide text-[#ccc] hover:text-teal-400 hover:bg-neutral-900/40 transition-colors"
                      >
                        <span>{label}</span>
                        {isActive && (
                          <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400">
                            Current
                          </span>
                        )}
                      </Link>
                    );
                  })}

                  <div className="px-8 py-5">
                    <Link href="/#engagement" onClick={() => setMobileOpen(false)}>
                      <Button
                        variant="outline"
                        className={`${touchButtonClassName} w-full`}
                      >
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
