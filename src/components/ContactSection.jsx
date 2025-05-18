import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-5 bg-light-gray">
      <div className="container">
        <h2 className="section-heading text-center mb-5">Get In Touch</h2>
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h3 className="mb-4">Let's Talk</h3>
            <p>
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                </div>
                <div>
                  <h5 className="mb-0">Address</h5>
                  <p className="mb-0">New Delhi, IN</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <i className="fas fa-envelope fa-2x text-primary"></i>
                </div>
                <div>
                  <h5 className="mb-0">Email</h5>
                  <p className="mb-0">anuragmahanta730@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="me-3">
                  <i className="fas fa-phone fa-2x text-primary"></i>
                </div>
                <div>
                  <h5 className="mb-0">Phone</h5>
                  <p className="mb-0">(123) 456-7890</p>
                </div>
              </div>
            </div>

            <div className="social-icons mt-4">
              <a href="https://www.linkedin.com/in/anurag-mahantaa/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/ANURAGGGGGGGGGGGG?tab=repositories" target="_blank"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form p-4 bg-white rounded shadow-sm">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4 py-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;