import type { NextPage } from 'next'
import { CSSProperties, } from 'react'
import Image from 'next/image'
import backgroundImage from '../assets/background.jpg'
import logo from '../assets/capecod-white.svg'
import { Fade, Slide } from 'react-awesome-reveal'
import NavigationWrapper from '../components/general/nav/NavigationWrapper'
import OpeningHours from '../components/contact/OpeningHours'
import { Language } from '../types/general/util/lang/language'
import { OPENING_HOURS } from '../api/openinghours'
import { Promo } from '../components/promo/Promo'
import MenuCard from '../components/menu/MenuCard'
import { MENU } from '../types/Menu'

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
          <Fade>
            <div style={{ fontSize: '1.2rem' }}>
              <p> Uitzonderlijk gesloten op maandag 27 november </p>
            </div>
          </Fade>
        </div>
      </section>

      <section id="promo">
        <Promo />
      </section>

      <section id="suggestions" style={sectionStyle}>
        <Fade triggerOnce>
          <h1 style={sectionTitleStyle}> Suggesties </h1>
        </Fade>

        <MenuCard menu={MENU} />

        <Fade triggerOnce>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ textAlign: 'center' }}> Voor meer inlichtingen en het plaatsen van uw bestellingen kunt u langskomen in onze winkel of via 058/233919 -0498/63 39 99 of info@capecod.be. </p>
            <p style={{ textAlign: 'center' }}> Bestel tijdig, zo kunnen we uw feestmaaltijd met de zorg behandelen die ze verdient. Bestellingen per mail zijn enkel geldig na onze bevestiging. Uw bestellingen voor de Kerstdagen noteren wij ten laatste op woensdag 20/12 om 18 uur. Voor de eindejaarsdagen noteren we de laatste bestellingen op donderdag 28/12 om 12uur. Na deze data kunnen bestellingen ook NIET MEER GEWIJZIGD OF GEANNULEERD worden. Wij danken u alvast voor uw begrip. </p>
            <p style={{ textAlign: 'center' }}> Bestellingen op 24/12 en 31/12, kunnen afgehaald worden tussen 13u30 en 17u. Op 25/12 en 1/1 kunnen de bestellingen afgehaald worden tussen 10 en 13u.Els & Lieven en hun team, wensen u aangename en smaakvolle eindejaarsfeesten. </p>
            <div className="primary" style={{ textAlign: 'center', textTransform: 'uppercase' }}>
              <a target="_blank" href="/pdf/feestuggesties-2023-NL.pdf"> Bekijk de feestsuggesties in de PDF </a>
            </div>
          </div>
        </Fade>
      </section>

      <section id="openinghours" style={sectionStyle}>
        <h1 style={sectionTitleStyle}> Openingsuren </h1>
        <div style={openingHoursStyle}>
          <OpeningHours language={Language.Dutch} openingHours={OPENING_HOURS} />
        </div>
        <p style={{ display: 'flex', justifyContent: 'center', fontStyle: 'italic' }}> Uitzonderlijk gesloten op maandag 27 november </p>
      </section>

      <section id="contact" style={sectionStyle}>
        <div style={{ maxWidth: 720, margin: '0 auto' }} >
          <h1 style={sectionTitleStyle}> Contact </h1>
          <p> Cape Cod | Lombardsijdestraat 7, 8620 Nieuwpoort </p>
          <p> Tel: 058 23 39 19 </p>
          <p> info@capecod.be </p>
          <p> Ondernemingsnummer 0679 325 939 </p>
        </div>
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
