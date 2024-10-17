import React from "react";
import "./About.css";  // Optional: Ensure About.css is also correctly placed

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Gift Galore</h1>
        <p className="tagline">Making Gift-Giving Simple and Memorable</p>
      </div>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2024, Gift Galore was born from a simple idea: make
          gift-giving easier and more meaningful. We understand the challenge of
          finding the perfect gift, whether it's for a birthday, anniversary, or
          any special occasion.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Gift Galore, our mission is to simplify the gift-giving process
          while ensuring each gift is thoughtful and personal. We believe that
          every occasion deserves the perfect gift, and finding it shouldn't be
          stressful.
        </p>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Email: support@giftgalore.com</p>
          <p>Phone: +254-791-273-101</p>
          <p>Address: 123 Gift Street, Shopping District, GF 12345</p>
        </div>
      </section>
    </div>
  );
};

export default About;
