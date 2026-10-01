# KARANGWA'S Residences — Image Guide

This folder contains all the photos used throughout the website.

## Folder Structure

```
public/images/
├── residences/
│   ├── residence-facade.jpg       # Main building facade / exterior (Hero & Residents banner)
│   ├── building-exterior.jpg      # Building complex angle & grounds (Experience section)
│   ├── skyline-bedroom.jpg        # Master bedroom suite with city view
│   ├── living-room-lounge.jpg     # Designer living room & lounge with TV
│   ├── studio-bedroom-suite.jpg   # Studio / bedroom suite with sofa & bed
│   └── balcony-terrace-view.jpg   # Scenic private balcony / terrace view
│
└── destinations/
    ├── kigali-airport.jpg         # Kigali International Airport (KGL)
    ├── kigali-convention-center.jpg # Kigali Convention Centre dome at night
    └── kigali-downtown.jpg        # Downtown Kigali skyline
```

## How to Update Photos After a Shoot
When you take new professional photos of the apartment:
1. Export your photos as **`.jpg`** or **`.webp`** format.
2. To replace a photo across the entire site instantly without editing code, simply overwrite the file with the same name (e.g. replace `living-room-lounge.jpg` with your new living room photo).
3. If you add new photo files with different names, you can register them in:
   - `src/data/residences.ts` (for apartment/room listings)
   - `src/data/gallery.ts` (for the photo gallery page)
   - `src/data/transport.ts` (for destinations)
