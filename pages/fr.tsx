import type { NextPage } from 'next'
import { CSSProperties, } from 'react'
import Image from 'next/image'
import backgroundImage from '../assets/background.jpg'
import logo from '../assets/capecod-white.svg'
import { Fade, Slide } from 'react-awesome-reveal'
import NavigationWrapper from '../components/general/nav/NavigationWrapper'
import OpeningHours from '../components/contact/OpeningHours'
import { Language } from '../types/general/util/lang/language'
import { OPENING_HOURS, OPENING_HOURS_BY_DATE_AFTER_NYE, OPENING_HOURS_BY_DATE_AFTER_XMAS_BEFORE_NYE, OPENING_HOURS_BY_DATE_BEFORE_XMAS } from '../api/openinghours'
import OpeningHoursByDate from '../components/contact/OpeningHoursByDate'
import { Promo } from '../components/promo/Promo'
import MenuCard from '../components/menu/MenuCard';
import { MENU, MENU_FR } from '../types/Menu';

const Home: NextPage = () => {

  return (
    <div>
      <NavigationWrapper/>
      <section id="welcome" style={welcomeBackground}>
        <div style={welcome}>
          <Fade>
            <Image alt="Cape Cod Logo" style={welcomeLogo} src={logo} width={250} height={250}/>
          </Fade>
          <Slide direction='left'>
            <h1 style={header}> Cape Cod </h1>
          </Slide>
          <Slide direction='right'>
            <div style={subHeader}> Bienvenue</div>
          </Slide>
        </div>
      </section>

      <section id="promo">
        <Promo language={Language.French}/>
      </section>

      <section id="openinghours" style={sectionStyle}>
        <h1 style={sectionTitleStyle}> Heures d&apos;ouverture </h1>
        <div style={openingHoursStyle}>
          <OpeningHours language={Language.French} openingHours={OPENING_HOURS}/>
        </div>
      </section>

      <section id="suggestions" style={sectionStyle}>
        <Fade triggerOnce>
          <h1 style={sectionTitleStyle}> Suggestions </h1>
        </Fade>

        <MenuCard menu={MENU_FR}/>

        <Fade triggerOnce>
          <div style={{maxWidth: 720, margin: '0 auto', textAlign: 'center'}}>
              <p style={{textAlign: 'center'}}>
                  Pour plus d’informations, n’hésitez pas de nous contacter via 058 23 39 19 ou info@capecod.be.
              </p>
              <p style={{textAlign: 'center'}}>
              Commandez à temps, afin que nous puissions préparer votre repas de fête avec tout le soin qu’il mérite.
              Commandes par email sont valides après une confirmation de notre part.
              </p>

              <p style={{textAlign: 'center'}}>
              Nous prenons votre commande pour les fêtes de Noël au plus tard le dimanche 21/12 a 12H.
              Nous prenons les dernières commandes pour les fêtes de nouvel an, le dimanche 28/12 a 12h.
              Après ces dates nous n’acceptons plus CHANGEMENTS ni D’ANNULATIONS.
              </p>

              <p style={{textAlign: 'center'}}>
              Les commandes de 24/12 et 31/12 serons prêts à partir de 13h30 et à enlever jusqu’à 17h.
              Les commandes de 25/12 et 1/1 serons prêts à 10h et à enlever jusqu’à 13h.
              </p>

              <p style={{textAlign: 'center'}}>
              Els, Lieven et Dries, et toute l’équipe, vous souhaitent des excellentes fêtes!
              </p>
            <div className="primary" style={{textAlign: 'center', textTransform: 'uppercase'}}>
              <a target="_blank" href="/pdf/menu-fr.pdf">
                Consultez les suggestions au format PDF
              </a>
            </div>
          </div>
        </Fade>
      </section>

      <section id="contact" style={sectionStyle}>
        <div style={{maxWidth: 720, margin: '0 auto'}}>
          <h1 style={sectionTitleStyle}> Contact </h1>
          <p> Cape Cod | Lombardsijdestraat 7J, 8620 Nieuwpoort </p>
          <p> Tel: 058 23 39 19 </p>
          <p> info@capecod.be </p>
          <p> Numéro d&apos;entreprise 0772 371 309 </p>
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
