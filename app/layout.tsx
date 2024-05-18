import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PreloadResources } from './preload';
import { SandpackCSS } from './blog/[slug]/sandpack';
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from './components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.enolcasielles.com'),
  title: {
    default: 'Enol Casielles',
    template: '%s | Enol Casielles',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Enol Casielles',
    description: 'Developer, writer, and creator.',
    url: 'https://www.enolcasielles.com',
    siteName: 'Enol Casielles',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Enol Casielles',
    card: 'summary_large_image',
  },
  verification: {
    google: '', //TODO(enol): cambiar este valor cuando se integre google analytics
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <script src='/theme.js'></script>
        <SandpackCSS />
      </head>
      <body className="text-black bg-white dark:text-white dark:bg-[#111010] antialiased min-h-screen max-w-4xl flex flex-col md:flex-row mx-4 pt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <div className='flex-1 flex flex-col justify-end items-center mt-12'>
            <Footer />
          </div>
        </main>
        <GoogleAnalytics gaId='G-9HGPDV0ZJ7' />
        <Analytics />
        <SpeedInsights />
        <PreloadResources />
      </body>
    </html>
  );
}
