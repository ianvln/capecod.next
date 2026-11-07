import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../assets/capecod-white.svg";
import useActiveSection from "../../effects/general/useActiveSection";
import { LOCALES } from "../../i18n";
import { useTranslation } from "../../i18n/useTranslation";
import { NAVIGATION_ITEMS } from "../../types/general/Navigation";
import styles from './Header.module.scss';

const SECTION_IDS = NAVIGATION_ITEMS.map(item => item.href);

const Header = () => {
    const { t, locale } = useTranslation();
    const activeSection = useActiveSection(SECTION_IDS);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        if (!isOpen) {
            return;
        }
        const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false);
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);

    const close = () => setIsOpen(false);

    return (
        <header className={classNames(styles.header, { [styles.solid]: isScrolled || isOpen })}>
            <a href="#main" className="skip-link">{t.header.skipToContent}</a>
            <div className={styles.inner}>
                <a href="#welcome" className={styles.brand} onClick={close}>
                    <Image src={logo} alt="" width={40} height={33} />
                    <span>Cape Cod</span>
                </a>

                <nav id="site-navigation" aria-label={t.nav.label} className={classNames(styles.nav, { [styles.navOpen]: isOpen })}>
                    <ul className={styles.links}>
                        {NAVIGATION_ITEMS.map(item => (
                            <li key={item.name}>
                                <a
                                    href={`#${item.href}`}
                                    className={classNames(styles.link, { [styles.active]: activeSection === item.href })}
                                    aria-current={activeSection === item.href ? 'location' : undefined}
                                    onClick={close}
                                >
                                    {t.nav[item.name]}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.languages} role="group" aria-label={t.header.language}>
                        {LOCALES.map(l => (
                            <Link
                                key={l}
                                href="/"
                                locale={l}
                                hrefLang={l}
                                lang={l}
                                className={classNames(styles.language, { [styles.languageActive]: l === locale })}
                                aria-current={l === locale ? 'true' : undefined}
                                onClick={close}
                            >
                                {l.toUpperCase()}
                            </Link>
                        ))}
                    </div>
                </nav>

                <button
                    type="button"
                    className={classNames(styles.toggle, { [styles.toggleOpen]: isOpen })}
                    aria-expanded={isOpen}
                    aria-controls="site-navigation"
                    aria-label={isOpen ? t.header.closeMenu : t.header.openMenu}
                    onClick={() => setIsOpen(open => !open)}
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    );
}

export default Header;
