import type { NextPage } from 'next'
import { CSSProperties } from 'react'
import Image from 'next/image'
import backgroundImage from '../assets/background.jpg'
import logo from '../assets/capecod-white.svg'
import NavigationBar from '../components/general/nav/NavigationBar'
import { useSpring, animated } from 'react-spring'
import { Menu } from '../types/Menu'
import MenuCard from '../components/menu/MenuCard'
import style from './index.module.scss';

const Home: NextPage = () => {
  const welcomeLogoAnimation = useSpring({ 
    delay: 500,
    to: { opacity: 1 }, 
    from: { opacity: 0 } 
  });

  const headerAnimation = useSpring({
    delay: 750,
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 }
  });

  const subHeaderAnimation = useSpring({
    delay: 1000,
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 }
  });

  const menu: Menu = {
    dishSets: [
      { 
        name: 'Kleine menu',
        dishes: [
          { name: 'Banaan', description: 'Kiwi/citroen/etc', price: 5.75 },
          { name: 'Test', description: 'Kiwi/citroen/etc', price: 5.75 },
          { name: 'Woohoo', description: 'Kiwi/citroen/etc', price: 5.75 },
        ]
      },
      { 
        name: 'Grote menu',
        dishes: [
          { name: 'Banaan', description: 'Kiwi/citroen/etc', price: 5.75 },
          { name: 'Test', description: 'Kiwi/citroen/etc', price: 5.75 },
          { name: 'Woohoo', description: 'Kiwi/citroen/etc', price: 5.75 },
        ]
      },
      { 
        name: 'Test menu',
        dishes: [
          { name: 'Banaan', description: 'Kiwi/citroen/etc', price: 5.75 },
          { name: 'Test', description: 'Kiwi/citroen/etc', price: 5.75 },
          { name: 'Woohoo', description: 'Kiwi/citroen/etc', price: 5.75 },
        ]
      }
    ]
  }

  return (
    <div>
      <section style={welcomeBackground}>
        <NavigationBar />
        
        <div style={welcome}>
            <animated.div style={welcomeLogoAnimation}>
              <Image style={welcomeLogo} src={logo} width={250} height={250} />
            </animated.div> 
            <animated.div style={headerAnimation}>
              <h1 style={header}> Cape Cod </h1>
            </animated.div>
            <animated.div style={subHeaderAnimation}>
              <div style={subHeader}> Welkom </div>
            </animated.div>
        </div>
      </section>

      <section>
        <h2 style={sectionHeaderStyle}> Suggesties </h2>
        <MenuCard menu={menu} />
      </section>
    </div>
    
  )
}

const welcomeBackground: CSSProperties = {
  background: `url(${backgroundImage.src})`,
  backgroundSize: 'cover',
  border: '10px solid #c59d5f',
  display: 'grid',
  minHeight: '100vh',
  alignContent: 'center',
  justifyContent: 'center',
  position: 'relative',
}

const welcomeLogo: CSSProperties = {
  color: '#fff',
  fill: '#fff',
}

const welcome: CSSProperties = {
  color: '#fff',
  textAlign: 'center',
  zIndex: 2
}

const header: CSSProperties = {
  fontSize: '4rem',
  fontFamily: 'Anton, sans-serif',
  letterSpacing: 2,
  textTransform: 'uppercase',
  margin: 0
}

const sectionHeaderStyle: CSSProperties = {
  textAlign: 'center',
  textTransform: 'uppercase'
}

const subHeader: CSSProperties = {
  fontFamily: 'Herr Von Muellerhoff, cursive',
  fontSize: '4rem',
  marginTop: -20,
  color: '#c59d5f'
}

export default Home
