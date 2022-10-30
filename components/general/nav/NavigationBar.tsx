import { CSSProperties } from "react";
import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
    const navigationItems = [
        { name: "welcome", title: 'Welkom',  href:'#welcome'},
        { name: "suggestions", title: 'Suggesties',  href:'#suggestions'},
        { name: "about", title: 'Over ons',  href:'#about'},
        { name: "contact", title: 'Contact',  href:'#contact'}
    ]
    return (
        <>
            <nav style={containerStyle}>
                <ul>
                    { navigationItems.map((navigationItem => (<li className={styles.navigationItem} style={navigationItemStyle} key={navigationItem.name}> <a href={navigationItem.href}> {navigationItem.title} </a> </li>))) }
                </ul>
            </nav>
        </>
    )
}

const containerStyle: CSSProperties = {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 50,
    left: 0
}

const navigationItemStyle: CSSProperties = {
    display: 'inline',
    listStyle: 'none',
    textTransform: 'uppercase',
    color: '#fff',
    margin: '0 10px',
}

export default NavigationBar;