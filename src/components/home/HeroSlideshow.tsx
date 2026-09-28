'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

interface Slide {
  id: number;
  title: string;
  image: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Welcome to KARANGWA'S",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600",
    subtitle: "Located in Kicukiro, Kigali, just 5 minutes from Kigali International Airport. Experience curated Afro-chic luxury with fully serviced 2-bedroom apartments and single rooms.",
  },
  {
    id: 2,
    title: "Master Executive Suites",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1600",
    subtitle: "Crafted for privacy, comfort, and productivity. Featuring expansive private balconies, premium king beds, dedicated work desks, and fast fiber Wi-Fi.",
  },
  {
    id: 3,
    title: "5 Mins from Kigali Airport",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1600",
    subtitle: "Seamless private airport pickups and city transfers tailored to your flight schedule, ensuring an effortless arrival into Rwanda's capital.",
  },
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const { openVideoModal } = useModal();

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero" aria-label="Featured Showcase">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? 'active' : ''}`}
          aria-hidden={index !== current}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.image} alt={slide.title} />
        </div>
      ))}
      <div className="hero-scrim" />

      <button
        type="button"
        className="hero-arrow prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        className="hero-arrow next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      <div className="hero-content">
        <div className="container">
          <div className="hero-body">
            <span className="hero-eyebrow">Kicukiro · Kigali · Rwanda</span>
            <h1 className="hero-title">{slides[current].title}</h1>
            <p className="hero-subtitle">{slides[current].subtitle}</p>

            <div className="hero-actions">
              <Link href="/residences" className="btn btn-primary">
                View Our Residences <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                className="btn btn-ghost-light"
                onClick={openVideoModal}
              >
                <Play size={16} fill="currentColor" /> Watch Virtual Tour
              </button>
            </div>

            <div className="hero-dots" role="tablist" aria-label="Slide controls">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === current}
                  aria-label={`Slide ${idx + 1}: ${slide.title}`}
                  className={idx === current ? 'active' : ''}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
