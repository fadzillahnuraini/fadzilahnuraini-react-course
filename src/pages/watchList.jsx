import React, { useEffect, useState } from "react";
import Navbar from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import { useSelector } from "react-redux";
import { selectMovie } from "../redux/slices/watchListSlice";
import { Star } from "@phosphor-icons/react";

const apiImage = import.meta.env.VITE_IMAGE_URL;

const WatchList = () => {
  const MovieList = useSelector(selectMovie);
  return (
    <div className="bg-gray">
      <Navbar />
      <div className="min-h-[400px] flex flex-col items-center text-white ">
        <div className="lg:w-[80%] p-3 lg:p-6 flex flex-col gap-5">
          {MovieList && MovieList.length > 0 ? (
            MovieList.map((item) => {
              const text = item.overview;
              const count = 70;
              const description =
                text.slice(0, count) + (text.length > count ? "..." : "");

              const voteAverage = String(item.vote_average);
              const rates = voteAverage.split("");
              const rate = rates.slice(0, 3);

              return (
                <div
                  key={item.id}
                  className="flex border shadow-md shadow-white rounded-xl"
                >
                  <div>
                    <img
                      src={`${apiImage}${item.poster_path}`}
                      alt={item.title}
                      className="w-[100px] lg:w-[150px] rounded-l-xl"
                    />
                  </div>
                  <div className="p-2.5 lg:p-5 flex flex-col gap-4">
                    <p className="text-sm lg:text-lg font-bold">{item.title}</p>
                    <p className="text-xs lg:text-sm">{description}</p>
                    <p className="text-xs lg:text-sm">{item.release_date}</p>
                    <div className="flex items-center gap-2 text-xs lg:text-sm">
                      <Star weight="fill" color="#ffdb01" />
                      {rate}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col justify-center items-center gap-10">
              <img
                src="/logo/snack.png"
                alt=""
                className="w-[230px] lg:w-[300px] h-[230px] lg:h-[300px]"
              />
              <p>Hemm Watch List Kamu Masih Kosong Nih</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WatchList;
