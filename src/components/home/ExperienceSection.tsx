'use client';

import React from 'react';
import Link from 'next/link';
import { Plane, Building2, ShieldCheck, Wifi, ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { AirbnbIcon } from '@/components/common/AirbnbIcon';

const AIRBNB_URL = "https://www.airbnb.com/rooms/1449839679066582676?search_mode=regular_search&adults=1&check_in=2026-10-01&check_out=2026-10-06&children=0&infants=0&pets=0&source_impression_id=p3_b866ffc8-ea18-4426-a78a-5be7e9548801_169efb1a-36e5-479e-bbec-3232f6497013_0_1449839679066582676_0&previous_page_section_name=1000&federated_search_id=b866ffc8-ea18-4426-a78a-5be7e9548801_169efb1a-36e5-479e-bbec-3232f6497013_0_1449839679066582676_0";

export function ExperienceSection() {
  return (
    <section className="experience-section" aria-label="Experience and Key Stats">
      <div className="experience-grid">
        {/* Left Side: Hospitality with Photo 3 Background (Clean & Bright Ingoga Style) */}
        <div className="experience-hospitality-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/residences/studio-bedroom-suite.jpg"
            alt="KARANGWA'S Luxury Residence Suite"
            className="experience-hospitality-bg-img"
          />
          <div className="experience-hospitality-overlay" />

          <div className="experience-hospitality-content">
            <div className="experience-badge">
              <Building2 size={15} /> <span>PREMIUM HOSPITALITY</span>
            </div>

            <h2 className="experience-title">
              Crafted For Unmatched Kigali Comfort
            </h2>

            <p className="experience-desc">
              Discover a serene haven in Kicukiro, strategically positioned 15 minutes from Kigali International Airport (KGL) with dedicated guest care.
            </p>

            <div className="experience-cards-grid">
              <div className="glass-stat-card">
                <div className="glass-stat-top">
                  <span className="glass-number">06</span>
                  <span className="glass-divider" />
                  <span className="glass-tag">LUXURY</span>
                </div>
                <h3 className="glass-label">Serviced residents</h3>
                <p className="glass-sub">Executive 2-bedroom suites and deluxe comfort single rooms.</p>
              </div>

              <div className="glass-stat-card">
                <div className="glass-stat-top">
                  <span className="glass-number">15 mIN</span>
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

            <div className="experience-actions">
              <Link href="/residents" className="btn btn-primary">
                Explore Residents <ArrowRight size={16} />
              </Link>
              <Link href="/transport" className="btn btn-outline-white">
                Transport Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Embedded Live YouTube Virtual Tour (Fills Vertically Edge-to-Edge) */}
        <div className="experience-video-col">
          <div className="experience-video-top-bar">
            <div className="experience-video-top-pill">
              <span className="video-live-dot" />
              <span>Experience KARANGWA&apos;S Virtual Tour</span>
            </div>
            <span className="experience-video-quality">1080p HD</span>
          </div>

          <div className="experience-video-frame">
            <iframe
              src="https://www.youtube.com/embed/VQArEmUHpyM?start=12&rel=0&modestbranding=1"
              title="KARANGWA'S Residents Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="experience-video-bottom-bar">
            <div className="experience-video-bottom-info">
              <strong>Ready for your stay in Kigali?</strong>
              <span>Book direct on WhatsApp or view our verified Airbnb listing.</span>
            </div>
            <div className="experience-video-bottom-actions">
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-airbnb btn-sm"
              >
                <AirbnbIcon size={15} /> Airbnb
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
