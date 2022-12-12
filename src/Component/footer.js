import React from "react";
import Gambar9 from "../assets/img/9.svg";

function footer() {
  return (
    <div className="container mx-auto text-center">
      <div className="my-5">
        <strong>Rifqoh & Ali</strong>
      </div>
      <div>
        <img src={Gambar9} alt={Gambar9} className="mx-5"></img>
      </div>
      <div className="container bg-[#3C2E20] text-white text-sm py-5">
        <p className="mx-5">
          Mari terus terapkan kesehatan sebagai ikhtiar untuk
          <br />
          perubahan yang lebih baik.
        </p>
      </div>
    </div>
  );
}

export default footer;
