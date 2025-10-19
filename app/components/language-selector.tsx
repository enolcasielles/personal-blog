"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../i18n/navigation";
import { useTransition, useEffect } from "react";

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // Asegurar que el tema se aplique correctamente después de cambiar de idioma
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [locale]);

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 rounded text-sm font-medium transition-all ${
          locale === 'es'
            ? ' text-blue-500'
            : 'hover:text-blue-400'
        }`}
        disabled={isPending}
        aria-label="Español"
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded text-sm font-medium transition-all ${
          locale === 'en'
            ? ' text-blue-500'
            : 'hover:text-blue-400'
        }`}
        disabled={isPending}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

