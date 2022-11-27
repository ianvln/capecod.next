import type { NextPage } from 'next'
import { CSSProperties, useRef } from 'react'
import Image from 'next/image'
import backgroundImage from '../assets/background.jpg'
import appetizersImage from '../assets/appetizers.jpg'
import dishImage from '../assets/dish.jpg'
import logo from '../assets/capecod-white.svg'
import NavigationBar from '../components/general/nav/NavigationBar'
import { useSpring, animated } from 'react-spring'
import { MENU } from '../types/Menu'
import MenuCard from '../components/menu/MenuCard'
import FadeSlideIn from '../components/general/animation/FadeSlideIn'

const Home: NextPage = () => {
  const welcomeLogoAnimation = useSpring({ 
    delay: 500,
    to: { opacity: 1 }, 
    from: { opacity: 0 } 
  });

  const headerAnimation = useSpring({
    delay: 750,
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 }
  });

  const subHeaderAnimation = useSpring({
    delay: 1000,
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 }
  });

  const teaser1Ref = useRef<HTMLDivElement>(null);
  const teaser2Ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <section style={welcomeBackground}>
        <NavigationBar />
        
        <div style={welcome}>
            <animated.div style={welcomeLogoAnimation}>
              <Image style={welcomeLogo} src={logo} width={250} height={250} />
            </animated.div> 
            <animated.div style={headerAnimation}>
              <h1 style={header}> Cape Cod </h1>
            </animated.div>
            <animated.div style={subHeaderAnimation}>
              <div style={subHeader}> Welkom </div>
            </animated.div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h1 style={sectionTitleStyle}> Suggesties </h1>
        <MenuCard menu={MENU} />        
      </section>

      <section style={sectionStyle}>
        <div style={{ display: 'flex' }} ref={teaser1Ref}>
          <div style={{ flex: '1 0 50%' }}>
            <FadeSlideIn parentRef={teaser1Ref}>
              <Image src={appetizersImage} layout="responsive" />
            </FadeSlideIn>
          </div>
          <div style={{ flex: '1 0 50%', display: 'flex', alignItems: 'center', padding: 50}}>
            <FadeSlideIn parentRef={teaser1Ref} offsetDelayIndex={2}>
              <p style={{ fontSize: '1.75rem', fontWeight: 450, color: '#c59d5f', lineHeight: '2.4rem', letterSpacing: '0.2rem', fontStyle: 'italic' }}> 
                Tongstrelende gerechten als kreeftschotels, oester- en visbereidingen, salades en pasta’s, geflankeerd door exclusieve wijnen, kazen en fijne vleeswaren
              </p>
            </FadeSlideIn>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 150 }} ref={teaser2Ref}>
          <div style={{ flex: '1 0 50%', display: 'flex', alignItems: 'center', padding: 50 }}>
            <FadeSlideIn parentRef={teaser2Ref} offsetDelayIndex={2}>
            <p style={{ fontSize: '4rem', fontWeight: 600, color: '#fff', fontStyle: 'italic', textAlign: 'center', margin: 0 }}> "" </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 450, color: '#fff', lineHeight: '2.4rem', letterSpacing: '0.2rem', fontStyle: 'italic' }}>
                Traiteur Cape Cod is al bijna 25 jaar een referentie In Nieuwpoort. 
                De zaak staat voornamelijk garant voor goed verzorgde afhaalkeuken, met oog voor detail en smaak. 
                Maar het assortiment gaat enorm breed, van klassiekers met een moderne twist tot kaas en charcuterie en allerhande delicatessen.
              </p>
            </FadeSlideIn>
          </div>
          <div style={{ flex: '1 0 50%' }}>
            <FadeSlideIn parentRef={teaser2Ref}>
              <Image src={dishImage} layout="responsive" />
            </FadeSlideIn>
          </div>
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

export default Home
