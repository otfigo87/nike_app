import React from 'react'

const Footer = () => {
  return (
    <footer style={{display: "flex", justifyContent: "space-between"}}>
      <section>
        <h3>Social Media</h3>
        <a href="#">Facebook</a>
        <br />
        <a href="#">Instagram</a> 
      </section>

      <section>
        <h5>Services and terms</h5>
      </section>

      <section>
        <h5>Contact Us</h5>
      </section>
    </footer>
  );
}

export default Footer