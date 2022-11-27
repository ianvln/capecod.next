import classNames from "classnames";
import Link from "next/link";
import useSticky from "../../../effects/general/useSticky";
import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
    const { isSticky, stickyRef } = useSticky();

    const navigationItems = [
        { name: "welcome", title: 'Welkom',  href:'#'},
        { name: "suggestions", title: 'Suggesties',  href:'#suggestions'},
        { name: "about", title: 'Over ons',  href:'#about'},
        { name: "contact", title: 'Contact',  href:'#contact'}
    ]
    return (
        <>
            <nav className={classNames(styles.container, { [styles.sticky] : isSticky })} ref={stickyRef}>
                <ul>
                    { 
                    navigationItems.map((navigationItem => (
                        <li key={navigationItem.name} className={styles.navigationItem}> 
                            <Link onClick={() => document.getElementById(navigationItem.href)?.scrollIntoView()} href={navigationItem.href}><a>{navigationItem.title}</a></Link> 
                        </li>)))
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar;