import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="hero-content">
              <h4 className="text-primary mb-3">Hi, I'm Anurag Mahanta</h4>
              <h1 className="hero-title mb-4">
                <span className="gradient-text">Full-Stack Developer</span>
                <br />
                <TypeAnimation
                  sequence={[
                    'React Specialist',
                    2000,
                    'Node.js Developer',
                    2000,
                    'MongoDB Explorer',
                    2000,
                    'Full-Stack Learner',
                    2000,
                    'JavaScript Enthusiast',
                    2000,
                    'Backend Builder',
                    2000,
                    'API Integrator',
                    2000,
                    'Express.js Coder',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="lead mb-5">
                Currently interning @ Synthra Labs | Building scalable web solutions with modern technologies
              </p>
              <div className="d-flex gap-3 mb-4">
                <a href="#contact" className="btn btn-primary btn-lg px-4 py-3">
                  Get In Touch
                </a>
                <a href="#projects" className="btn btn-outline-light btn-lg px-4 py-3">
                  View Work
                </a>
              </div>
              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Vite</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-lg-2 order-1 mb-5 mb-lg-0">
            <div className="hero-image-wrapper">
              <img
                src={heroImage}
                alt="Anurag Mahanta"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;