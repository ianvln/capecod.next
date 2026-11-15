import type { NextPage } from 'next'
import Image from 'next/image'
import { CONTACT } from '../api/contact'
import { OPENING_HOURS } from '../api/openinghours'
import heroImage from '../assets/background.jpg'
import logo from '../assets/capecod-white.svg'
import OpeningHours from '../components/contact/OpeningHours'
import OpenStatus from '../components/contact/OpenStatus'
import Reveal from '../components/general/reveal/Reveal'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import MenuCard from '../components/menu/MenuCard'
import Offer from '../components/offer/Offer'
import StructuredData from '../components/seo/StructuredData'
import { useTranslation } from '../i18n/useTranslation'
import { MENUS, SHOW_MENU } from '../types/Menu'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const { t, locale } = useTranslation()

  return (
    <>
      <StructuredData />
      <Header />

      <main id="main">
        <section id="welcome" className={styles.hero}>
          <Image src={heroImage} alt="" fill priority placeholder="blur" sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroOverlay} aria-hidden />

          <div className={styles.heroContent}>
            <Image src={logo} alt={t.alt.logo} width={132} height={110} className={styles.heroLogo} priority />
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className={styles.heroTitle}>Cape Cod</h1>
            <p className={styles.heroWelcome}>{t.hero.welcome}</p>
            <p className={styles.heroTagline}>{t.hero.tagline}</p>
            <OpenStatus openingHours={OPENING_HOURS} />
            <div className={styles.actions}>
              <a href="#openinghours" className="button button-primary">{t.hero.ctaHours}</a>
              <a href={CONTACT.phoneHref} className="button button-ghost">{t.hero.ctaCall} · {CONTACT.phone}</a>
            </div>
          </div>

          <a href="#about" className={styles.scrollCue} aria-hidden tabIndex={-1}><span /></a>
        </section>

        <section id="about" className={styles.about} aria-labelledby="about-title">
          <Reveal className={styles.aboutInner}>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 id="about-title" className={styles.aboutTitle}>{t.about.title}</h2>
            <p className={styles.aboutText}>{t.about.text}</p>
          </Reveal>
        </section>

        <section id="offer" className={styles.section}>
          <div className={styles.container}>
            <Offer />
          </div>
        </section>

        {SHOW_MENU && (
          <section id="menu" className={`${styles.section} ${styles.menuSection}`} aria-labelledby="menu-title">
            <div className={styles.container}>
              <Reveal className={styles.sectionHeader}>
                <p className="eyebrow">{t.offer.eyebrow}</p>
                <h2 id="menu-title" className={styles.sectionTitle}>{t.nav.menu}</h2>
              </Reveal>
              <MenuCard menu={MENUS[locale]} />
            </div>
          </section>
        )}

        <section id="openinghours" className={`${styles.section} ${styles.hoursSection}`} aria-labelledby="hours-title">
          <div className={`${styles.container} ${styles.split}`}>
            <Reveal>
              <p className="eyebrow">{t.openingHours.eyebrow}</p>
              <h2 id="hours-title" className={styles.sectionTitle}>{t.openingHours.title}</h2>
              <OpenStatus openingHours={OPENING_HOURS} className={styles.hoursStatus} />
            </Reveal>
            <Reveal className={styles.hoursCard} delay={120}>
              <OpeningHours openingHours={OPENING_HOURS} />
            </Reveal>
          </div>
        </section>

        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <div className={`${styles.container} ${styles.split}`}>
            <Reveal>
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 id="contact-title" className={styles.sectionTitle}>{t.contact.title}</h2>
              <address className={styles.address}>
                {CONTACT.name}<br />
                {CONTACT.street}<br />
                {CONTACT.postalCode} {CONTACT.city}
              </address>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className={`button ${styles.directions}`}>
                {t.contact.directions} ↗
              </a>
            </Reveal>

            <Reveal delay={120}>
              <dl className={styles.details}>
                <div>
                  <dt>{t.contact.phone}</dt>
                  <dd><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></dd>
                </div>
                <div>
                  <dt>{t.contact.email}</dt>
                  <dd><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd>
                </div>
                <div>
                  <dt>{t.contact.companyNumber}</dt>
                  <dd>{CONTACT.companyNumber}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
