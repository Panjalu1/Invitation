import React from "react";

function dateSection() {
  return (
    <div className="container mx-auto">
      <div className="text-center">
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
        <button>Tambahkan ke Google Calender</button>
        <p>di lokasi</p>
        <p>gambar</p>
        <p>Kediaman Mempelai Wanita</p>
        <p>bentisan lor, RT 03/RW 02, Sukomarto, Jumo, Temanggung, Jateng</p>
        <button>Google Maps</button>
      </div>
    </div>
  );
}

export default dateSection;
