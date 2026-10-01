import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface TeaserItem {
  href: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
}

const teasers: TeaserItem[] = [
  {
    href: '/residents',
    tag: 'From 35,000 RWF',
    title: 'Luxury residents',
    desc: '6 serviced 1-bedroom apartments',
    image: '/images/residences/residence-facade.jpg',
  },
  {
    href: '/gallery',
    tag: 'Photo Gallery',
    title: 'Visual Showcase',
    desc: 'Take a virtual tour of bedrooms & lounges',
    image: '/images/residences/living-room-lounge.jpg',
  },
  {
    href: '/transport',
    tag: 'Airport Shuttle',
    title: 'Airport & City Rides',
    desc: '15 mins to Kigali Airport (KGL)',
    image: '/images/destinations/kigali-airport.jpg',
  },
];

export function TeaserCards() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Explore Places</span>
          <h2 className="section-title">Discover What We Offer</h2>
          <p className="section-desc">
            Everything you need for an unforgettable short or long-term stay in Kigali.
          </p>
        </div>

        <div className="teasers-grid">
          {teasers.map((teaser) => (
            <Link key={teaser.href} href={teaser.href} className="teaser-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={teaser.image} alt={teaser.title} />
              <div className="teaser-scrim">
                <span className="teaser-tag">{teaser.tag}</span>
                <div className="teaser-row">
                  <div>
                    <div className="teaser-title">{teaser.title}</div>
                    <div className="teaser-desc">{teaser.desc}</div>
                  </div>
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
