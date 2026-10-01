'use client';

import React from 'react';
import { Building2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/favicon.jpg" alt={siteConfig.shortName} className="footer-favicon" />
          <span>{siteConfig.shortName} residents · {siteConfig.locationCity}</span>
        </div>
        <p>© {currentYear} {siteConfig.shortName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
