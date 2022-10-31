import type { NextPage } from 'next'
import { CSSProperties } from 'react'
import Image from 'next/image'
import backgroundImage from '../assets/background.jpg'
import logo from '../assets/capecod-white.svg'
import NavigationBar from '../components/general/nav/NavigationBar'
import { useSpring, animated } from 'react-spring'

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

  return (
    <div style={welcomeBackground}>
      <NavigationBar />
      <div style={dishesOverlayContainer}>
        
      </div>
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

const dishesOverlayContainer: CSSProperties = {
  position: 'absolute',
  bottom: -150,
  left: -50,
  width: 700,
  height: 500
}

const dishesOverlay: CSSProperties = {
  filter: 'drop-shadow(12px 12px 20px #000)',
  zIndex: -1
}

const header: CSSProperties = {
  fontSize: '4rem',
  fontFamily: 'Anton, sans-serif',
  letterSpacing: 2,
  textTransform: 'uppercase',
  margin: 0
}

const subHeader: CSSProperties = {
  fontFamily: 'Herr Von Muellerhoff, cursive',
  fontSize: '4rem',
  marginTop: -20,
  color: '#c59d5f'
}

export default Home
