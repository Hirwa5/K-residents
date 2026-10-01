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
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`mobile-menu-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-menu-top">
          <strong className="font-display mobile-menu-title">
            {siteConfig.shortName}
          </strong>
          <button
            type="button"
            className="mobile-menu-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={18} />
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
          className="btn btn-whatsapp mobile-menu-btn"
          onClick={onClose}
        >
          <MessageSquare size={16} /> Book via WhatsApp
        </a>

        <p className="mobile-menu-tagline">{siteConfig.locationCity}</p>
      </div>
    </>
  );
}
