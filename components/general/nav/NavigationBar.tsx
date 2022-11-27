import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSticky from "../../../effects/general/useSticky";
import { NavigationItem } from "../../../types/general/Navigation";
import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
    const navigationItems: NavigationItem[] = [
        { name: "welcome", title: 'Welkom',  href:'welcome'},
        { name: "suggestions", title: 'Suggesties',  href:'suggestions'},
    ]

    const { isSticky, stickyRef } = useSticky();
    const [activeNavigationItem, setActiveNavigationItem] = useState<NavigationItem>(navigationItems[0]);

    const navigateTo = (navigationItem: NavigationItem) => {
        document.getElementById(navigationItem.href)?.scrollIntoView();
        setActiveNavigationItem(navigationItems.find(ni => ni.href === navigationItem.href) ?? navigationItems[0]);
    }

    const isActive = (navigationItem: NavigationItem) => navigationItem.name === activeNavigationItem.name;

    function isInViewport(element: HTMLElement | null) {
        if (element == null) {
            return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 10;
    }

    const updateActiveItem = () => {
        let lastNavigationItemInView = navigationItems[0];

        navigationItems.forEach(ni => {
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
        <>
            <nav className={classNames(styles.container, { [styles.sticky] : isSticky })} ref={stickyRef}>
                <ul>
                    { 
                    navigationItems.map((navigationItem => (
                        <li className={classNames(styles.navigationItem, { [styles.activeItem] : isActive(navigationItem) }, { [styles.inactiveItem] : !isActive(navigationItem) })} key={navigationItem.name}> 
                            <span onClick={() => navigateTo(navigationItem)}>{navigationItem.title}</span>
                        </li>)))
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar;