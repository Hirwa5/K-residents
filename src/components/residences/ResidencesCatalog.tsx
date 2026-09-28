'use client';

import React, { useState } from 'react';
import { Building2, Users, User, Check, MessageSquare } from 'lucide-react';
import { residences, ResidenceUnit } from '@/data/residences';
import { siteConfig } from '@/data/siteConfig';

type FilterType = 'all' | 'apartment' | 'room';

export function ResidencesCatalog() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredUnits = residences.filter((unit) => {
    if (filter === 'all') return true;
    return unit.category === filter;
  });

  const getWhatsAppBookLink = (unit: ResidenceUnit) => {
    const text = `Hello, I would like to book the ${unit.title} at ${siteConfig.shortName}.`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="container">
      <div className="filter-row">
        <div className="pill-toggle" role="group" aria-label="Filter residences by unit type">
          <button
            type="button"
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            <Building2 size={16} /> All Units ({residences.length})
          </button>
          <button
            type="button"
            className={filter === 'apartment' ? 'active' : ''}
            onClick={() => setFilter('apartment')}
          >
            <Users size={16} /> Full Apartment
          </button>
          <button
            type="button"
            className={filter === 'room' ? 'active' : ''}
            onClick={() => setFilter('room')}
          >
            <User size={16} /> Single Room
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
                <h3>{unit.title}</h3>
                <div className="unit-meta">
                  {unit.sizeSqm} sqm · Capacity {unit.capacity} Guest{unit.capacity > 1 ? 's' : ''}
                </div>
              </div>

              <p className="unit-desc">{unit.description}</p>

              <div>
                <div className="unit-features-title">Amenities included</div>
                <div className="unit-features">
                  {unit.amenities.map((amenity) => (
                    <div key={amenity} className="unit-feature">
                      <Check size={14} /> <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppBookLink(unit)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark btn-block"
              >
                <MessageSquare size={16} /> Book via WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
