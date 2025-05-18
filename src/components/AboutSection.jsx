import React from 'react';
import Img from "../assets/Mine.png";
import CV from "../assets/ANURAG MAHANTA.pdf";

const AboutSection = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0" style={{ paddingTop: '40px' }}>
            <img
              src={Img}
              alt="Anurag Mahanta"
              className="img-fluid profile-img mx-auto d-block"
              style={{
                borderRadius: '50%',
                width: '320px',
                height: '320px',
                objectFit: 'cover',
                objectPosition: 'center top',
                marginTop: '-50px'
              }}
            />
          </div>
          <div className="col-lg-7">
            <h2 className="section-heading">About Me</h2>
            <p className="lead">Full-Stack Developer with a Passion for Building Scalable Web Applications</p>
            <p>
              I'm an aspiring full-stack developer currently interning at Synthra Labs, where I'm gaining hands-on experience in developing modern web applications. 
              I work with technologies including HTML, CSS, JavaScript, React, Vite, Node.js, Express, and MongoDB.
            </p>
            <p>
              With a strong foundation in both front-end and back-end development, my goal is to create fast, responsive, and user-friendly applications. 
              I'm passionate about learning and continuously improving my skills to build intuitive, efficient, and impactful digital experiences.
            </p>
            <div className="row mt-4">
              <div className="col-md-6">
                <p><strong>Name:</strong> Anurag Mahanta</p>
                <p><strong>Email:</strong> anuragmahanta730@gmail.com</p>
              </div>
              <div className="col-md-6">
                <p><strong>Location:</strong> New Delhi, IN</p>
                <p><strong>Available for:</strong> Freelance & Full-time</p>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href={CV} 
                download="Anurag_Mahanta_FullStack_Developer_CV.pdf"
                className="btn btn-primary me-2"
              >
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline-dark">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;