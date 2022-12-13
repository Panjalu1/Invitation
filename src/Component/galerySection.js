import { useEffect } from "react";
import Gambar9 from "../assets/img/9.svg";
import Aos from "aos";

function GalerySection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="container relative mx-auto text-center"
      data-aos={"fade-up"}
    >
      <div className="font-bold h-[50vh] text-8xl">
        <p>Galeri</p>
      </div>
      <div className="my-10">
        <img src={Gambar9} alt="Gambar 9" className="mx-5"></img>
      </div>
    </div>
  );
}

export default GalerySection;
