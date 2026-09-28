'use client';

import React, { useState } from 'react';
import { galleryCategories, galleryItems, GalleryCategory } from '@/data/gallery';
import { useModal } from '@/context/ModalContext';

export function GalleryCatalog() {
  const [activeCategory, setActiveCategory] = useState<'all' | GalleryCategory>('all');
  const { openLightbox } = useModal();

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="container">
      <div className="filter-row">
        <div className="pill-toggle" role="group" aria-label="Filter gallery by category">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={activeCategory === cat.id ? 'active' : ''}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid" style={{ paddingBottom: '80px' }}>
        {filteredItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="gallery-item fade-in"
            onClick={() =>
              openLightbox({
                src: item.fullImage,
                alt: item.alt,
                title: item.title,
              })
            }
            aria-label={`View larger image of ${item.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.alt} />
            <div className="gallery-caption">
              <span className="gallery-cat">{item.category}</span>
              <div className="gallery-title">{item.title}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
