import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../assets/hero-image.png'; // Your image path

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
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

          {/* Image Column */}
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

      {/* Style */}
      <style jsx>{`
        .hero-section {
          padding: 100px 0;
          background: linear-gradient(145deg, #0a192f 0%, #020c1b 100%);
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(45deg, #00cf5d, #00b4d8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-image-wrapper {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .hero-image {
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px rgba(0, 207, 93, 0.25);
          transform: rotate(3deg);
          transition: transform 0.3s ease;
        }

        .hero-image:hover {
          transform: rotate(0deg);
        }

        .tech-stack {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .tech-stack span {
          background: rgba(255,255,255,0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          backdrop-filter: blur(5px);
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-image {
            max-width: 400px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;