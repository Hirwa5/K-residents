import React from 'react';
import { Wifi, ShieldCheck, Coffee, Tv, Clock, Car } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function AmenitiesGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wifi':
        return <Wifi size={24} />;
      case 'shield':
        return <ShieldCheck size={24} />;
      case 'coffee':
        return <Coffee size={24} />;
      case 'tv':
        return <Tv size={24} />;
      case 'clock':
        return <Clock size={24} />;
      case 'car':
        return <Car size={24} />;
      default:
        return <Wifi size={24} />;
    }
  };

  return (
    <section className="amenities-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">Included Amenities</h2>
          <p className="section-desc">
            Thoughtfully curated hospitality features to make your stay effortless and comfortable.
          </p>
        </div>

        <div className="amenities-grid">
          {siteConfig.amenities.map((item) => (
            <div key={item.label} className="amenity-cell">
              {getIcon(item.icon)}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
