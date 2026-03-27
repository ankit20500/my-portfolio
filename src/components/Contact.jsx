import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (formState.name.includes('  ')) {
      newErrors.name = 'Only single spaces are allowed.';
      isValid = false;
    } else {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (formState.name.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters long.';
        isValid = false;
      } else if (!nameRegex.test(formState.name)) {
        newErrors.name = 'Name can only contain letters and spaces.';
        isValid = false;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formState.email.includes('  ')) {
      newErrors.email = 'Only single spaces are allowed.';
      isValid = false;
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (formState.message.includes('  ')) {
      newErrors.message = 'Only single spaces are allowed.';
      isValid = false;
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // 1. Send the email containing user's details to YOU (noty11496@gmail.com)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER,
        {
          from_name: formState.name,
          to_name: "Ankit Kumar",
          from_email: formState.email,
          to_email: "noty11496@gmail.com",
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Send the automated "Thank You" reply email back to the USER
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to send email. Double check your .env variables and EmailJS template settings.", error);
      setIsSubmitting(false);
      alert("Uh oh! Failed to send message. Please ensure the EmailJS environment variables are configured in the .env file.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value
    });

    if (value.includes('  ')) {
      setErrors(prev => ({ ...prev, [name]: 'Only single spaces are allowed.' }));
      return;
    }

    if (name === 'name') {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value) && value.length > 0) {
        setErrors(prev => ({ ...prev, [name]: 'Name can only contain letters and spaces.' }));
      } else {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    } else if (errors[name]) {
      // Clear the error message once user begins typing again for other fields
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (value.includes('  ')) {
      error = 'Only single spaces are allowed.';
    } else {
      if (name === 'name') {
        const nameRegex = /^[a-zA-Z\s]*$/;
        if (value.trim().length === 0) {
          error = 'Name is required.';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters long.';
        } else if (!nameRegex.test(value)) {
          error = 'Name can only contain letters and spaces.';
        }
      } else if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim().length === 0) {
          error = 'Email is required.';
        } else if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address.';
        }
      } else if (name === 'message' && value.trim().length < 10) {
        error = value.trim().length === 0 ? 'Message is required.' : 'Message must be at least 10 characters long.';
      }
    }

    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const contactVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">Looking for a passionate backend or full-stack developer? I'm open to opportunities!</p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="contact-info glass-panel"
        >
          <h3>Let's build something scalable.</h3>
          <p className="contact-desc">
            With over 500+ DSA problems solved and strong expertise in Node.js, React, and databases, I'm ready to tackle complex challenges and build impactful systems.
          </p>

          <div className="info-items">
            <motion.a href="mailto:ankitkumar628310@gmail.com" variants={itemVariants} className="info-item" whileHover={{ scale: 1.02, x: 5 }}>
              <div className="info-icon"><Mail size={20} /></div>
              <div className="info-content">
                <h4>Email</h4>
                <p>ankitkumar628310@gmail.com</p>
              </div>
            </motion.a>

            <motion.a href="tel:+918676876343" variants={itemVariants} className="info-item" whileHover={{ scale: 1.02, x: 5 }}>
              <div className="info-icon"><Phone size={20} /></div>
              <div className="info-content">
                <h4>Phone</h4>
                <p>+91-8676876343</p>
              </div>
            </motion.a>

            <motion.div variants={itemVariants} className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Darbhanga, Bihar, India (846009)</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="social-links-contact">
            <a href="https://linkedin.com/in/ankit-kumar" target="_blank" rel="noreferrer" className="social-btn glass-panel"><Linkedin size={22} /></a>
            <a href="https://github.com/ankit20500" target="_blank" rel="noreferrer" className="social-btn glass-panel"><Github size={22} /></a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-form-wrapper glass-panel"
        >
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="John Doe"
                className={errors.name ? 'input-error' : ''}
                required
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="john@example.com"
                className={errors.email ? 'input-error' : ''}
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formState.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Hi Ankit, I have an opportunity..."
                className={errors.message ? 'input-error' : ''}
                required
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`submit-btn ${isSubmitted ? 'success' : ''}`}
              disabled={isSubmitting}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Sending...</motion.span>
                ) : isSubmitted ? (
                  <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Message Sent!</motion.span>
                ) : (
                  <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>Send Message <Send size={18} /></motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
