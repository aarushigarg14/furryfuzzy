import React from 'react';
import './CSS/TermsAndConditions.css'; 

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      <h1>Terms and Conditions</h1>
      <p>Welcome to Furry and Fuzzy Whiskers! These terms and conditions outline the rules and regulations for the use of our website and services.</p>
      <h2>1. Introduction</h2>
      <p>By accessing our website, you agree to be bound by these terms and conditions. Please read them carefully.</p>

      <h2>2. Use of Website</h2>
      <p>You may use the website for personal and non-commercial purposes. Any unauthorized use is prohibited.</p>

      <h2>3. Privacy Policy</h2>
      <p>We respect your privacy. Our <a href="/privacy-policy">privacy policy</a> explains how we collect and use your data.</p>

      <h2>4. Changes to Terms</h2>
      <p>We may update these terms from time to time. Please check this page for the latest version.</p>

      <h2>5. Contact Us</h2>
      <p>If you have any questions regarding these terms, please contact us at support@furryfuzzywhiskers.com</p>
    </div>
  );
}

export default TermsAndConditions;
