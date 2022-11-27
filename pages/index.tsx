import type { NextPage } from 'next'
import { CSSProperties, } from 'react'
import Image from 'next/image'
import backgroundImage from '../assets/background.jpg'
import logo from '../assets/capecod-white.svg'
import NavigationBar from '../components/general/nav/NavigationBar'
import { MENU } from '../types/Menu'
import MenuCard from '../components/menu/MenuCard'
import { Fade, Slide } from 'react-awesome-reveal'

const Home: NextPage = () => {

  return (
    <div>
      <NavigationBar />
      <section id="welcome" style={welcomeBackground}>
        <div style={welcome}>
            <Fade>
              <Image style={welcomeLogo} src={logo} width={250} height={250} />
            </Fade> 
            <Slide direction='left'>
              <h1 style={header}> Cape Cod </h1>
            </Slide>
            <Slide direction='right'>
              <div style={subHeader}> Welkom </div>
            </Slide>
        </div>
      </section>

      <section id="suggestions" style={sectionStyle}>
        <Fade>
          <h1 style={sectionTitleStyle}> Suggesties </h1>
        </Fade>
        
        <MenuCard menu={MENU} />        
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

export default Home
