import { useContext } from "react";
import Gambar9 from "../assets/img/9.svg";
import { IoMdCalendar } from "react-icons/io";
import { BrideContext } from "../utils/Context";
import { GoLocation } from "react-icons/go";

function DateSection() {
  const data = useContext(BrideContext);
  return (
    <div className="container mx-auto">
      <div className="space-y-10 text-center">
        <p>Yang insyaAllah akan diselenggarakan pada</p>
        <p>{data?.marriage?.party?.day}</p>
        <br></br>
        <div className="grid grid-cols-2">
          <div>{data?.marriage?.party?.date}</div>
          <div className="grid grid-rows-2">
            <div>Desember</div>
            <div>2022</div>
          </div>
        </div>
        <br></br>
        <p className="text-xl font-semibold">
          {data?.marriage?.party?.start_at} s.d {data?.marriage?.party?.end_at}
        </p>
        <button className="px-2 bg-[#C0AD82] rounded-2xl py-1 text-white">
          <IoMdCalendar />
          Tambahkan ke Google Calender
        </button>
        <p>di lokasi</p>
        <div className="mx-10">
          <iframe
            title="lokasi"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.7495176493346!2d110.0873424!3d-7.2412761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8856ebd4ef0669d!2zN8KwMTQnMjguNSJTIDExMMKwMDUnMTQuNyJF!5e0!3m2!1sid!2sid!4v1670819985935!5m2!1sid!2sid"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p>
          <strong>Kediaman Mempelai Wanita</strong> <br />
          {data?.bride?.first?.location}
        </p>
        <button className="px-5 py-1 bg-[#C0AD82] rounded-3xl text-white">
          <GoLocation /> Google Maps
        </button>
        <div>
          <img src={Gambar9} alt="Gambar9" className="mx-5"></img>
        </div>
      </div>
    </div>
  );
}

export default DateSection;
