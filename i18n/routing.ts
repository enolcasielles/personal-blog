import {defineRouting} from 'next-intl/routing';

export const locales = ['es', 'en'];
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,
 
  // Used when no locale matches
  defaultLocale: 'es'
});