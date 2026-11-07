import type { Messages } from "../../i18n";

export interface NavigationItem {
    name: keyof Messages['nav'];
    href: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
    { name: "welcome", href: 'welcome' },
    { name: "openinghours", href: 'openinghours' },
    { name: "contact", href: 'contact' },
]
