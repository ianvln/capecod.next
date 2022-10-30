import type { NextPage } from 'next'
import { CSSProperties } from 'react'
import Image from 'next/image'
import backgroundImage from '../assets/background.png'
import logo from '../assets/capecod-white.svg'
import NavigationBar from '../components/general/nav/NavigationBar'

const Home: NextPage = () => {
  return (
    <div style={welcomeBackground}>
      <NavigationBar />
      <div style={dishesOverlayContainer}>
        
      </div>
      <div style={welcome}>
          <Image style={welcomeLogo} src={logo} width={250} height={250} />
          <h1 style={capeCodHeader}> Cape Cod </h1>
          <div style={capeCodSubHeader}> Welkom </div> 
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

const capeCodHeader: CSSProperties = {
  fontSize: '4rem',
  fontFamily: 'Anton, sans-serif',
  letterSpacing: 2,
  textTransform: 'uppercase',
  margin: 0
}

const capeCodSubHeader: CSSProperties = {
  fontFamily: 'Herr Von Muellerhoff, cursive',
  fontSize: '4rem',
  marginTop: -20,
  color: '#c59d5f'
}

export default Home
