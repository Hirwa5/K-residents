'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unit: '',
    viewingTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format professional WhatsApp message for the host
    const lines = [
      `*🅺 Schedule a Viewing Request KARANGWA'S*`,
      `----------------------------------------`,
      `*Full Name:* ${formData.name}`,
      `*Email Address:* ${formData.email}`,
      `*Phone Number:* ${formData.phone || 'Not provided'}`,
      `*Unit Interest:* ${formData.unit || 'General inquiry'}`,
      `*Preferred Viewing Time:* ${formData.viewingTime || 'Flexible'}`,
      `----------------------------------------`,
      `*Message:*`,
      `${formData.message || 'No additional notes'}`,
    ];

    const messageText = lines.join('\n');
    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp in a new tab for the host
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Display green success confirmation in the browser for the user
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        unit: '',
        viewingTime: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 9000);
    }, 400);
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
            Get in touch with us for instant reservations, schedule a viewing, or general inquiries.
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
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.45rem', fontWeight: 800, marginBottom: '20px', color: 'var(--ink)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/favicon.jpg"
                alt={siteConfig.name}
                style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--line)' }}
              />
              <span>Schedule a Viewing</span>
            </h2>

            {submitted ? (
              <div
                style={{
                  padding: '40px 20px',
                  textAlign: 'center',
                  background: 'var(--paper-dim)',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                }}
              >
                <CheckCircle2 size={46} style={{ color: 'var(--moss)', margin: '0 auto 12px' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--ink)' }}>
                  Thank you! Your message has been sent
                </h3>
                <p style={{ color: 'var(--stone)', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto' }}>
                  Thank you for reaching out. We have received your viewing request and our host will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div>
                    <label className="field-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="field"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="field-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div>
                    <label className="field-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+250789119348"
                      className="field"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="field-label">Unit Interest</label>
                    <select
                      className="field"
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    >
                      <option value="">Select a unit</option>
                      <option value="Unit 1">
                        Unit 1
                      </option>
                      <option value="Unit 2">
                        Unit 2
                      </option>
                      <option value="Unit 3">
                        Unit 3
                      </option>
                      <option value="Unit 4">
                        Unit 4
                      </option>
                      <option value="Unit 5">
                        Unit 5
                      </option>
                      <option value="Unit 6">
                        Unit 6
                      </option>
                      <option value="General Viewing / Multiple Units">
                        General Viewing / Multiple Units
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">Preferred Viewing Time</label>
                  <input
                    type="text"
                    placeholder="e.g., Weekday mornings, Saturday afternoon"
                    className="field"
                    value={formData.viewingTime}
                    onChange={(e) => setFormData({ ...formData, viewingTime: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Message (Optional)</label>
                  <textarea
                    placeholder="Tell us about your housing needs, questions, or any special requirements..."
                    className="field"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-dark btn-block">
                  {isSubmitting ? 'Sending Request…' : 'Schedule a Viewing'}
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/favicon.jpg" alt="" className="map-card-favicon" />
                <span>{siteConfig.shortName} residents</span>
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
