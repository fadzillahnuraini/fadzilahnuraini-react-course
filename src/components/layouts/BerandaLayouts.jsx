import React from "react";
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";

const BerandaLayouts = ({ children }) => {
  return (
    <main className="bg-gray">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default BerandaLayouts;
