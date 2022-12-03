import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Adeena.</span>
        <div className="links">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Adeena
        </p>
      </div>
    </footer>
  );
}

export default Footer;