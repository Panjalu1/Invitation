import { useContext, useEffect } from "react";
import Gambar9 from "../assets/img/9.svg";
import { IoMdCalendar } from "react-icons/io";
import { BrideContext } from "../utils/Context";
import { GoLocation } from "react-icons/go";
import Aos from "aos";

function DateSection() {
  const data = useContext(BrideContext);

  const date = new Date(data?.marriage?.party?.date).toLocaleString("id", {
    month: "long",
  });

  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);
  return (
    <div className="container mx-auto">
      <div className="text-center" data-aos={"fade-up"}>
        <p className="font-medium font-Garamond my-5">
          Yang insyaAllah akan diselenggarakan pada
        </p>
        <p className="text-2xl font-Garamond my-2">
          {data?.marriage?.party?.day}
        </p>
        <hr className="mx-12 bg-black my-2" />
        <div className="flex justify-center grid-cols-3 gap-x-4">
          <div className="text-5xl text-end font-Garamond text-[#A07830]">
            {data?.marriage?.party?.date.slice(8, 10)}
          </div>
          <div className="grid col-span-2 text-start font-Garamond">
            <div className="text-2xl">{date}</div>
            <div>{data?.marriage?.party?.date.slice(0, 4)}</div>
          </div>
        </div>
        <hr className="mx-12 bg-black my-2" />
        <p className="text-2xl font-medium font-Garamond my-2">
          {data?.marriage?.party?.start_at} s.d. {data?.marriage?.party?.end_at}
        </p>
        <div className="flex justify-center my-5">
          <button
            className="px-2 bg-[#C0AD82] rounded-2xl py-1 text-white font-Garamond flex justify-center"
            onClick={() => window.open(data?.marriage?.party?.add_to_calendar)}
          >
            <IoMdCalendar className="text-2xl" />
            Tambahkan ke Google Calendar
          </button>
        </div>

        <p className="font-Garamond">di lokasi</p>
        <div className="h-[30vh] mx-10 my-10">
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
        <p className="mx-10 font-Garamond">
          <strong>Kediaman Mempelai Wanita</strong> <br />
          {data?.bride?.first?.location}
        </p>
        <div className="flex justify-center my-10">
          <button
            className="px-5 py-1 flex bg-[#C0AD82] rounded-3xl text-white font-Garamond"
            onClick={() => window.open(data?.marriage?.party?.google_maps)}
          >
            <GoLocation className="text-xl" />
            &emsp;Google Maps
          </button>
        </div>
        <div>
          <img src={Gambar9} alt="Gambar9" className="mx-5"></img>
        </div>
      </div>
    </div>
  );
}

export default DateSection;
