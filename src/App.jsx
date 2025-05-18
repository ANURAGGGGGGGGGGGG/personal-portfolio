import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
          });

          const activeNav = document.querySelector(`.nav-link[href="#${id}"]`);
          if (activeNav) {
            activeNav.classList.add('active');
          }
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px', 
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
