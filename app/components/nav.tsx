"use client";

import { Link } from '../../i18n/navigation';
import ThemeModeSelector from './theme-mode-selector';
import LanguageSelector from './language-selector';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Navbar() {
  const t = useTranslations('Navbar');

  const navItems = [
    { path: '/blog', key: 'blog' },
    { path: '/projects', key: 'projects' },
  ];

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link href="/">
            <div className='flex items-center gap-4'>
              <Image width={40} height={40} src="/ec-logo.svg" alt="ec-logo" className='rounded-full'/>
              <span className='hidden md:block font-bold text-2xl'>Enol Casielles</span>
            </div>
          </Link>
          <div className='flex flex-row items-center gap-4'>
            <div className="flex flex-row space-x-0">
              {navItems.map(({ path, key }) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-blue-400 flex align-middle relative py-1 px-2"
                  >
                    {t(key)}
                  </Link>
                );
              })}
            </div>
            <LanguageSelector />
            <ThemeModeSelector />
          </div>
        </nav>
      </div>
    </aside>
  );
}
