import type { NextPage } from 'next'
import { CSSProperties, } from 'react'
import Image from 'next/image'
import backgroundImage from '../assets/background.jpg'
import logo from '../assets/capecod-white.svg'
import warning from '../assets/warning.svg';
import { Fade, Slide } from 'react-awesome-reveal'
import NavigationWrapper from '../components/general/nav/NavigationWrapper'
import MenuCard from '../components/menu/MenuCard'
import { MENU_FR } from '../types/Menu'

const Home: NextPage = () => {

  return (
    <div>
      <NavigationWrapper />
      <section id="welcome" style={welcomeBackground}>
        <div style={welcome}>
            <Fade>
              <Image alt="Cape Cod Logo" style={welcomeLogo} src={logo} width={250} height={250} />
            </Fade> 
            <Slide direction='left'>
              <h1 style={header}> Cape Cod </h1>
            </Slide>
            <Slide direction='right'>
              <div style={subHeader}> Bienvenue </div>
            </Slide>
        </div>
      </section>
      
      <section id="contact" style={sectionStyle}>
        <h1 style={sectionTitleStyle}> Contact </h1>
        <p> Cape Cod | Lombardsijdestraat 7, 8620 Nieuwpoort </p>
        <p> Tel: 058 23 39 19 </p>
        <p> info@capecod.be </p>
        <p> Ondernemingsnummer 0679 325 939 </p>
        
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

const sectionStyle: CSSProperties = {
  maxWidth: '1200px',
  margin: '200px auto',
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

const sectionTitleStyle: CSSProperties = {
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: '2rem',
  letterSpacing: '2px'
}

const subHeader: CSSProperties = {
  fontFamily: 'Herr Von Muellerhoff, cursive',
  fontSize: '4rem',
  marginTop: -20,
  color: '#c59d5f'
}

const announcement: CSSProperties = {
  backgroundColor: 'rgba(52, 52, 52, 0.8)',
  padding: 10,
  maxWidth: 720
}

export default Home
