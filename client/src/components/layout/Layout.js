import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../App.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ height: "80vh", backgroundColor: "black" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
