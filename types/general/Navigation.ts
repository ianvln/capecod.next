export interface NavigationItem {
    name: string;
    title: string;
    href: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
    { name: "welcome", title: 'Welkom',  href:'welcome'},
    { name: "openinghours", title: 'Openingsuren',  href:'openinghours'},
    { name: "suggestions", title: 'Suggesties',  href:'suggestions'},
    { name: "contact", title: 'Contact',  href:'contact'},
]