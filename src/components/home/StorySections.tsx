import React from 'react';
import Link from 'next/link';

export function StorySections() {
  return (
    <section className="story-showcase-section" aria-label="About KARANGWA'S Residences">
      <div className="container">
        {/* Story 1: Text Left, Image Right */}
        <div className="story-row">
          <div className="story-content">
            <h2 className="story-title">Modern Comfort Meets Rwandan Soul</h2>
            <div className="story-text">
              <p>
                Step into a refined residential haven at <strong>KARANGWA&apos;S</strong>, tucked in the peaceful Kicukiro hills of Kigali. Featuring an exclusive boutique collection of <strong>6 serviced residences arranged across 3 distinct tiers</strong>, our building is thoughtfully designed with <strong>independent private staircases between units</strong> to deliver unmatched personal privacy, acoustic calm, and effortless access.
              </p>
              <p>
                Each apartment harmoniously balances warm Afro-chic character with sleek contemporary aesthetics. Enjoy high-speed fiber internet, fully equipped gourmet kitchens, and welcoming sunlit lounges, meticulously crafted for both focused work and peaceful relaxation just minutes from Kigali International Airport.
              </p>
            </div>
            <Link href="/residents" className="story-cta-link">
              Explore Our Units <span className="story-link-line">&rarr;</span>
            </Link>
          </div>

          <div className="story-media-wrap">
            <div className="story-media-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/residences/living-room-lounge.jpg"
                alt="Modern living room lounge at KARANGWA'S Residences"
                className="story-img"
              />
              <span className="story-chip story-chip-top">Kicukiro, Kigali</span>
            </div>
          </div>
        </div>

        {/* Story 2: Image Left, Text Right */}
        <div className="story-row story-row-reverse">
          <div className="story-media-wrap">
            <div className="story-media-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/residences/residence-facade.jpg"
                alt="Architectural exterior with separate stairs at KARANGWA'S Residences"
                className="story-img"
              />
              <span className="story-chip story-chip-bottom">6 Units · Dual-Staircase Privacy</span>
            </div>
          </div>

          <div className="story-content">
            <h2 className="story-title">Afro-Inspired Elegance in the Heart of Kigali</h2>
            <div className="story-text">
              <p>
                Discover the ideal harmony of authentic Rwandan warmth and executive comfort. Our signature <strong>3-tier layout</strong> features dedicated separate staircases separating each pair of units, completely eliminating busy shared hallways and giving every residence the quiet, secure intimacy of a private home.
              </p>
              <p>
                Whether you are in Kigali for international conferences at the Convention Centre, diplomatic assignments, or a restorative vacation, our residences provide 24/7 security, automatic power backup, daily housekeeping, and direct airport shuttle connections so you feel truly at ease.
              </p>
            </div>
            <Link href="/gallery" className="story-cta-link">
              View Gallery <span className="story-link-line">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
