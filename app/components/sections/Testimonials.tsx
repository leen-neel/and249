"use client";

import React from "react";
import Image from "next/image";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Saurav Kumar",
    role: "Co-founder",
    company: "Fleetline",
    content:
      "Anindo was great to work with. He was reliable, communicative, and quick to pick things up. He delivered quality work quickly and helped us scale up our early expiriments at Fleetline.",
    avatar: "/testimonials/saurav.png",
  },
];

const TestimonialCard: React.FC<{ testimonial: TestimonialData }> = ({
  testimonial,
}) => {
  return (
    <div className="shrink-0 w-80 mx-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 whitespace-normal">
      {/* Content */}
      <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 whitespace-normal ">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
        />
        <div className="ml-4">
          <h4 className="text-white font-semibold text-sm">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-xs">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what people who
            have worked with me have to say.
          </p>
        </div>

        {/* Scroll-based velocity testimonials */}
        <div className="mb-12 py-8">
          <ScrollVelocityContainer>
            <ScrollVelocityRow baseVelocity={5} direction={1}>
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
