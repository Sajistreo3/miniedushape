import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';

const Service = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Learn how to build stunning websites with HTML, CSS, and JavaScript.',
      icon: <FaLaptopCode size={50} color="#f5a623" />,
      link: '/services/web-development',
    },
    {
      title: 'Mobile App Development',
      description: 'Master creating mobile apps for Android and iOS using modern frameworks.',
      icon: <FaMobileAlt size={50} color="#f5a623" />,
      link: '/services/mobile-app-development',
    },
    {
      title: 'Data Science',
      description: 'Explore the world of data analysis and machine learning.',
      icon: <FaDatabase size={50} color="#f5a623" />,
      link: '/services/data-science',
    },
    {
      title: 'Cybersecurity',
      description: 'Understand the fundamentals of securing systems and ethical hacking.',
      icon: <FaShieldAlt size={50} color="#f5a623" />,
      link: '/services/cybersecurity',
    },
  ];

  return (
    <section id="service" className="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <Link to={service.link} className="service-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
