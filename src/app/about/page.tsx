import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { FaqAccordion } from '@/components/home/FaqAccordion';

export const metadata: Metadata = {
  title: "About Us | KARANGWA'S Residences Kigali",
  description: "Learn about KARANGWA'S Residences in Kicukiro, Kigali. 6 boutique 1-bedroom apartments designed across 3 tiers with private separate staircases.",
};

export function AboutPage() {
  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/residences/residence-facade.jpg"
          alt="About KARANGWA'S Residences"
        />
        <div className="page-banner-content">
          <h1>About KARANGWA&apos;S</h1>
          <p>
            An exclusive boutique property of 6 private 1-bedroom serviced apartments across 3 distinct tiers in Kicukiro, Kigali.
          </p>
        </div>
      </div>

      <div className="page-wrap">
        {/* Story 1: Modern Comfort Meets Rwandan Soul */}
        <section className="story-showcase-section" style={{ paddingTop: '20px' }}>
          <div className="container">
            <div className="story-row">
              <div className="story-content">
                <span className="eyebrow">OUR RESIDENCES</span>
                <h2 className="story-title">Modern Comfort Meets Rwandan Soul</h2>
                <div className="story-text">
                  <p>
                    Step into an intimate residential haven at <strong>KARANGWA&apos;S</strong>, located in the peaceful hills of Kicukiro, Kigali. Our building features a curated collection of <strong>6 fully furnished 1-bedroom apartments arranged across 3 distinct rows/tiers</strong>.
                  </p>
                  <p>
                    To ensure supreme acoustic privacy and calm, the building is architecturally built with <strong>separate private staircases between the units</strong>. This dual-staircase layout eliminates crowded shared hallways, giving you the quiet exclusivity and security of an independent private residence.
                  </p>
                  <p>
                    Each apartment is styled with refined Afro-chic accents, handcrafted Rwandan textures, high-speed fiber Wi-Fi, and a fully equipped kitchen, ideal for both focused work and deep relaxation.
                  </p>
                </div>
                <Link href="/residents" className="story-cta-link">
                  Explore All 6 Units <ArrowRight size={16} />
                </Link>
              </div>

              <div className="story-media-wrap">
                <div className="story-media-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/residences/living-room-lounge.jpg"
                    alt="Living lounge at KARANGWA'S"
                    className="story-img"
                  />
                  <span className="story-chip story-chip-top">Kicukiro, Kigali</span>
                </div>
              </div>
            </div>

            {/* Story 2: Afro-Inspired Elegance & Dedicated Privacy */}
            <div className="story-row story-row-reverse" style={{ marginTop: '70px' }}>
              <div className="story-media-wrap">
                <div className="story-media-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/residences/skyline-bedroom.jpg"
                    alt="Master suite at KARANGWA'S"
                    className="story-img"
                  />
                  <span className="story-chip story-chip-bottom">6 Units · Dual-Staircase Privacy</span>
                </div>
              </div>

              <div className="story-content">
                <span className="eyebrow">ARCHITECTURAL DESIGN</span>
                <h2 className="story-title">Afro-Inspired Elegance in the Heart of Kigali</h2>
                <div className="story-text">
                  <p>
                    Our signature 3-tier building architecture provides a private, welcoming environment for travelers who value peace, cleanliness, and security. With only two units per tier separated by independent staircases, residents experience seamless rest with zero corridor traffic.
                  </p>
                  <p>
                    Situated just <strong>15 minutes from Kigali International Airport (KGL)</strong> and within easy reach of the Kigali Convention Centre and downtown commercial hubs, KARANGWA&apos;S gives you the perfect launchpad to connect with Kigali&apos;s vibrant culture while enjoying personalized, hospitable care.
                  </p>
                </div>
                <Link href="/gallery" className="story-cta-link">
                  View Photo Gallery <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Help Centre (Identical to Home Page FAQ component) */}
        <section className="about-help-section" id="help-centre" style={{ paddingBottom: '0' }}>
          <FaqAccordion />

          {/* WhatsApp Direct Assistance Bar (Made small & compact as requested) */}
          <div className="container" style={{ marginTop: '25px', paddingBottom: '70px' }}>
            <div className="help-contact-banner">
              <div>
                <h3>Need Instant Assistance?</h3>
                <p>Our dedicated host is available on WhatsApp around the clock to assist with inquiries, custom stays, or airport rides.</p>
              </div>
              <div className="help-contact-actions">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={10} /> Chat on WhatsApp
                </a>
                <Link href="/contact" className="btn btn-outline-white">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
