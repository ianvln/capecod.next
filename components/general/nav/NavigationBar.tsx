import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../i18n/useTranslation";
import useSticky from "../../../effects/general/useSticky";
import { NavigationItem, NAVIGATION_ITEMS } from "../../../types/general/Navigation";
import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
    const { t, locale } = useTranslation();
    const { isSticky, stickyRef } = useSticky();
    const [activeNavigationItem, setActiveNavigationItem] = useState<NavigationItem>(NAVIGATION_ITEMS[0]);

    const navigateTo = (navigationItem: NavigationItem) => {
        document.getElementById(navigationItem.href)?.scrollIntoView();
        setActiveNavigationItem(NAVIGATION_ITEMS.find(ni => ni.href === navigationItem.href) ?? NAVIGATION_ITEMS[0]);
    }

    const isActive = (navigationItem: NavigationItem) => navigationItem.name === activeNavigationItem.name;

    function isInViewport(element: HTMLElement | null) {
        if (element == null) {
            return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight;
    }

    const updateActiveItem = () => {
        let lastNavigationItemInView = NAVIGATION_ITEMS[0];

        NAVIGATION_ITEMS.forEach(ni => {
            const section = document.getElementById(ni.href)

            if(isInViewport(section)) {
                lastNavigationItemInView = ni;
            }
        });

        setActiveNavigationItem(lastNavigationItemInView);
    }

    useEffect(() => {
        document.addEventListener('scroll', updateActiveItem, { passive: true })

        return () => document.removeEventListener('scroll', updateActiveItem);
    });

    return (
        <div className={styles.navigationBar}>
            <nav className={classNames(styles.container, { [styles.sticky] : isSticky })} ref={stickyRef}>
                <ul>
                    { 
                    NAVIGATION_ITEMS.map((navigationItem => (
                        <li className={classNames(styles.navigationItem, { [styles.activeItem] : isActive(navigationItem) }, { [styles.inactiveItem] : !isActive(navigationItem) })} key={navigationItem.name}> 
                            <span onClick={() => navigateTo(navigationItem)}>{t.nav[navigationItem.name]}</span>
                        </li>)))
                    }
                </ul>
                <div className={styles.localizationMenu}>
                    <div className={classNames(styles.navigationItem, { [styles.activeItem] : locale === 'nl' })}>
                        <span> <Link href="/" locale="nl" hrefLang="nl" lang="nl">NL</Link> </span>
                    </div>
                    <div className={classNames(styles.navigationItem, { [styles.activeItem] : locale === 'fr' })} style={{marginLeft: 10}}>
                        <span> <Link href="/" locale="fr" hrefLang="fr" lang="fr">FR</Link> </span>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar;