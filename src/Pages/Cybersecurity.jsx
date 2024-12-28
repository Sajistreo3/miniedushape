import React from 'react';
import '../App.css'; // Ensure your CSS file has styles for the page.
import pic1 from '../Assets/img/1.jpg'
import pic2 from '../Assets/img/2.jpg'
import pic3 from '../Assets/img/3.jpg'

const Cybersecurity = () => {
  return (
    <div className="cybersecurity-page">
      <header className="cybersecurity-header">
        <h1>Cybersecurity Services</h1>
        <p>
          Protect your business from cyber threats with our comprehensive cybersecurity solutions. We specialize in
          safeguarding your digital assets while ensuring regulatory compliance.
        </p>
        <img
          src={pic1} 
          alt="Cybersecurity Banner" 
          className="cybersecurity-banner"
        />
      </header>

      <section className="cybersecurity-intro">
        <h2>Why Cybersecurity is Critical</h2>
        <p>
          In a rapidly digitizing world, businesses face increasing threats from cyber attacks, data breaches, and
          vulnerabilities. Whether you’re a startup or an enterprise, your digital infrastructure is a prime target for
          malicious actors. Our cybersecurity services aim to provide you with peace of mind, allowing you to focus on
          growing your business while we ensure its safety.
        </p>
      </section>

      <section className="cybersecurity-services">
        <h2>Our Cybersecurity Services</h2>
        <div className="cybersecurity-service-list">
          <div className="service">
            <h3>Penetration Testing</h3>
            <p>
              Simulate real-world attacks to identify vulnerabilities in your systems and applications before hackers
              can exploit them.
            </p>
          </div>
          <div className="service">
            <h3>Network Security</h3>
            <p>
              Protect your network infrastructure with firewalls, intrusion detection systems, and 24/7 monitoring to
              ensure data integrity.
            </p>
          </div>
          <div className="service">
            <h3>Incident Response</h3>
            <p>
              Minimize damage from cyber incidents with a rapid-response team ready to detect, analyze, and mitigate
              threats.
            </p>
          </div>
          <div className="service">
            <h3>Security Awareness Training</h3>
            <p>
              Empower your employees with the knowledge to recognize and respond to phishing attempts, ransomware, and
              other attacks.
            </p>
          </div>
        </div>
        <img
          src={pic2}
          alt="Cybersecurity Services Overview" 
          className="cybersecurity-image"
        />
      </section>

      <section className="cybersecurity-benefits">
        <h2>Benefits of Our Cybersecurity Services</h2>
        <ul>
          <li>Comprehensive protection against evolving cyber threats</li>
          <li>Enhanced trust and credibility with your customers</li>
          <li>Regulatory compliance with standards like GDPR, HIPAA, and PCI DSS</li>
          <li>Reduced downtime and operational disruption</li>
          <li>Proactive risk management and mitigation strategies</li>
        </ul>
      </section>

      <section className="cybersecurity-tools">
        <h2>State-of-the-Art Tools and Technologies</h2>
        <p>
          We utilize industry-leading tools and technologies to deliver top-notch cybersecurity solutions. Our stack
          includes:
        </p>
        <ul>
          <li>SIEM (Security Information and Event Management) platforms</li>
          <li>Next-generation firewalls and intrusion detection systems</li>
          <li>Endpoint protection platforms (EPP) and endpoint detection and response (EDR)</li>
          <li>Cloud security solutions for AWS, Azure, and Google Cloud</li>
          <li>Encryption tools for securing sensitive data</li>
        </ul>
        <img
          src={pic3} 
          alt="Cybersecurity Tools" 
          className="cybersecurity-image"
        />
      </section>

      <section className="cybersecurity-clients">
        <h2>Trusted by Industry Leaders</h2>
        <p>
          We’ve partnered with organizations across industries to strengthen their cybersecurity posture. From
          healthcare and finance to retail and technology, our clients rely on us for unwavering protection.
        </p>
      </section>
    </div>
  );
};

export default Cybersecurity;
