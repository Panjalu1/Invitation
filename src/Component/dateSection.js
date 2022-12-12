import React from "react";
import Gambar9 from "../assets/img/9.svg";

function dateSection() {
  return (
    <div className="container mx-auto bg-zinc-600">
      <div className="space-y-10 text-center">
        <p>Yang insyaAllah akan diselenggarakan pada</p>
        <p>Sabtu Wage</p>
        <br></br>
        <div className="grid grid-cols-2">
          <div>24</div>
          <div className="grid grid-rows-2">
            <div>Desember</div>
            <div>2022</div>
          </div>
        </div>
        <br></br>
        <p>11:00 WIB s.d selesai</p>
        <button className="px-2 bg-[#C0AD82] rounded-2xl py-1">
          <box-icon type="solid" name="calendar-event"></box-icon>
          &nbsp;Tambahkan ke Google Calender
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
          <strong>Kediaman Mempelai Wanita</strong> <br /> bentisan lor, RT
          03/RW 02, Sukomarto, Jumo, Temanggung, Jateng
        </p>
        <button className="px-5 py-1 bg-[#C0AD82] rounded-3xl">
          Google Maps
        </button>
        <div>
          <img src={Gambar9} alt="Gambar9" className="mx-5"></img>
        </div>
      </div>
    </div>
  );
}

export default dateSection;
