import React from 'react';
import '../App.css';
import { FaGlobe, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
  const aboutPoints = [
    {
      title: 'Global Reach',
      description: 'We provide IT solutions to clients worldwide, ensuring scalability and efficiency in every project.',
      icon: <FaGlobe size={50} color="#f5a623" />,
    },
    {
      title: 'Innovative Solutions',
      description: 'Our team thrives on creativity and innovation to bring cutting-edge solutions to life.',
      icon: <FaLightbulb size={50} color="#f5a623" />,
    },
    {
      title: 'Client-Centric Approach',
      description: 'We build long-term partnerships with our clients through exceptional service and collaboration.',
      icon: <FaUsers size={50} color="#f5a623" />,
    },
  ];

  return (
    <section id='about' className="about">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        At <strong>Your Agency Name</strong>, we are a passionate team of technology experts dedicated to transforming ideas into impactful digital solutions. 
        From startups to enterprises, we provide tailored services to drive growth and innovation.
      </p>
      <div className="about-container">
        {aboutPoints.map((point, index) => (
          <div key={index} className="about-card">
            <div className="about-icon">{point.icon}</div>
            <h3 className="about-point-title">{point.title}</h3>
            <p className="about-point-description">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
