import '../global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from '../components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PreloadResources } from '../preload';
import { SandpackCSS } from '../blog/[slug]/sandpack';
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from '../components/footer';
import { ViewTransitions } from 'next-view-transitions';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from 'i18n/routing';
import { setRequestLocale, getMessages } from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.enolcasielles.com'),
  title: {
    default: 'Enol Casielles',
    template: '%s | Enol Casielles',
  },
  description: 'Desarrollador de software. Especializado en desarrollo web, arquitectura de software e inteligencia artificial. Fundador de mooviment.com.',
  openGraph: {
    title: 'Enol Casielles',
    description: 'Desarrollador de software con más de 10 años de experiencia en startups. Especializado en desarrollo web, arquitectura de software e inteligencia artificial. Fundador de mooviment.com.',
    url: 'https://www.enolcasielles.com',
    siteName: 'Enol Casielles',
    locale: 'es_ES',
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
    description: 'Desarrollador de software con más de 10 años de experiencia en startups. Especializado en desarrollo web, arquitectura de software e inteligencia artificial.',
  },
  verification: {
    google: '', //TODO(enol): cambiar este valor cuando se integre google analytics
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <ViewTransitions>
      <html
        lang={locale}
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
          <NextIntlClientProvider messages={messages} locale={locale}>
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Navbar />
              {children}
              <div className='flex-1 flex flex-col justify-end items-center mt-12'>
                <Footer />
              </div>
            </main>
          </NextIntlClientProvider>
          <GoogleAnalytics gaId='G-9HGPDV0ZJ7' />
          <Analytics />
          <SpeedInsights />
          <PreloadResources />
        </body>
      </html>
    </ViewTransitions>
  );
}
