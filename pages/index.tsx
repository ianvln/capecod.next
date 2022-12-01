import type { NextPage } from 'next'
import { CSSProperties, } from 'react'
import Image from 'next/image'
import backgroundImage from '../assets/background.jpg'
import logo from '../assets/capecod-white.svg'
import { MENU } from '../types/Menu'
import MenuCard from '../components/menu/MenuCard'
import { Fade, Slide } from 'react-awesome-reveal'
import NavigationWrapper from '../components/general/nav/NavigationWrapper'

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
              <div style={subHeader}> Welkom </div>
            </Slide>
        </div>
      </section>

      <section id="suggestions" style={sectionStyle}>
        <Fade triggerOnce>
          <h1 style={sectionTitleStyle}> Suggesties </h1>
          <div style={{textAlign: 'center', margin: '0 auto', maxWidth: 720}}>
            <p> Voor meer inlichtingen en vragen kunt u langskomen in onze winkel of via 058 23 39 19 of info@capecod.be. </p>
            <p> Bestel tijdig, zo kunnen we uw feestmaaltijd met de zorg behandelen die ze verdient. Bestellingen per mail zijn enkel geldig na onze bevestiging. </p>
            <p> Uw bestellingen voor de Kerstdagen noteren wij ten laatste op dinsdag  20/12 om 18 uur. Voor de eindejaarsdagen noteren we de laatste bestellingen op woensdag 28/12 om 12uur. Na deze data kunnen bestellingen ook niet meer gewijzigd of geannuleerd worden. </p>
            <p> Bestellingen op 24/12 en 31/12, kunnen afgehaald worden tussen 13u30 en 17u. </p>
            <p> Op 25/12 en 1/1 kunnen de bestellingen afgehaald worden tussen 10 en 14u. </p>
            <p> Sommige gerechten worden op porselein van het huis meegegeven, waarvoor een waarborg zal gevraagd worden. Els & Lieven en hun team, wensen u aangename eindejaarsfeesten. </p>
          </div>
        </Fade>
        
        <MenuCard menu={MENU} />        
      </section>

      <section id="contact" style={sectionStyle}>
        <Fade>
          <h1 style={sectionTitleStyle}> Contact </h1>
        </Fade>
        
        <Fade style={{paddingLeft: 20}} triggerOnce cascade>
          <p> Cape Cod | Lombardsijdestraat 7, 8620 Nieuwpoort </p>
          <p> Tel: 058 23 39 19 </p>
          <p> info@capecod.be </p>
          <p> Ondernemingsnummer 0679 325 939 </p>
        </Fade>
        
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
