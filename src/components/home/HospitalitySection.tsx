'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';
import { GlassStatCards } from '@/components/common/GlassStatCards';

export function HospitalitySection() {
  return (
    <section className="hospitality-highlight-section" aria-label="Hospitality & Key Highlights">
      {/* Background with Photo 3 - Clean & Bright */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/residences/studio-bedroom-suite.jpg"
        alt="KARANGWA'S Luxury Residence Suite"
        className="hospitality-highlight-bg"
      />
      <div className="hospitality-highlight-overlay" />

      <div className="container hospitality-highlight-content">
        <div className="section-head center">
          <div className="experience-badge">
            <Building2 size={15} /> <span>PREMIUM HOSPITALITY</span>
          </div>

          <h2 className="experience-title">
            Crafted For Unmatched Kigali Comfort
          </h2>

          <p className="experience-desc" style={{ maxWidth: '620px', marginLeft: 'auto', marginRight: 'auto' }}>
            Discover a serene haven in Kicukiro, strategically positioned 15 minutes from Kigali International Airport (KGL) with dedicated guest care.
          </p>
        </div>

        {/* 4 Curved Glass Transparent Stat Cards */}
        <div style={{ maxWidth: '960px', margin: '0 auto 36px' }}>
          <GlassStatCards />
        </div>

        <div className="experience-actions" style={{ justifyContent: 'center' }}>
          <Link href="/residents" className="btn btn-primary">
            Explore Residents <ArrowRight size={16} />
          </Link>
          <Link href="/transport" className="btn btn-outline-white">
            Transport Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
