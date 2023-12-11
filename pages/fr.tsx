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
import { OPENING_HOURS, OPENING_HOURS_BY_DATE_AFTER_NYE, OPENING_HOURS_BY_DATE_AFTER_XMAS_BEFORE_NYE, OPENING_HOURS_BY_DATE_BEFORE_XMAS } from '../api/openinghours'
import OpeningHoursByDate from '../components/contact/OpeningHoursByDate'
import { Promo } from '../components/promo/Promo'

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
          <Fade>
          <div style={{ maxWidth: 500, textShadow: '1px 1px 2px black', fontSize: '1.2rem' }}>
              <p>Fermé du dimanche 17 décembre au mercredi 20 décembre. Joignable par e-mail à l&apos;adresse <a href="mailto:info@capecod.be">info@capecod.be</a> et par téléphone portable au <a href="tel:+32498633999">0498 63 39 99</a>.</p>
          </div>
          </Fade>
        </div>
      </section>

      <section id="promo">
        <Promo language={Language.French} />
      </section>
      
      <section id="suggestions" style={sectionStyle}>
        <Fade triggerOnce>
          <h1 style={sectionTitleStyle}> Suggestions </h1>
        </Fade>

        <MenuCard menu={MENU_FR} />
        <Fade triggerOnce>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ textAlign: 'center' }}> Pour plus d&apos;informations et pour passer vos commandes, vous pouvez vous rendre dans notre magasin ou nous contacter au 058/233919 -0498/63 39 99 ou à l&apos;adresse info@capecod.be. </p>
            <p style={{ textAlign: 'center' }}> Commandez à temps afin que nous puissions traiter votre repas de fête avec le soin qu&apos;il mérite. Les commandes par e-mail ne sont valides qu&apos;après notre confirmation. Nous enregistrons vos commandes pour les fêtes de Noël jusqu&apos;au mercredi 20/12 à 18h. Pour les fêtes de fin d&apos;année, nous prenons note des dernières commandes jusqu&apos;au jeudi 28/12 à 12h. Après ces dates, les commandes NE PEUVENT PLUS ÊTRE MODIFIÉES OU ANNULÉES. Nous vous remercions d&apos;avance pour votre compréhension. </p>
            <p style={{ textAlign: 'center' }}> Les commandes pour le 24/12 et le 31/12 peuvent être retirées entre 13h30 et 17h. Pour le 25/12 et le 1/1, les commandes peuvent être retirées entre 10h et 13h. Els & Lieven ainsi que leur équipe vous souhaitent d&apos;agréables et savoureuses fêtes de fin d&apos;année. </p>
            <div className="primary" style={{ textAlign: 'center', textTransform: 'uppercase' }}>
              <a target="_blank" href="/pdf/feestuggesties-2023-FR.pdf"> Voir les suggestions de fin d&apos;année (PDF) </a>
            </div>
          </div>
        </Fade>
      </section>

      <section id="openinghours" style={sectionStyle}>
        <h1 style={sectionTitleStyle}> Heures d&apos;ouverture </h1>
        <div style={openingHoursStyle}>
          <OpeningHours language={Language.French} openingHours={OPENING_HOURS} />
        </div>
        <h2 style={{textAlign: 'center', fontSize: '1.4rem'}}> Horaires d&apos;ouverture exceptionnels pendant les vacances de Noël. </h2>
        <div style={{...openingHoursStyle, marginTop: '2rem'}}>
          <OpeningHoursByDate language={Language.French} openingHours={OPENING_HOURS_BY_DATE_BEFORE_XMAS} />
          <p> Commandes de 13h30 à 17h00 </p>
          <OpeningHoursByDate language={Language.French} openingHours={OPENING_HOURS_BY_DATE_AFTER_XMAS_BEFORE_NYE} />
          <p> Commandes de 13h30 à 17h00 </p>
          <OpeningHoursByDate language={Language.French} openingHours={OPENING_HOURS_BY_DATE_AFTER_NYE} />
        </div>
      </section>

      <section id="contact" style={sectionStyle}>
        <div style={{ maxWidth: 720, margin: '0 auto' }} >
          <h1 style={sectionTitleStyle}> Contact </h1>
          <p> Cape Cod | Lombardsijdestraat 7, 8620 Nieuwpoort </p>
          <p> Tel: 058 23 39 19 </p>
          <p> info@capecod.be </p>
          <p> Numéro d&apos;entreprise 0679 325 939 </p>
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
  maxWidth: 500,
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  margin: '0 auto',
  padding: '0.5rem',
  border: '0.312rem solid #c59d5f',
}


export default Home
