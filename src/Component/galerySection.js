import React from "react";
import Gambar9 from "../assets/img/9.svg";

function galerySection() {
  return (
    <div className="container relative mx-auto text-center">
      <div className="font-bold align-center text-8xl">Galeri</div>
      <div className="my-10">
        <img src={Gambar9} alt="Gambar 9" className="mx-5"></img>
      </div>
    </div>
  );
}

export default galerySection;
