import React from "react";
import Navbar from "../components/elements/Navbar";
import CardMovie from "../components/fragments/CardMovie";
import Footer from "../components/elements/Footer";

const Movie = () => {
  return (
    <main className="bg-gray">
      <Navbar />
      <div className="lg:px-5 md:px-1 flex flex-col justify-center">
        <CardMovie api="movie/popular" category="Popular" />
        <CardMovie api="movie/upcoming" category="Upcoming" />
        <CardMovie api="movie/top_rated" category="Top Rated" />
      </div>
      <Footer />
    </main>
  );
};

export default Movie;
