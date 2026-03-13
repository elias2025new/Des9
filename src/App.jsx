import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';

import { translations } from './translations';

function App() {
  const [lang, setLang] = React.useState('en');
  const t = translations[lang];

  return (
    <div className="bg-primary min-h-screen text-secondary selection:bg-accent selection:text-primary overflow-x-hidden w-full">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Menu t={t.services} />
        <Events t={t.events} />
        <Gallery t={t.gallery} />
        <Reservation t={t.reservation} />
        <Location t={t.location} />
      </main>
      <Footer lang={lang} t={t.footer} />
    </div>
  );
}

export default App;
