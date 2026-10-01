import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function HomeCalloutBanner() {
  return (
    <section className="home-callout-section">
      <div className="container">
        <div className="home-callout-pill">
          <p className="home-callout-text">Looking for a peaceful, private stay in Kigali?</p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="home-callout-btn btn-whatsapp"
          >
            <MessageSquare size={17} />
            <span>Reserve on WhatsApp</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
