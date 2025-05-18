import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Anurag mahanta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;