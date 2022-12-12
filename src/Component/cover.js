import React from "react";
import Gambar1 from "../assets/img/1.svg";
import Gambar2 from "../assets/img/2.svg";
import Gambar3 from "../assets/img/3.svg";
import Gambar4 from "../assets/img/4.svg";

function cover() {
  return (
    <div className="container relative h-screen mx-auto overflow-hidden">
      <img
        src={Gambar1}
        alt="Gambar 1"
        className="absolute w-56 left-[-50px] top-[-75px]"
      ></img>
      <img
        src={Gambar2}
        alt="Gambar 2"
        className="absolute w-32 right-[-30px] top-[-110px]"
      ></img>
      <img
        src={Gambar3}
        alt="Gambar 3"
        className="absolute bottom-0 left-[-30px] w-32"
      ></img>
      <img
        src={Gambar4}
        alt="Gambar 4"
        className="absolute bottom-0  right-[-50px] w-44"
      ></img>
      <div className="text-center">
        <div className="my-20">
          <p>WALIMATUL</p>
          <p>URSY</p>
        </div>
        <div className="">
          <h1>Rifqoh</h1>
          <h1>&</h1>
          <h1>Afif</h1>
        </div>
        <div className="absolute inset-x-0 bottom-20">
          <button className="px-5 text-white py-1 bg-[#C0AD82] rounded-2xl">
            Buka Undangan <box-icon name="chevron-right"></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default cover;
