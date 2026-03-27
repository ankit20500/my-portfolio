import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* LEFT SIDE: Large Profile Image */}
      <motion.div
        className="hero-image-wrapper"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <div className="image-frame">
          <img
            src="https://image2url.com/images/1758658488524-9e507641-5109-486d-809d-be3d3a773a54.jpg"
            alt="Ankit Kumar"
            className="large-profile-img"
          />
        </div>
      </motion.div>

      {/* RIGHT SIDE: Text Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-badge glass-panel"
        >
          <span className="pulse-dot"></span> Software Engineer Intern | Talentelgia Technology Pvt. Ltd.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-title"
        >
          Hi, I'm <span className="gradient-text">Ankit Kumar</span><br />
          Full Stack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-subtitle"
        >
          Passionate Computer Science undergraduate with strong expertise in C++, Data Structures & Algorithms, and modern Full Stack Development (.Net Core). Enthusiastic about automation, AI integration, and scalable system architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-cta"
        >
          <Link to="/projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </Link>
          <a href="/resume.pdf" download="Ankit_Kumar_Resume.pdf" className="btn btn-secondary">
            Resume <Download size={18} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
