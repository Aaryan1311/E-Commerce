import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 col-8 ft-1 mb-4">
            <h3>
              <span>Aaryan </span>Tripathi
            </h3>

            <p>
              Copyright &copy; 2002 - 2024 AaryanTripathi. All rights reserved.
            </p>
            <div className="footer-icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className="quick-links col-md-6 col-lg-3 col-8 ft-2">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contacts</Link>
              </li>
              <li>
                <Link to={"/Policies"}>Privacy and Policies</Link>
              </li>
              <li>
                <Link to={"/"}>HomePage</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 col-8 ft-3">
            <h5>Quick Links</h5>
            <p>
              <i class="fa-solid fa-phone-volume"></i> +91 1234567890
            </p>

            <p>
              <i class="fa-solid fa-envelope"></i> email@gmail.com
            </p>

            <p>
              <i class="fa-solid fa-location-dot"></i> Earth, Near Venus, Solar
              System, Universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
