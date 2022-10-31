import classNames from "classnames";
import { CSSProperties } from "react";
import useSticky from "../../../effects/general/useSticky";
import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
    const { isSticky, stickyRef } = useSticky();

    const navigationItems = [
        { name: "welcome", title: 'Welkom',  href:'#welcome'},
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
                        <li className={styles.navigationItem}  key={navigationItem.name}> 
                            <a href={navigationItem.href}> {navigationItem.title} </a> 
                        </li>)))
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar;