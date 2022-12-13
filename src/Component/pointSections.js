import React, { useContext, useEffect } from "react";
import Gambar5 from "../assets/img/5.svg";
import Gambar6 from "../assets/img/6.svg";
import Gambar10 from "../assets/img/10.svg";
import { BrideContext } from "../utils/Context";
import Aos from "aos";

function PointSections() {
  const data = useContext(BrideContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container relative mx-auto overflow-hidden pb-52">
      <div className="absolute bottom-0 w-40 -right-10">
        <img src={Gambar6} alt="Gambar 6"></img>
      </div>
      <div className="absolute bottom-0 w-56 -left-20">
        <img src={Gambar5} alt="Gambar5"></img>
      </div>
      <div
        className="z-40 mx-5 text-xs text-center font-Garamond"
        data-aos={"fade-up"}
      >
        <h1 className="my-5">Bismillahiroohmanirrohim</h1>
        <h1 className="my-5">Assalamualaikum warohmatullohi wabarokatuh</h1>
        <p>Dengan memohon rahma dan ridho Alloh SWT,</p>
        <p>Kami bermaksud menyelenggarakan resepsi</p>
        <p>pernikahan kami:</p>
        <div className="grid grid-cols-4 my-10 space-x-5">
          <div className="mt-[20%] w-20 h-20 bg-[#4B3A28] mx-5 rounded-full"></div>
          <div className="col-span-3 text-start">
            <h1 className="text-3xl font-medium font-Caveat text-[#9F7730]">
              {data?.bride?.first.fullname}
            </h1>
            <p className="text-xs font-semibold font-Garamond">
              Putri kedua dari {data?.bride?.first.parent}
            </p>
            <p className="text-xs font-semibold font-Garamond">
              {data?.bride?.first.location}
            </p>
          </div>
        </div>
        <div className="my-5">
          <img src={Gambar10} alt="Gambar 10" className="mx-10"></img>
        </div>
        <div className="grid grid-cols-4 mt-5 space-x-5">
          <div className="w-20 h-20 mt-[20%] bg-[#4B3A28] rounded-full mx-5 z-40"></div>
          <div className="z-40 col-span-3 text-xs text-start">
            <h1 className="text-3xl font-medium font-Caveat text-[#9F7730]">
              {data?.bride?.second.fullname}
            </h1>
            <p className="text-xs font-semibold font-Garamond">
              Putra kedua {data?.bride?.second.parent}
            </p>
            <p className="text-xs font-semibold font-Garamond">
              {data?.bride?.second.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointSections;
