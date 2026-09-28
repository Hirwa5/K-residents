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
          <Building2 size={18} /> {siteConfig.shortName} Residences · {siteConfig.locationCity}
        </div>
        <p>© {currentYear} {siteConfig.shortName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
