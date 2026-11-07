import { useRouter } from 'next/router';
import { Locale, MESSAGES, Messages, toLocale } from './index';

export const useTranslation = (): { t: Messages; locale: Locale } => {
    const locale = toLocale(useRouter().locale);
    return { t: MESSAGES[locale], locale };
};
