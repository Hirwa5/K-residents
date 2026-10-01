'use client';

import React from 'react';
import { Navigation, Car, MapPin, Check, MessageSquare } from 'lucide-react';
import { destinations, transportServices } from '@/data/transport';
import { siteConfig } from '@/data/siteConfig';

export function TransportCatalog() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'car':
        return <Car size={24} />;
      case 'pin':
        return <MapPin size={24} />;
      default:
        return <Navigation size={24} />;
    }
  };

  const getWhatsAppServiceLink = (message: string) => {
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="container">
      <div style={{ paddingTop: '50px' }}>
        <div className="location-grid">
          {destinations.map((dest) => (
            <div key={dest.id} className="location-card">
              <div className="location-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dest.image} alt={dest.title} />
                <span className="location-time">{dest.driveTime}</span>
              </div>
              <div className="location-body">
                <div className="location-title-row">
                  <Navigation size={18} />
                  <h3>{dest.title}</h3>
                </div>
                <p className="location-desc">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-grid" style={{ paddingBottom: '80px' }}>
          {transportServices.map((service) => (
            <div key={service.id} className="service-card">
              <div>
                <div className="service-icon">{getServiceIcon(service.icon)}</div>
                <h2>{service.title}</h2>
                <p className="service-desc">{service.description}</p>

                <ul className="service-checks">
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Check size={16} /> <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsAppServiceLink(service.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} /> {service.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
