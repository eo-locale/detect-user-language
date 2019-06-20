import { getUserLocale } from 'get-user-locale';

export function detectUserLanguage<T extends string = string>(
  availableLocales: T[],
): T | undefined {
  const userLocale = getUserLocale();

  return availableLocales.find(locale => locale === userLocale);
}
