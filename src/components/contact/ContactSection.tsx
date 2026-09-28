'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&z=16&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`;
  const externalMapUrl = `https://maps.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&z=17&hl=en`;

  return (
    <div className="page-wrap">
      <div className="container">
        <div className="section-head center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 className="section-title">Contact & Location</h1>
          <p className="section-desc">
            Get in touch with us for instant reservations, concierge assistance, or general inquiries.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h2>Contact Info</h2>
            <div className="contact-row">
              <MapPin size={22} />
              <div>
                <p>Location Address</p>
                <p>{siteConfig.address}</p>
              </div>
            </div>
            <div className="contact-row">
              <Phone size={22} />
              <div>
                <p>Phone / WhatsApp</p>
                <p>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
                </p>
              </div>
            </div>
            <div className="contact-row">
              <Mail size={22} />
              <div>
                <p>Email Address</p>
                <p>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-card">
            {submitted ? (
              <div
                style={{
                  padding: '36px 20px',
                  textAlign: 'center',
                  background: 'var(--paper-dim)',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                }}
              >
                <CheckCircle2 size={44} style={{ color: 'var(--moss)', margin: '0 auto 12px' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Inquiry Sent Successfully!</h3>
                <p style={{ color: 'var(--stone)', fontSize: '0.9rem' }}>
                  Thank you for reaching out. A host from {siteConfig.shortName} will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div>
                    <label className="field-label">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="field"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="field-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Booking Inquiry / Special Request"
                    className="field"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Your Message</label>
                  <textarea
                    required
                    placeholder="Tell us about your trip dates, group size, or questions…"
                    className="field"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-dark btn-block">
                  {isSubmitting ? 'Sending…' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Map */}
        <div style={{ margin: '40px 0 80px' }}>
          <div className="map-wrap">
            <iframe
              className="map-frame"
              src={mapEmbedUrl}
              title={`${siteConfig.name} location`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="map-card">
              <div className="map-card-head">
                <MapPin size={16} /> {siteConfig.shortName} Residences
              </div>
              <p>{siteConfig.address}</p>
              <div className="map-card-actions">
                <a
                  href={externalMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink size={15} />
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions"
                >
                  <Navigation size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="getting-here-bar">
            <div>
              <h3>Getting Here</h3>
              <p>Easily accessible by private car, taxi, or airport transfer in Kicukiro.</p>
            </div>
            <div className="getting-here-actions">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                <MapPin size={15} /> Get Directions
              </a>
              <a
                href={externalMapUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
