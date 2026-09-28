'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Phone, Menu } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { MobileMenu } from '@/components/layout/MobileMenu';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link href="/" className="brand" aria-label={`${siteConfig.name} Home`}>
            <span className="brand-mark">
              <Building2 size={20} />
            </span>
            <span className="brand-text">
              <strong>{siteConfig.shortName}</strong>
              <span>RESIDENCES</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? 'active' : ''}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <ThemeToggle />

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark book-btn-desktop"
            >
              <Phone size={15} /> Book a Stay
            </a>

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
