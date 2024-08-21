import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
     <div className="about-us">
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
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
