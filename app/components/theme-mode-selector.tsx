"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ThemeMode = 'light' | 'dark';

function ThemeModeSelector() {

  const [mode, setMode] = useState<ThemeMode | null>(null);

  const changeMode = (mode: ThemeMode) => {
    localStorage.theme = mode;
    setMode(mode);
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setMode('dark')
    } else {
      setMode('light')
    }
  }, [])

  if (!mode) return null;

  if (mode === 'light') return (
    <button onClick={() => changeMode('dark')} aria-checked="true" aria-label="Dark" className=""><span> <Image width={16} height={16} alt="Dark mode" src="/dark-mode.svg" /> </span></button>
  );

  if (mode === 'dark') return (
    <button onClick={() => changeMode('light')} aria-checked="true" aria-label="Dark" className="" ><span> <Image width={16} height={16} alt="Light mode" src="/light-mode.svg" /> </span></button>
  );
}

export default ThemeModeSelector;