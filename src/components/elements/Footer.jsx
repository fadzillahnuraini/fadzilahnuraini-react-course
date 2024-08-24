import { FilmReel, FilmSlate } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-20 px-5 lg:px-[200px] w-full">
        <div className="w-full p-5 lg:p-10 flex justify-between items-center bg-white rounded-xl">
          <div className="">
            <h1 className="text-black lg:text-xl text-sm font-bold">
              Temukan Film Mu Disini
            </h1>
          </div>
          <Link
            to="/movie"
            className="relative bg-black w-[170px] h-[30px] lg:h-[35px] lg:w-[300px] p-1 font-semibold rounded-md"
          >
            <span
              className={`active:top-0 active:start-0 transition-all absolute flex justify-center items-center -start-1 -top-1 border w-[170px] h-[30px] lg:h-[35px] lg:w-[300px] bg-gray text-white text-xs lg:text-base rounded-md font-semibold`}
            >
              Click Here
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-10 p-5 flex flex-wrap gap-5 lg:gap-10 items-center bg-gray">
        <div className="flex items-center gap-1">
          <img src="/bg/1.png" alt="" className="w-[150px]" />
        </div>
        <div className="grid grid-cols-3 gap-3 lg:gap-5 text-white text-xs lg:textsm">
          <p className="opacity-80 hover:opacity-100">Bantuan</p>
          <p className="opacity-80 hover:opacity-100">Pertanyaan</p>
          <p className="opacity-80 hover:opacity-100">Tentang</p>
          <p className="opacity-80 hover:opacity-100">Comunity</p>
          <p className="opacity-80 hover:opacity-100">support</p>
          <p className="opacity-80 hover:opacity-100">Perjalanan</p>
          <p className="opacity-80 hover:opacity-100">Kebijakan</p>
          <p className="opacity-80 hover:opacity-100">Perusahaan</p>
          <p className="opacity-80 hover:opacity-100">Produk</p>
        </div>
        <p className="text-white opacity-85 text-xs font-light">
          &copy; 2024 Fadzillah Nur Aini. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
