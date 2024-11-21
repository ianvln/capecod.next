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
              Pour plus d&apos;informations et/ou pour passer vos commandes, vous pouvez passer dans notre magasin ou
              nous
              appeler
              au 058/233919 - 0498/63 39 99. Vous pouvez également envoyer un mail à info@capecod.be.
            </p>
            <p style={{textAlign: 'center'}}>
              Commandez à temps, afin que nous puissions préparer votre repas de fête avec le soin qu&apos;il mérite.
              Les commandes par mail ne sont valables qu&apos;après notre confirmation.
            </p>
            <p style={{textAlign: 'center'}}>
              Vous trouverez ci-dessous une date limite indicative pour nos commandes. En cas d&apos;affluence
              exceptionnelle, il est
              possible que nous devions clôturer les commandes plus tôt afin de garantir notre qualité reconnue.
            </p>
            <p style={{textAlign: 'center'}}>
              Nous acceptons vos commandes pour les fêtes de Noël jusqu&apos;au jeudi 19/12 à 18h au plus tard.
              Pour les fêtes de fin d&apos;année, les dernières commandes seront prises jusqu&apos;au vendredi 27/12 à
              12h.
              Après ces dates, les commandes ne pourront plus être <strong>MODIFIÉES OU ANNULÉES</strong>. Nous vous
              remercions
              pour votre compréhension.
            </p>
            <p style={{textAlign: 'center'}}>
              Les commandes du 24/12 et du 31/12 peuvent être retirées entre 13h30 et 17h.
              Les commandes du 25/12 et du 1/1 peuvent être retirées entre 10h et 13h.
              Els, Dries et Lieven ainsi que leur équipe vous souhaitent de joyeuses fêtes de fin d&apos;année pleines
              de
              saveurs.
            </p>
            <div className="primary" style={{textAlign: 'center', textTransform: 'uppercase'}}>
              <a target="_blank" href="/pdf/feestsuggesties-2024-FR.pdf">
                Consultez les suggestions de fêtes au format PDF
              </a>
            </div>
          </div>
        </Fade>
      </section>

      <section id="contact" style={sectionStyle}>
        <div style={{maxWidth: 720, margin: '0 auto'}}>
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
