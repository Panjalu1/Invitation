import React from "react";
import Gambar9 from "../assets/img/9.svg";

function galerySection() {
  return (
    <div className="container mx-auto text-center h-5/6">
      <div className="align-center">Galeri</div>
      <div>
        <img src={Gambar9} alt="Gambar 9" className="mx-5"></img>
      </div>
    </div>
  );
}

export default galerySection;
