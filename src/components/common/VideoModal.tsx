'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export function VideoModal() {
  const { isVideoModalOpen, closeVideoModal } = useModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoModalOpen) {
        closeVideoModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoModalOpen, closeVideoModal]);

  if (!isVideoModalOpen) return null;

  return (
    <div
      className="video-modal open"
      role="dialog"
      aria-modal="true"
      aria-label="Virtual Tour Video"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeVideoModal();
      }}
    >
      <div className="video-modal-inner">
        <div className="video-modal-head">
          <span>KARANGWA&apos;S Virtual Tour</span>
          <button
            type="button"
            onClick={closeVideoModal}
            aria-label="Close video tour"
          >
            <X size={18} />
          </button>
        </div>
        <div className="video-frame-wrap">
          <iframe
            src="https://www.youtube.com/embed/VQArEmUHpyM?start=12&autoplay=1&rel=0&modestbranding=1"
            title="KARANGWA'S Virtual Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
