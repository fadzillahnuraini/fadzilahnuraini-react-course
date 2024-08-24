import React from "react";
import {
  BookmarkSimple,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalMovie } from "../../redux/slices/watchListSlice";

const Navbar = () => {
  const totalItems = useSelector(selectTotalMovie);
  console.log(totalItems);
  return (
    <nav className="w-full p-3 lg:px-20 lg:py-2 flex justify-between text-white z-50 bg-gray">
      <div className="flex items-center">
        <h1 className=" text-white font-extrabold">Movie List</h1>
        <img src="/logo/1.png" alt="" className="w-[50px]" />
      </div>
      <div className="flex items-center gap-5 lg:gap-10">
        <Link to="/" className="text-sm hover:-mt-1 transition-all ease-in-out">
          Beranda
        </Link>
        <Link
          to="/about"
          className="text-sm hover:-mt-1 transition-all ease-in-out"
        >
          About
        </Link>
        <Link
          to="/movie"
          className="text-sm hover:-mt-1 transition-all ease-in-out"
        >
          Movie
        </Link>
        <Link to="/watchList" className="block lg:hidden relative">
          <button className="">
            <BookmarkSimple weight="fill" size={20} className="text-white" />
          </button>
          <span className="absolute p-2 lg:p-2.5 w-[1px] h-[1px] flex justify-center items-center -bottom-1 lg:-bottom-3 -end-2 bg-white text-primary font-bold rounded-full">
            {totalItems}
          </span>
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-1 lg:gap-3">
        <button className="px-2 py-0.5 rounded-md">
          <GithubLogo size={18} />
        </button>
        <button className="px-2 py-0.5 rounded-md">
          <InstagramLogo size={18} />
        </button>
        <button className="px-2 py-0.5 rounded-md">
          <YoutubeLogo size={18} />
        </button>
        <Link to="/WatchList" className="relative">
          <button className="">
            <BookmarkSimple weight="fill" size={20} className="text-white" />
          </button>
          <span className="absolute p-2 lg:p-2.5 w-[1px] h-[1px] flex justify-center items-center -bottom-1 lg:-bottom-3 -end-2 bg-white text-primary font-bold rounded-full">
            {totalItems}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
