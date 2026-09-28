'use client';

import React from 'react';
import { Plane, Building2, ShieldCheck, Wifi, ExternalLink, Play } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const AIRBNB_URL = "https://www.airbnb.com/rooms/1449839679066582676?search_mode=regular_search&adults=1&check_in=2026-10-01&check_out=2026-10-06&children=0&infants=0&pets=0&source_impression_id=p3_b866ffc8-ea18-4426-a78a-5be7e9548801_169efb1a-36e5-479e-bbec-3232f6497013_0_1449839679066582676_0&previous_page_section_name=1000&federated_search_id=b866ffc8-ea18-4426-a78a-5be7e9548801_169efb1a-36e5-479e-bbec-3232f6497013_0_1449839679066582676_0";

export function ExperienceSection() {
  return (
    <section className="experience-section" aria-label="Experience and Key Stats">
      <div className="experience-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1800"
          alt="Luxury Accommodation"
        />
        <div className="experience-overlay" />
      </div>

      <div className="container experience-container">
        {/* Left Side: Frosted Glass Stats Cards (Ingoga Style) */}
        <div className="experience-left">
          <div className="experience-badge">
            <Building2 size={15} /> <span>PREMIUM HOSPITALITY</span>
          </div>
          <h2 className="experience-title">
            Crafted For Unmatched Kigali Comfort
          </h2>
          <p className="experience-desc">
            Discover a serene haven in Kicukiro, strategically positioned 5 minutes from Kigali International Airport (KGL) with dedicated guest care.
          </p>

          <div className="experience-cards-grid">
            <div className="glass-stat-card">
              <div className="glass-stat-top">
                <span className="glass-number">04</span>
                <span className="glass-divider" />
                <span className="glass-tag">LUXURY</span>
              </div>
              <h3 className="glass-label">Serviced Residences</h3>
              <p className="glass-sub">Executive 2-bedroom suites and deluxe comfort single rooms.</p>
            </div>

            <div className="glass-stat-card">
              <div className="glass-stat-top">
                <span className="glass-number">5 MIN</span>
                <span className="glass-divider" />
                <Plane size={18} className="glass-icon" />
              </div>
              <h3 className="glass-label">To Kigali Airport</h3>
              <p className="glass-sub">Direct 24/7 private shuttle pickup straight to the gate.</p>
            </div>

            <div className="glass-stat-card">
              <div className="glass-stat-top">
                <span className="glass-number">24/7</span>
                <span className="glass-divider" />
                <ShieldCheck size={18} className="glass-icon" />
              </div>
              <h3 className="glass-label">Guest Support</h3>
              <p className="glass-sub">Round-the-clock concierge, gated guards, and power backup.</p>
            </div>

            <div className="glass-stat-card">
              <div className="glass-stat-top">
                <span className="glass-number">100%</span>
                <span className="glass-divider" />
                <Wifi size={18} className="glass-icon" />
              </div>
              <h3 className="glass-label">Fiber Wi-Fi Covered</h3>
              <p className="glass-sub">Ultra-fast high-speed connectivity for business & streaming.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Embedded Live YouTube Virtual Tour */}
        <div className="experience-right">
          <div className="video-card-wrap">
            <div className="video-header">
              <div className="video-header-left">
                <span className="video-live-dot" />
                <div>
                  <h4>Experience KARANGWA&apos;S</h4>
                  <p>Take a virtual tour of our luxury suites</p>
                </div>
              </div>
              <span className="video-quality-tag">1080p HD</span>
            </div>

            <div className="embedded-video-frame">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="KARANGWA'S Residences Virtual Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="video-footer">
              <div className="video-footer-info">
                <strong>Ready for your stay in Kigali?</strong>
                <span>Book direct on WhatsApp or view our verified Airbnb listing.</span>
              </div>
              <div className="video-footer-actions">
                <a
                  href={AIRBNB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-airbnb btn-sm"
                >
                  <ExternalLink size={14} /> Airbnb
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Book Stay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
