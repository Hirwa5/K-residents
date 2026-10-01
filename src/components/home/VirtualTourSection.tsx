'use client';

import React from 'react';
import { Play, MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { AirbnbIcon } from '@/components/common/AirbnbIcon';

const AIRBNB_URL = "https://www.airbnb.com/rooms/1449839679066582676?search_mode=regular_search&adults=1&check_in=2026-10-01&check_out=2026-10-06&children=0&infants=0&pets=0&source_impression_id=p3_b866ffc8-ea18-4426-a78a-5be7e9548801_169efb1a-36e5-479e-bbec-3232f6497013_0_1449839679066582676_0&previous_page_section_name=1000&federated_search_id=b866ffc8-ea18-4426-a78a-5be7e9548801_169efb1a-36e5-479e-bbec-3232f6497013_0_1449839679066582676_0";

export function VirtualTourSection() {
  return (
    <section className="virtual-tour-section" aria-label="Virtual Video Tour">
      <div className="container">
        {/* Centered Section Head matching Ingoga Place clean style */}
        <div className="virtual-tour-head center">
          <div className="virtual-tour-badge">
            <span className="virtual-tour-badge-play">
              <Play size={13} fill="currentColor" />
            </span>
            <span className="virtual-tour-badge-text">Experience KARANGWA&apos;S</span>
          </div>

          <h2 className="virtual-tour-title">
            Take a Virtual Tour of Our Residences
          </h2>
          <p className="virtual-tour-desc">
            Explore our curated 1-bedroom serviced apartments and see what makes our executive living spaces in Kigali exceptional.
          </p>
        </div>

        {/* Video Card Container */}
        <div className="virtual-tour-card-wrap">
          <div className="virtual-tour-card">
            {/* Top Bar inside Video Card */}
            <div className="virtual-tour-top-bar">
              <div className="virtual-tour-creator">
                <div className="virtual-tour-avatar">K</div>
                <div>
                  <div className="virtual-tour-channel">KARANGWA&apos;S Tour</div>
                  <div className="virtual-tour-subtext">Kicukiro, Kigali</div>
                </div>
              </div>
              <span className="virtual-tour-quality-badge">1080p HD</span>
            </div>

            {/* Video Player Frame */}
            <div className="virtual-tour-frame">
              <iframe
                src="https://www.youtube.com/embed/VQArEmUHpyM?start=12&rel=0&modestbranding=1"
                title="KARANGWA'S Residences Video Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Audio hint pill */}
          <div className="virtual-tour-audio-pill">
            <span className="video-live-dot" />
            <span>Auto-playing · Click volume to hear audio</span>
          </div>
        </div>

        {/* Bottom Callout Bar: dedicated width container so WhatsApp button is 100% inside */}
        <div className="virtual-tour-callout-wrap">
          <div className="virtual-tour-callout-pill">
            <span className="virtual-tour-callout-text">Ready to experience this in person?</span>
            <div className="virtual-tour-callout-actions">
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-airbnb btn-sm"
              >
                <AirbnbIcon size={14} /> Airbnb
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={14} /> Book Your Visit <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
