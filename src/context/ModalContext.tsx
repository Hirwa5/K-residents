'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface LightboxItem {
  src: string;
  alt: string;
  title?: string;
}

interface ModalContextType {
  isVideoModalOpen: boolean;
  openVideoModal: () => void;
  closeVideoModal: () => void;
  lightboxItem: LightboxItem | null;
  openLightbox: (item: LightboxItem) => void;
  closeLightbox: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  const openVideoModal = useCallback(() => setIsVideoModalOpen(true), []);
  const closeVideoModal = useCallback(() => setIsVideoModalOpen(false), []);

  const openLightbox = useCallback((item: LightboxItem) => setLightboxItem(item), []);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  return (
    <ModalContext.Provider
      value={{
        isVideoModalOpen,
        openVideoModal,
        closeVideoModal,
        lightboxItem,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
