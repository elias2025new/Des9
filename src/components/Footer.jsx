import React from 'react';

const Footer = ({ lang, t }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-playfair gold-gradient-text mb-4">
          {lang === 'am' ? 'ደሥ ፱' : 'DES9'}
        </h3>
        <p className="text-secondary/70 italic mb-8 max-w-lg mx-auto">{t.about}</p>
        <p className="text-secondary/50 text-sm">© {new Date().getFullYear()} {lang === 'am' ? 'ደሥ ፱' : 'DES9'} Restaurant & Lounge. {t.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
