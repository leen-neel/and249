"use client";

import * as React from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { GridSection } from "./GridSystem";
import { Button } from "./ui/button";
import { submitIntake } from "@/app/actions/intake";
import { Reveal } from "./motion/reveal";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(
    null
  );
  const turnstileRef = React.useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!turnstileToken) {
      setError("Please complete verification.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set("cf-turnstile-response", turnstileToken);
    const result = await submitIntake(formData);

    if (result.success) {
      setIsSubmitted(true);
    } else {
      setError(result.message || "An error occurred.");
      setIsSubmitting(false);
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    }
  };

  return (
    <GridSection className="flex flex-col lg:flex-row w-full" id="engagement">
      <Reveal className="w-full lg:w-[60%]">
        <div className="flex flex-col gap-6 px-8 lg:px-12 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-dashed border-neutral-800/80 justify-center h-full">
          <h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight leading-tight max-w-lg">
            Building the next generation of high-performance software.
          </h2>
          <p className="text-base text-neutral-400 max-w-md leading-relaxed">
            Currently taking on select engineering engagements and strategic
            consulting for early-stage founders and product teams. Let&apos;s
            discuss your architecture.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="w-full lg:w-[40%]">
        <div className="flex flex-col px-8 lg:px-12 py-16 lg:py-24 justify-center h-full">
          <div className="flex flex-col gap-6 w-full max-w-sm mx-auto lg:mx-0 min-h-[300px] justify-center">
            {isSubmitted ? (
              <div className="flex flex-col space-y-4 animate-in fade-in duration-500">
                <h3 className="font-sans text-xl font-medium text-white tracking-tight">
                  Thanks for reaching out.
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  I&apos;ve received your details and will follow up with a
                  direct calendar link to schedule a call within the next 12
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 w-full"
              >
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isSubmitting}
                    placeholder="Name"
                    className="relative z-10 w-full bg-transparent border-b border-neutral-800/80 pb-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors duration-75 ease-out rounded-none disabled:opacity-50"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    placeholder="Email"
                    className="relative z-10 w-full bg-transparent border-b border-neutral-800/80 pb-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors duration-75 ease-out rounded-none disabled:opacity-50"
                  />
                  <textarea
                    name="projectDetails"
                    required
                    disabled={isSubmitting}
                    placeholder="Project Details"
                    rows={3}
                    className="relative z-10 w-full bg-transparent border-b border-neutral-800/80 pb-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors duration-75 ease-out resize-none rounded-none mt-2 disabled:opacity-50"
                  />
                </div>
                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={setTurnstileToken}
                  onExpire={() => setTurnstileToken(null)}
                  options={{ theme: "dark", size: "flexible" }}
                />
                {error && (
                  <div className="text-red-400 text-xs font-mono">{error}</div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken}
                  className="group relative z-10 w-full bg-white text-black hover:bg-teal-950/20 hover:text-teal-400 hover:border-teal-900/80 border border-transparent transition-all duration-75 ease-out rounded-sm font-medium h-12 mt-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Submitting details..."
                  ) : (
                    <>
                      Book Discovery Call{" "}
                      <span className="inline-block transition-transform duration-75 ease-out group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </GridSection>
  );
}
