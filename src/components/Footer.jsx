import React from 'react';
import { FaTelegramPlane, FaTiktok, FaFacebookF } from 'react-icons/fa';

const Footer = ({ lang, t }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 text-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
          <h3 className="text-3xl font-playfair gold-gradient-text">
            {lang === 'am' ? 'ደሥ ፱' : 'DES9'}
          </h3>
          <div className="flex items-center gap-6 text-xl">
            <a 
              href="https://t.me/sildes9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-secondary/60 hover:text-accent transition-all transform hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
            <a 
              href="https://tiktok.com/@des9restaurantandlounge" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-secondary/60 hover:text-accent transition-all transform hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a 
              href="https://www.facebook.com/share/18UTCkH585/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-secondary/60 hover:text-accent transition-all transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
        <p className="text-secondary/70 italic mb-8 max-w-2xl mx-auto leading-relaxed">{t.about}</p>
        <p className="text-secondary/50 text-sm">© {new Date().getFullYear()} {lang === 'am' ? 'ደሥ ፱' : 'DES9'} Restaurant & Lounge. {t.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
