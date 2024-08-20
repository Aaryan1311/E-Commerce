import React, { useEffect } from "react";
// import Layout from "../components/layout/Layout";

const PagenotFound = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const torch = document.querySelector(".torch");
      if (torch) {
        torch.style.top = `${event.pageY}px`;
        torch.style.left = `${event.pageX}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    // <Layout>
    <div className="page-not-found">
      <div className="text">
        <h1>404</h1>
        <h2>Uh, Ohh</h2>
        <h3>
          Sorry we can't find what you are looking for 'cuz it's so dark in here
        </h3>
      </div>

      <div className="torch"></div>
    </div>
    // </Layout>
  );
};

export default PagenotFound;
