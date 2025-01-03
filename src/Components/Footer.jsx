// Footer.jsx
import React, { useState } from 'react';
import '../App.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Correct from './MarkingIcons/Correct';
import Incorrect from './MarkingIcons/Incorrect';
import { db } from '../Configs/firebase';
import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

function Footer() {
  const [subcribeClicked, setSubcribeClicked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const getNewsLetterEmails = async () => {
    const emailsRef = collection(db, 'news_letter_emails');
    const q = query(emailsRef, where("status", "==", true));

    try {
      const querySnapshot = await getDocs(q);
      const emails = querySnapshot.docs.map(doc => doc.data());
      console.log(emails);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  }

  const addNewsLetterEmail = async (email) => {
    try {
      const emailsRef = collection(db, 'news_letter_emails');
      await addDoc(emailsRef, {
        email,
        createdAt: serverTimestamp(),
        status: true
      })
      console.log("Email added successfully!");
      setIsSubscribed(true);
    } catch (error) {
      console.error("Error adding email:", error);
      setIsSubscribed(false);
    }
  }
  

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubcribeClicked(true);
    // getNewsLetterEmails();
    await addNewsLetterEmail(emailInput)
    setEmailInput("");
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="newsletter-input"
              onChange={(text) => setEmailInput(text.target.value)}
              value={emailInput}
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
          {isSubscribed && subcribeClicked ? (<Correct />) : ('')}
          {!isSubscribed && subcribeClicked ? (<Incorrect />) : ('')}
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Developed by Tekmadev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
