'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export function Lightbox() {
  const { lightboxItem, closeLightbox } = useModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxItem) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, closeLightbox]);

  if (!lightboxItem) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLightbox();
      }}
    >
      <div className="lightbox-inner">
        <button
          type="button"
          className="lightbox-close"
          onClick={closeLightbox}
          aria-label="Close image preview"
        >
          <X size={20} />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={lightboxItem.src} alt={lightboxItem.alt} />
        {lightboxItem.title && (
          <p
            style={{
              color: '#fff',
              marginTop: '16px',
              fontWeight: 600,
              fontSize: '1.05rem',
            }}
          >
            {lightboxItem.title}
          </p>
        )}
      </div>
    </div>
  );
}
