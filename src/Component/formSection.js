import { useEffect } from "react";
import { BiGift } from "react-icons/bi";
import Gambar3 from "../assets/img/3.svg";
import Gambar4 from "../assets/img/4.svg";
import Aos from "aos";

function FormSection() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div
      className="container relative mx-auto overflow-hidden font-Garamond"
      data-aos={"fade-up"}
    >
      <div className="my-10 text-center">Sampaikan sesuatu untuk kami</div>
      <div>
        <form className="mx-5 space-y-5">
          <input
            type="text"
            placeholder="Nama Kamu"
            id="large-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-[#C0AD82] focus:border-[#C0AD82] rounded-3xl"
          />
          <textarea
            type="textArea"
            placeholder="Tulis pesan untuk mempelai..."
            id="large-input"
            rows="4"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-md focus:ring-[#C0AD82] focus:border-[#C0AD82]"
          />
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 border border-[#C0AD82] rounded bg-[#E7CD94] focus:ring-3 focus:ring-[#C0AD82] accent-[#C0AD82]"
                required=""
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-[#C0AD82]"
            >
              InsyaAllah saya akan hadir.
            </label>
          </div>
          <button className="items-start px-5 py-1 text-white rounded-2xl bg-[#C0AD82]">
            Kirim Pesan
          </button>
        </form>
        <div className="mt-16 space-y-5 text-center">
          <p>atau dengan gift virtual</p>
          <button className="p-2 bg-[#C0AD82] rounded-xl text-white text-4xl hover:shadow-sm hover:shadow-[#3C2E20]">
            <BiGift />
          </button>
        </div>
        <div>
          <img
            src={Gambar3}
            alt="Gambar 3"
            className="relative bottom-24 left-[-30px] w-32"
          ></img>
          <img
            src={Gambar4}
            alt="Gambar 4"
            className="absolute bottom-24 right-[-40px] w-32"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
