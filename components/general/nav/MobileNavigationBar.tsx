import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavigationItem, NAVIGATION_ITEMS } from '../../../types/general/Navigation';
import { useTranslation } from '../../../i18n/useTranslation';
import styles from './MobileNavigationBar.module.scss';

const MobileNavigationBar = () => {
    const { t, locale } = useTranslation();

    const navigateTo = (navigationItem: NavigationItem) => {
        setIsOpen(false);
        document.getElementById(navigationItem.href)?.scrollIntoView();
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.mobileNavigationBar}>
            <div className={styles.navigationContainer}>
                <div className={styles.hamburger} onClick={() => toggle()}>
                    <div className={classNames(styles.hamburgerLine, styles.hamburgerLine1, { [styles.hamburgerLine1Open] : isOpen })}></div>
                    <div className={classNames(styles.hamburgerLine, styles.hamburgerLine2, { [styles.hamburgerLine2Open] : isOpen })}></div>
                    <div className={classNames(styles.hamburgerLine, styles.hamburgerLine3, { [styles.hamburgerLine3Open] : isOpen })}></div>
                </div>
            </div>
            { isOpen &&
                <nav className={styles.navigation}>
                    <ul className={styles.navigationItemList}>
                        <Fade damping={0.05} cascade>
                            { 
                            NAVIGATION_ITEMS.map((navigationItem => (
                                <li className={styles.navigationItem} key={navigationItem.name}> 
                                    <span onClick={() => navigateTo(navigationItem)}>{t.nav[navigationItem.name]}</span>
                                </li>)))
                            }
                        </Fade>
                    </ul>
                    <div className={styles.localizationMenu}>
                        <div className={classNames(styles.navigationItem, { [styles.activeItem] : locale === 'nl' })}>
                            <span onClick={() => setIsOpen(false)}> <Link href="/" locale="nl" hrefLang="nl" lang="nl">NL</Link>  </span>
                        </div>
                        <div className={classNames(styles.navigationItem, { [styles.activeItem] : locale === 'fr' })}>
                            <span onClick={() => setIsOpen(false)}> <Link href="/" locale="fr" hrefLang="fr" lang="fr">FR</Link> </span>
                        </div>
                    </div>
                </nav>
            }
        </div>
        
    )
    
}

export default MobileNavigationBar;