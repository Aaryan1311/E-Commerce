import React from "react";
import Layout from "../components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-us">
        <div className="container">
          <div className="image-section">
            <img
              src={require("./page-assets/robo-image.jpeg")}
              alt="Robot Image"
              width={500}
              height={500}
            />
          </div>

          <div className="text-section">
            <h2>Contact Us</h2>
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
    </Layout>
  );
};

export default Contact;
