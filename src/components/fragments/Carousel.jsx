import { Star } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

// const images = [
//   "https://via.placeholder.com/1200x400?text=Slide+1",
//   "https://via.placeholder.com/1200x400?text=Slide+2",
//   "https://via.placeholder.com/1200x400?text=Slide+3",
// ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  const apiImage = import.meta.env.VITE_IMAGE_URL;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=8472584f4a7187f3d53faafab0d89c1a"
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="relative">
      <div className="h-full overflow-hidden ">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((image, index) => {
            const text = image.overview;
            const count = 50;

            const description =
              text.slice(0, count) + (text.length > count ? "..." : "");
            const voteAverage = String(image.vote_average);
            const rates = voteAverage.split("");
            const rate = rates.slice(0, 3);
            return (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={`${apiImage}${image.poster_path}`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[200px] lg:h-[500px] object-cover"
                />
                <div className="absolute bottom-10 lg:bottom-20 w-[500px] lg:w-[700px] px-5 lg:px-10 z-40">
                  <h1 className="text-white lg:text-4xl font-extrabold">
                    {image.title}
                  </h1>
                  <div className="my-2 lg:my-5 flex items-center text-white font-semibold lg:text-xl">
                    <p className="mr-10">{image.release_date}</p>
                    <div className=" flex items-center gap-1">
                      <Star />
                      {rate}
                    </div>
                  </div>
                  <p className="text-xs">{description} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 space-x-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5  rounded-full ${
              index === currentIndex ? "bg-white" : "border border-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
