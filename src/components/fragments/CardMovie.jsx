import React, { useEffect, useState } from "react";
import { Plus, Star } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../redux/slices/watchListSlice";

const CardMovie = ({ category, api }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispactch = useDispatch();
  const cart = useSelector((state) => state.cart.watchListItems);
  // console.log(cart);

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiImage = import.meta.env.VITE_IMAGE_URL;

  const handleAdd = (item) => {
    dispactch(addList(item));
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(`${apiUrl}${api}?api_key=${apiKey}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    getMovies();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center flex-row gap-2 transition-all ease-in-out">
        <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
        <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
        <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="my-5 font-extrabold text-xl lg:text-3xl text-white">
        {category}
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {movies.map((movie, i) => {
          const text = movie.overview;
          const count = 50;
          const description =
            text.slice(0, count) + (text.length > count ? "..." : "");
          const voteAverage = String(movie.vote_average);
          const rates = voteAverage.split("");
          const rate = rates.slice(0, 3);
          return (
            <div
              key={i}
              className="relative w-[120px] md:w-[180px] lg:w-[200px] group hover:scale-105 transition-all ease-in-out rounded-xl"
            >
              <img
                src={`${apiImage}${movie.poster_path}`}
                alt=""
                className="rounded-xl"
              />
              <div className="group-hover:absolute group-hover:inset-0 group-hover:bg-black/50 rounded-lg transition-all ease-in-out"></div>
              <div className="h-full hidden group-hover:block text-white">
                <button
                  onClick={() => handleAdd(movie)}
                  className="top-2 start-2 absolute z-30 "
                >
                  <Plus weight="fill" size={25} className="text-white ">
                    +
                  </Plus>
                </button>
                <div className="absolute bottom-0 w-[120px] lg:w-[200px] p-1 lg:p-3">
                  <h1 className="font-extrabold text-xs lg:text-lg">
                    {movie.title}
                  </h1>
                  <div className="my-2 flex justify-between items-center">
                    <p className="text-xs">{movie.release_date}</p>
                    <div className="text-xs flex items-center gap-1">
                      <Star />
                      {rate}
                    </div>
                  </div>
                  <p className="font-light text-xs">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardMovie;
