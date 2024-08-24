import React from "react";
import Navbar from "../components/elements/Navbar";
import Carousel from "../components/fragments/Carousel";
import BerandaLayouts from "../components/layouts/BerandaLayouts";
import CardMovie from "../components/fragments/CardMovie";

const Beranda = () => {
  return (
    <BerandaLayouts>
      <div className="text-white">
        <Carousel />
      </div>

      <div className="flex justify-center">
        <CardMovie api="movie/upcoming" category="Upcoming" />
      </div>
    </BerandaLayouts>
  );
};

export default Beranda;
