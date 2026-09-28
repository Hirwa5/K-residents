import React from 'react';
import { siteConfig } from '@/data/siteConfig';

export function StatsStrip() {
  return (
    <section className="stats-strip" style={{ padding: 0 }} aria-label="Key Highlights">
      <div className="stats-grid">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="stat-cell">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
