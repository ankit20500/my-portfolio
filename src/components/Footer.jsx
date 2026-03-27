import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-left">
          &copy; 2026 Mr. Ankit Kumar. All rights reserved.
        </div>
        <div className="footer-middle">
          <a href="https://github.com/ankit20500" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-8330a72b2" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:ankitkumar628310@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        <div className="footer-right">
          Created with ♥ and a mind for logic & a heart for design.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
