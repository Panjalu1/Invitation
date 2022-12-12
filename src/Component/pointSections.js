import React from "react";
import Gambar5 from "../assets/img/5.svg";
import Gambar6 from "../assets/img/6.svg";
import Gambar10 from "../assets/img/10.svg";

function pointSections() {
  return (
    <div className="container relative mx-auto overflow-x-hidden">
      <div className="mx-5 text-center">
        <h1 className="my-5">Bismillahiroohmanirrohim</h1>
        <h1 className="mt-5">Assalamualaikum warohmatullohi wabarokatuh</h1>
        <p>Dengan memohon rahma dan ridho Alloh SWT,</p>
        <p>Kami bermaksud menyelenggarakan resepsi</p>
        <p>pernikahan kami:</p>
        <div className="grid grid-cols-4 my-10 space-x-5">
          <div className="w-20 h-20 bg-[#4B3A28] mx-5 rounded-full"></div>
          <div className="col-span-3 text-start">
            <h1>Rifqotul Mardhiyah</h1>
            <p>Putri kedua dari Bapak Muhammad Abrori & Ibu Wahyuti</p>
            <p>Bentisan Lor, Sukomarto, Jumo, Kab. Temanggung</p>
          </div>
        </div>
        <div className="my-10">
          <img src={Gambar10} alt="Gambar 10" className="mx-10"></img>
        </div>
        <div className="grid grid-cols-4 space-x-5">
          <div className="w-20 h-20 bg-[#4B3A28] rounded-full mx-5"></div>
          <div className="col-span-3 text-start">
            <h1>Muchamad Afifufin</h1>
            <p>
              Putra kedua dari Bapak Sholekan &#40;Suyadi&#41; & Ibu Nasiyah
            </p>
            <p>Kemawi RT 02/RW 01, Sumowono, Kab. Semarang</p>
          </div>
        </div>
        <div className="mt-30">
          <img
            src={Gambar5}
            alt="Gambar5"
            className="absolute w-56 left-[-60px] top-96"
          ></img>
          <img
            src={Gambar6}
            alt="Gambar 6"
            className="absolute w-40 right-[-50px] top-96"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default pointSections;
