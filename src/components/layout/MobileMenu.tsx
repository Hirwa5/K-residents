'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`mobile-menu ${isOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="mobile-menu-top">
        <strong className="font-display" style={{ fontSize: '1.15rem' }}>
          {siteConfig.shortName}
        </strong>
        <button
          type="button"
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <X size={20} />
        </button>
      </div>

      <nav>
        {siteConfig.navLinks.map((link) => {
          const isActive =
            link.href === '/' ? currentPath === '/' : currentPath.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={isActive ? 'active' : ''}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="btn btn-whatsapp btn-block"
        onClick={onClose}
      >
        <MessageSquare size={16} /> Book via WhatsApp
      </a>

      <p className="mobile-menu-tagline">{siteConfig.locationCity}</p>
    </div>
  );
}
