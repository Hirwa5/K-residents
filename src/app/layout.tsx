import type { Metadata, Viewport } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';
import { ThemeProvider } from '@/context/ThemeContext';
import { ModalProvider } from '@/context/ModalContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatWidget } from '@/components/common/ChatWidget';
import { VideoModal } from '@/components/common/VideoModal';
import { Lightbox } from '@/components/common/Lightbox';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://karangwasresidents.com'),
  title: {
    default: `${siteConfig.name} | Kicukiro, Kigali`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Kigali serviced apartments",
    "Kicukiro Kigali accommodation",
    "Kigali airport hotel",
    "Rwanda furnished rentals",
    "KARANGWA'S residents",
    "Kigali executive suites",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: '/assets/favicon.jpg',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
  },
};

export const viewport: Viewport = {
  themeColor: '#171f1a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/jpeg" href="/assets/favicon.jpg" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <ModalProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <VideoModal />
            <Lightbox />
            <ChatWidget />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
