import React from "react";
import Navbar from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-gray">
      <Navbar />
      <div className="px-4 lg:px-24 text-white">
        <h1 className="text-xl lg:text-2xl font-extrabold">Tentang Kami</h1>
        <p className="text-xs">Telusuri film yang kamu suka disini</p>
        <div className="mt-10 flex flex-wrap justify-center gap-10 ">
          <div className="w-[250px] h-[150px]  lg:w-[350px] lg:h-[250px] px-3 py-1 lg:p-5 flex flex-col items-start text-white border border-white rounded-lg">
            <h1 className="text-sm lg:text-base mb-2 font-semibold">
              Apa itu Movie List?
            </h1>
            <p className="text-xs lg:text-sm mb-2 lg:mb-16">
              Movie List Adalah Platform penyimpanan film yang akan kamu tonton,
              jadi kamu bisa sesuka hati menyimpan film yang akan kamu tonton
            </p>
            <Link to="/movie">
              <button
                type="button"
                class="bg-white text-center w-[170px] lg:w-[192px] rounded-2xl h-[35px] lg:h-12 relative font-sans text-black lg:text-base text-xs font-semibold group"
              >
                <div class="bg-[#86dc3d] rounded-xl h-[27px] lg:h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:lg:w-[184px] group-hover:w-[160px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="w-[15px] lg:w-[32px]"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </div>
                <p class="translate-x-2">Lihat Movie</p>
              </button>
            </Link>
          </div>
          <div className="w-[250px] h-[150px] lg:w-[350px] lg:h-[250px] px-3 py-1 lg:p-5 text-white border border-white rounded-lg">
            <h1 className="text-sm lg:text-base mb-2 font-semibold">
              Mengapa Movie List?
            </h1>
            <p className="text-xs lg:text-sm mb-2 lg:mb-16">
              kami adalah platform movie list yang up to date, kami menyesuaikan
              film berdasarkan tanggal realese
            </p>
            <Link to="/movie">
              <button
                type="button"
                class="bg-white text-center w-[170px] lg:w-[192px] rounded-2xl h-[35px] lg:h-12 relative font-sans text-black lg:text-base text-xs font-semibold group"
              >
                <div class="bg-[#86dc3d] rounded-xl h-[27px] lg:h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:lg:w-[184px] group-hover:w-[160px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="w-[15px] lg:w-[32px]"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </div>
                <p class="translate-x-2">Lihat Movie</p>
              </button>
            </Link>
          </div>
          <div className="w-[250px] h-[150px] lg:w-[350px] lg:h-[250px] px-3 py-1 lg:p-5 text-white border border-white rounded-lg">
            <h1 className="text-sm lg:text-base mb-2 font-semibold">
              Keunggulan Movie List?
            </h1>
            <p className="text-xs lg:text-sm mb-2 lg:mb-16">
              Movie List dapat diakses dari berbagai perangkat yang terhubung ke
              internet tanpa perlu menginstal aplikasi tambahan
            </p>
            <Link to="/movie">
              <button
                type="button"
                class="bg-white text-center w-[170px] lg:w-[192px] rounded-2xl h-[35px] lg:h-12 relative font-sans text-black lg:text-base text-xs font-semibold group"
              >
                <div class="bg-[#86dc3d] rounded-xl h-[27px] lg:h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:lg:w-[184px] group-hover:w-[160px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="w-[15px] lg:w-[32px]"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </div>
                <p class="translate-x-2">Lihat Movie</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-40">
          <h1 className="font-bold text-center mb-5">Cinemas Partner :</h1>
          <div className=" flex flex-wrap justify-center items-center gap-5">
            <div className=" w-[100px] lg:w-[150px] h-[50px] lg:h-[80px] flex items-center p-2 bg-white shadow-xl shadow-black rounded-lg">
              <img src="/cinemas/1.png" alt="" className="w-full" />
            </div>
            <div className=" w-[100px] lg:w-[150px] h-[50px] lg:h-[80px] flex items-center p-2 bg-white shadow-xl shadow-black rounded-lg">
              <img src="/cinemas/2.png" alt="" className="w-full" />
            </div>
            <div className=" w-[100px] lg:w-[150px] h-[50px] lg:h-[80px] flex items-center p-2 bg-white shadow-xl shadow-black rounded-lg">
              <img src="/cinemas/3.png" alt="" className="w-full" />
            </div>
            <div className=" w-[100px] lg:w-[150px] h-[50px] lg:h-[80px] flex items-center p-2 bg-white shadow-xl shadow-black rounded-lg">
              <img src="/cinemas/4.png" alt="" className="w-full" />
            </div>
            <div className=" w-[100px] lg:w-[150px] h-[50px] lg:h-[80px] flex items-center p-2 bg-white shadow-xl shadow-black rounded-lg">
              <img src="/cinemas/5.png" alt="" className="w-full" />
            </div>
            <div className=" w-[100px] lg:w-[150px] h-[50px] lg:h-[80px] flex items-center p-2 bg-white shadow-xl shadow-black rounded-lg">
              <img src="/cinemas/6.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
