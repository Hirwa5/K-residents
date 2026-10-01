'use client';

import React from 'react';
import { Plane, ShieldCheck, Wifi, Sparkles } from 'lucide-react';

interface GlassStatCardsProps {
  compact?: boolean;
}

export function GlassStatCards({ compact = false }: GlassStatCardsProps) {
  const cards = [
    {
      number: '06',
      tag: 'LUXURY',
      label: 'Serviced Residences',
      desc: '6 boutique 1-bedroom apartments across 3 private tiers.',
      icon: <Sparkles size={compact ? 15 : 18} className="glass-icon" />,
    },
    {
      number: '15 MIN',
      tag: 'AIRPORT',
      label: 'To Kigali Airport',
      desc: 'Direct 24/7 private shuttle pickup straight to the gate.',
      icon: <Plane size={compact ? 15 : 18} className="glass-icon" />,
    },
    {
      number: '24/7',
      tag: 'SUPPORT',
      label: 'Dedicated Guest Care',
      desc: 'Round-the-clock host concierge, gated guards, and backup power.',
      icon: <ShieldCheck size={compact ? 15 : 18} className="glass-icon" />,
    },
    {
      number: '100%',
      tag: 'FIBER',
      label: 'Fiber Wi-Fi Covered',
      desc: 'Ultra-fast high-speed connectivity for business & streaming.',
      icon: <Wifi size={compact ? 15 : 18} className="glass-icon" />,
    },
  ];

  return (
    <div className={`experience-cards-grid ${compact ? 'compact' : ''}`}>
      {cards.map((c) => (
        <div key={c.label} className={`glass-stat-card ${compact ? 'compact' : ''}`}>
          <div className="glass-stat-top">
            <span className="glass-number">{c.number}</span>
            <span className="glass-divider" />
            <span className="glass-tag">{c.tag}</span>
            {c.icon}
          </div>
          <h3 className="glass-label">{c.label}</h3>
          <p className="glass-sub">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}
