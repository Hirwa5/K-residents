'use client';

import React, { useState } from 'react';
import { Building2, Users, User, Check, MessageSquare } from 'lucide-react';
import { residents, ResidentUnit } from '@/data/residents';
import { siteConfig } from '@/data/siteConfig';

type FilterType = 'all' | 'row-1' | 'row-2' | 'row-3';

export function ResidentsCatalog() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredUnits = residents.filter((unit) => {
    if (filter === 'all') return true;
    if (filter === 'row-1') return unit.tier.includes('Row 1') || unit.id === 'unit-1' || unit.id === 'unit-2';
    if (filter === 'row-2') return unit.tier.includes('Row 2') || unit.id === 'unit-3' || unit.id === 'unit-4';
    if (filter === 'row-3') return unit.tier.includes('Row 3') || unit.id === 'unit-5' || unit.id === 'unit-6';
    return true;
  });

  const getWhatsAppBookLink = (unit: ResidentUnit) => {
    const text = `Hello, I would like to book ${unit.title} (${unit.typeTag}) at ${siteConfig.shortName}.`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="container">
      <div className="filter-row">
        <div className="pill-toggle" role="group" aria-label="Filter residents by floor">
          <button
            type="button"
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            <Building2 size={15} /> All 6 Units
          </button>
          <button
            type="button"
            className={filter === 'row-1' ? 'active' : ''}
            onClick={() => setFilter('row-1')}
          >
            Ground Floor (Row 1)
          </button>
          <button
            type="button"
            className={filter === 'row-2' ? 'active' : ''}
            onClick={() => setFilter('row-2')}
          >
            First Floor (Row 2)
          </button>
          <button
            type="button"
            className={filter === 'row-3' ? 'active' : ''}
            onClick={() => setFilter('row-3')}
          >
            Top Floor (Row 3)
          </button>
        </div>
      </div>

      <div className="units-grid" style={{ paddingBottom: '80px' }}>
        {filteredUnits.map((unit) => (
          <article key={unit.id} className="unit-card fade-in">
            <div className="unit-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={unit.image} alt={unit.title} />
              <span className="unit-type-tag">{unit.typeTag}</span>
              <span className="unit-price-tag">{unit.priceDisplay}</span>
            </div>

            <div className="unit-body">
              <div className="unit-head">
                <div className="unit-tier-badge">{unit.tier}</div>
                <h3>{unit.title}</h3>
                <div className="unit-meta">
                  {unit.sizeSqm} sqm · 1 Bedroom · Max {unit.capacity} Guests
                </div>
              </div>

              <p className="unit-desc">{unit.description}</p>

              <div>
                <div className="unit-features-title">Highlights</div>
                <div className="unit-features">
                  {unit.amenities.slice(0, 4).map((amenity) => (
                    <div key={amenity} className="unit-feature">
                      <Check size={13} /> <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppBookLink(unit)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-block btn-sm"
              >
                <MessageSquare size={15} /> Book via WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export { ResidentsCatalog as residentsCatalog, ResidentsCatalog as ResidencesCatalog };
