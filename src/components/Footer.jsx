import React from 'react';

const Footer = ({ lang }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-playfair gold-gradient-text mb-6">
          {lang === 'am' ? 'ደሥ ፱' : 'DES9'}
        </h3>
        <p className="text-secondary/50 text-sm">© {new Date().getFullYear()} {lang === 'am' ? 'ደሥ ፱' : 'DES9'} Restaurant & Lounge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
