import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Bản quyền thuộc về Team King Panther.</p>
    </footer>
  );
};

// CSS in JS
const footerStyle = {
  padding: '10px',
  backgroundColor: '#08326B',
  color: 'white',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
