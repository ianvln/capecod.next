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
import OpeningHours from '../components/contact/OpeningHours'
import { Language } from '../types/general/util/lang/language'
import { OPENING_HOURS } from '../api/openinghours'

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

      <section id="suggestions-ye" style={sectionStyle}>
        <Fade triggerOnce>
          <h1 style={sectionTitleStyle}> Suggestions de fin d&apos;année </h1>
        </Fade>
        
        <div className="primary" style={{textAlign: 'center', textTransform: 'uppercase'}}>
          <a target="_blank" href="/pdf/feestuggesties-2023-FR.pdf"> Voir les suggestions de fin d&apos;année </a> 
        </div>
      </section>

      <section id="suggestions" style={sectionStyle}>
        <Fade triggerOnce>
          <h1 style={sectionTitleStyle}> Suggestions </h1>
        </Fade>
        
        <MenuCard menu={MENU_FR} />
        <p style={{textAlign: 'center'}}>
          Certains plats doivent être commandés trois jours à l&apos;avance et pour un minimum de 4 personnes. Veuillez appeler pour plus d'explications.
        </p>  
      </section>

      <section id="openinghours" style={sectionStyle}>
        <h1 style={sectionTitleStyle}> Heures d&apos;ouverture </h1>
        <div style={openingHoursStyle}>
          <OpeningHours language={Language.French} openingHours={OPENING_HOURS} />
          <p> D'autres horaires d'ouverture pendant les vacances. </p>
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

const openingHoursStyle: CSSProperties = {
  maxWidth: 400,
  display: 'flex',
  alignContent: 'center',
  margin: '0 auto'
}


export default Home
