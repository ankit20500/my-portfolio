import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const experience = [
    {
      role: 'Software Engineer Intern',
      company: 'Talentelgia Technology Pvt. Ltd.',
      date: 'Feb 2026 - Present',
      desc: 'Assisted in developing and maintaining web applications using .NET Core. Collaborated with team members to debug issues, optimize performance, and improve overall code quality.'
    },
    {
      role: 'Backend Developer (Training)',
      company: 'College Attendance System',
      date: 'Jan 2025 - Feb 2025',
      desc: 'Engineered secure backend authentication API used by 100+ students, reducing login time by 40%.'
    }
  ];

  const education = [
    { degree: 'B.Tech, Computer Science Engineering', school: 'Chandigarh Group of Colleges, Landran', date: '2022 - 2026', score: 'CGPA: 7.8/10' },
    { degree: 'Intermediate (B.S.E.B)', school: 'B.S.E.B', date: '2020 - 2022', score: '88.00%' },
    { degree: 'Matriculation (C.B.S.E)', school: 'C.B.S.E', date: '2019 - 2020', score: '85.00%' }
  ];

  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="education-container">
        {/* Left Side: Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="timeline-side"
        >
          <div className="section-header align-left">
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          </div>

          <div className="timeline-wrapper">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="timeline-row"
              >
                <div className="timeline-dot"></div>
                <motion.div
                  className="timeline-item glass-panel"
                  whileHover={{ scale: 1.0, x: 10 }}
                >
                  <h3>{exp.role}</h3>
                  <p className="school">{exp.company}</p>
                  <p className="exp-desc">{exp.desc}</p>
                  <div className="edu-meta">
                    <span className="date gradient-text">{exp.date}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="timeline-side"
        >
          <div className="section-header align-left">
            <h2 className="section-title">Formal <span className="gradient-text">Education</span></h2>
          </div>

          <div className="timeline-wrapper">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="timeline-row"
              >
                <div className="timeline-dot right-dot"></div>
                <motion.div
                  className="timeline-item glass-panel"
                  whileHover={{ scale: 1.0, x: -10 }}
                >
                  <h3>{edu.degree}</h3>
                  <p className="school">{edu.school}</p>
                  <div className="edu-meta">
                    <span className="date">{edu.date}</span>
                    <span className="score gradient-text">{edu.score}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
