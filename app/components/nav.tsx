import Link from 'next/link';
import ThemeModeSelector from './theme-mode-selector';
import Image from 'next/image';

const navItems = {
  '/about': {
    name: 'Sobre mí',
  },
};

export function Navbar() {
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
              <span className='font-bold text-2xl'>Enol Casielles</span>
            </div>
          </Link>
          <div className='flex flex-row items-center'>
            <div className="flex flex-row space-x-0 pr-10">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-blue-400 flex align-middle relative py-1 px-2"
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
            <ThemeModeSelector />
          </div>
        </nav>
      </div>
    </aside>
  );
}
