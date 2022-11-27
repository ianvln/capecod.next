import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import useSticky from "../../../effects/general/useSticky";
import { NavigationItem } from "../../../types/general/Navigation";
import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
    const navigationItems: NavigationItem[] = [
        { name: "welcome", title: 'Welkom',  href:'welcome'},
        { name: "suggestions", title: 'Suggesties',  href:'suggestions'},
        { name: "about", title: 'Over ons',  href:'about'},
        { name: "contact", title: 'Contact',  href:'contact'}
    ]

    const { isSticky, stickyRef } = useSticky();
    const [activeNavigationItem, setActiveNavigationItem] = useState<NavigationItem>(navigationItems[0]);

    const navigateTo = (navigationItem: NavigationItem) => {
        document.getElementById(navigationItem.href)?.scrollIntoView();
        setActiveNavigationItem(navigationItems.find(ni => ni.href === navigationItem.href) ?? navigationItems[0]);
    }

    return (
        <>
            <nav className={classNames(styles.container, { [styles.sticky] : isSticky })} ref={stickyRef}>
                <ul>
                    { 
                    navigationItems.map((navigationItem => (
                        <li key={navigationItem.name} className={styles.navigationItem}> 
                            <span onClick={() => navigateTo(navigationItem)}>{navigationItem.title}</span>
                        </li>)))
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar;