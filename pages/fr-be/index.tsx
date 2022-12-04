import type { NextPage } from 'next'
import { CSSProperties, } from 'react'
import Image from 'next/image'
import backgroundImage from '../../assets/background.jpg'
import logo from '../../assets/capecod-white.svg'
import { MENU_FR } from '../../types/Menu'
import MenuCard from '../../components/menu/MenuCard'
import { Fade, Slide } from 'react-awesome-reveal'
import NavigationWrapper from '../../components/general/nav/NavigationWrapper'

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

      <section id="suggestions" style={sectionStyle}>
        <Fade triggerOnce>
          <h1 style={sectionTitleStyle}> Suggestions </h1>
          <div style={{textAlign: 'center', margin: '0 auto', maxWidth: 720}}>
            <p> Pour plus d&apos;infomations, n&apos;hésitez pas de nous contacter via  via 058 23 39 19 ou info@capecod.be.</p>
            <p> Commandes par email sont valides après une réponse de notre part. </p>
            <p> Nous prenons votre commande pour les fêtes de Noël au plus tard le mardi 20/12 a 18H. Nous prenons les toutes dernières commandes pour les fêtes de nouvel an, le mercredi 28/12 a 12h. près ces dates nous n&apos;acceptons plus changements ni d&apos;annulations. </p>
            <p> Les commandes de 24/12 et 31/12 serons prêts à partir de 13h30 et à enlever jusq&apos;a 17h. Les commandes de 25/12 et 1/1 serons prêts à 10h et à enlever jusq&apos;a 14h. </p>
            <p> Certains plats serons presentés sur de la porcelaine de Cape Cod, une garanti vous sera demandé. Els et Lieven, leur famille et toute l&apos;équipe, vous souhaitent des excélentes fêtes! </p>
          </div>
        </Fade>
        
        <MenuCard menu={MENU_FR} />        
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

export default Home
