import { nl, Messages } from './nl';
import { fr } from './fr';

export type Locale = 'nl' | 'fr';

export const LOCALES: Locale[] = ['nl', 'fr'];
export const DEFAULT_LOCALE: Locale = 'nl';

export const MESSAGES: Record<Locale, Messages> = { nl, fr };

export const toLocale = (value?: string): Locale =>
    LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE;

export type { Messages };
