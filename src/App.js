import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaRocket,
  FaLaptopCode,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaDatabase,
  FaCloud,
  FaMicrosoft
} from "react-icons/fa";

import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SAASImage from "./assets/SAASDashImg.png";
import ECommImage from "./assets/E-CommImg.webp";
import PortfolioImg from "./assets/PortfolioImg.png";
import TourImage from "./assets/Tours&TravelsImage.jpg";
import founderImage from "./assets/MyOldImg.jpg";
import LogoImg from "./assets/minetree-logo.png";

/* ANIMATION */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

/* SERVICES */
const SERVICES = [
  { title: "Ecommerce Development", icon: <FaCode />, desc: "Scalable eCommerce solutions with payment gateways and modern UI." },
  { title: "Mobile App Development", icon: <FaLaptopCode />, desc: "High performance mobile apps designed for Android and cross-platform." },
  { title: "Software Development", icon: <FaServer />, desc: "Custom enterprise software solutions tailored to business needs." },
  { title: "Web Development", icon: <FaRocket />, desc: "Fast and scalable web applications using modern frameworks." },
  { title: "Web Design", icon: <FaLaptopCode />, desc: "Beautiful UI/UX design focused on performance and conversion." },
  { title: "Web API Development", icon: <FaServer />, desc: "Secure RESTful APIs and backend services for scalable applications." },
  { title: "SaaS Dashboard", icon: <FaServer />, desc: "Modern SaaS dashboards with analytics and scalable architecture." }
];

/* TECH STACK */
const TECHSTACK = [
  { name: ".NET Core", icon: <FaMicrosoft /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "AWS", icon: <FaCloud /> },
  { name: "Azure", icon: <FaMicrosoft /> }
];

/* PROJECTS */
const PROJECTS = [
  { title: "Ecommerce Platform", img: ECommImage, description: "Online store with payment integration and admin panel." },
  { title: "SaaS Dashboard", img: SAASImage, description: "Analytics dashboard with real-time data visualization." },
  { title: "Portfolio Website", img: PortfolioImg, description: "Creative personal branding website." },
  { title: "Tours & Travels Web App", img: TourImage, description: "Travel booking platform with admin and customer dashboard." }
];

/* REVIEWS */
const REVIEWS = [
  { name: "Vishal Vaghela", text: "Khodiyar Global Holidays project on time delivered with amazing quality and its Live now, Minetree team's good job.", rating: 5 },
  { name: "Rahul Patel", text: "Minetree delivered our project on time with amazing quality.", rating: 5 },
  { name: "Sneha Shah", text: "Professional team and scalable solution for our SaaS product.", rating: 5 },
  { name: "Amit Desai", text: "Very smooth development process and great communication.", rating: 4 }
];

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    try {
      await emailjs.sendForm("service_fwth7hw", "template_sgdoear", form, "W4thdxDYyKbV-s_lZ");
      toast.success("Inquiry sent successfully!");
      form.reset();
    } catch {
      toast.error("Submission failed.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="App">
      <ToastContainer position="top-center" />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
			<div className="nav-brand">
			  <img src={LogoImg} alt="Minetree Logo" className="nav-logo" />
			  <span>Minetree.</span>
			</div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#tech">Tech Stack</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">Hire Us</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span className="hero-tag" variants={fadeUp}>Modern Software Development</motion.span>
          <motion.h1 variants={fadeUp}>Build Powerful <br /><span>Digital Products</span></motion.h1>
          <motion.p variants={fadeUp}>We help startups and businesses build scalable web apps, SaaS platforms and enterprise software solutions.</motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <button className="btn-primary">Start Project <FaArrowRight /></button>
            <button className="btn-secondary">Hire Developers</button>
          </motion.div>
        </motion.div>
      </header>

      {/* SERVICES */}
      <section id="services" className="section container">
        <div className="section-header"><h2>Our IT Services</h2></div>
        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <motion.div key={i} className="service-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="section bg-light">
        <div className="container">
          <div className="section-header"><h2>Technology Stack</h2></div>
          <div className="tech-grid">
            {TECHSTACK.map((t, i) => (
              <motion.div key={i} className="tech-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}>
                <div className="tech-icon">{t.icon}</div>
                <h4>{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container about-container">
          <motion.div className="about-image" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}>
            <img src={founderImage} alt="Founder" />
          </motion.div>
          <motion.div className="about-content" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}>
            <span className="about-tag">About Minetree</span>
            <h2>Led by Jaynit Nagar</h2>
            <p>Minetree Technologies helps startups and companies build scalable digital products using modern technologies.</p>
            <p>Our focus is delivering high performance applications, cloud-ready infrastructure and exceptional user experience.</p>
            <div className="founder-box">
              <h3>Jaynit Nagar</h3>
              <span>Founder & CEO</span>
              <p>Passionate software engineer focused on building modern SaaS platforms, scalable web applications and innovative digital products.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section container">
        <div className="section-header"><h2>Featured Work</h2></div>
        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <motion.div key={i} className="work-card" whileHover={{ y: -8 }}>
              <img src={p.img} alt="" />
              <div className="work-info"><h3>{p.title}</h3><p>{p.description}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section bg-dark">
        <div className="container">
          <div className="review-grid">
            {REVIEWS.map((r, i) => (
              <div key={i} className="review-card">
                <FaQuoteLeft />
                <p>{r.text}</p>
                <strong>{r.name}</strong>
                <div className="stars">{[...Array(r.rating)].map((_, i) => (<FaStar key={i} />))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section container">
        <div className="contact-box">
          <div className="contact-text">
            <h2>Let's Build Your Project</h2>
            <p>Tell us about your idea.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Full Name" required />
            <input name="email" type="email" placeholder="Email Address" required />
            <input name="phone" type="tel" placeholder="Phone Number" required />
            <select name="service" required>
              <option value="">Select Service</option>
              {SERVICES.map((s, i) => (<option key={i}>{s.title}</option>))}
            </select>
            <textarea name="message" placeholder="Tell us about your project..." rows="4"></textarea>
            <button type="submit">{isSubmitting ? "Sending..." : "Send Inquiry"}</button>
          </form>
        </div>
      </section>

      <footer className="footer">© 2026 Minetree Technologies</footer>
    </div>
  );
}

export default App;