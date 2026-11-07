import type { Messages } from "../../i18n";
import { SHOW_MENU } from "../Menu";

export interface NavigationItem {
    name: Exclude<keyof Messages['nav'], 'label'>;
    href: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
    { name: "welcome", href: 'welcome' },
    { name: "offer", href: 'offer' },
    ...(SHOW_MENU ? [{ name: "menu", href: 'menu' } as NavigationItem] : []),
    { name: "openinghours", href: 'openinghours' },
    { name: "contact", href: 'contact' },
]
