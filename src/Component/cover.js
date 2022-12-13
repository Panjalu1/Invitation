import { useContext, useEffect } from "react";
import Gambar1 from "../assets/img/1.svg";
import Gambar2 from "../assets/img/2.svg";
import Gambar3 from "../assets/img/3.svg";
import Gambar4 from "../assets/img/4.svg";
import { BrideContext } from "../utils/Context";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Cover() {
  const data = useContext(BrideContext);

  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <div className="container relative h-screen mx-auto overflow-hidden">
      <img
        src={Gambar1}
        alt="Gambar 1"
        className="absolute w-56 left-[-50px] top-[-75px]"
        data-aos={`fade-up`}
      ></img>
      <img
        src={Gambar2}
        alt="Gambar 2"
        className="absolute w-32 right-[-30px] top-[-110px]"
        data-aos={`fade-up`}
      ></img>
      <img
        src={Gambar3}
        alt="Gambar 3"
        className="absolute bottom-0 left-[-30px] w-32"
      ></img>
      <img
        src={Gambar4}
        alt="Gambar 4"
        className="absolute bottom-0  right-[-50px] w-44"
      ></img>
      <div className="text-center" data-aos={"fade-up"}>
        <div className="my-20">
          <p className="tracking-widest font-Garamond">
            WALIMATUL
            <br />
            URSY
          </p>
        </div>
        <div className="my-10 text-[#9F7730]">
          <h1 className="text-6xl font-Caveat">
            {data?.bride?.first?.nickname}
          </h1>
          <h1 className="text-lg font-semibold text-black font-Garamond">
            dan
          </h1>
          <h1 className="text-6xl font-Caveat">
            {data?.bride?.second?.nickname}
          </h1>
        </div>
      </div>
      <div className="absolute inset-x-0 text-center bottom-[10%]">
        <Link to="pointSection" smooth={true} spy={true}>
          <button className="px-5 text-white py-1 bg-[#C0AD82] rounded-2xl font-Garamond">
            Buka Undangan&emsp;<strong>&#62;</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cover;
