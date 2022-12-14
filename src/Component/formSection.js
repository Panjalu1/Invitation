import { useEffect, useRef, useState, useContext } from "react";
import { BiGift } from "react-icons/bi";
import Gambar3 from "../assets/img/3.svg";
import Gambar4 from "../assets/img/4.svg";
import Aos from "aos";
import axios from "axios";
import { BrideContext } from "../utils/Context";
import MessageSuccess from "./MessageSuccess";
import { AiOutlineClose } from "react-icons/ai";

function FormSection() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const nameInput = useRef();
  const pesanInput = useRef();
  const checkbox = useRef();

  const [showModal, setShowModal] = useState(false);
  const [hide, setHide] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", nameInput.current.value);
    data.append("body", pesanInput.current.value);
    data.append("present", checkbox.current.checked ? 1 : 0);

    axios
      .post("https://app.sekeco.com/invitee/rifqoh-dan-afif.php", data)
      .then((res) => {
        if (res.status === 200 && res.data.success === true) {
          setHide(true);
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error));
  };

  const bank = useContext(BrideContext);
  const dataBank = bank?.slots?.gift?.banks;
  return (
    <div
      className="container relative mx-auto overflow-hidden font-Garamond"
      data-aos={"fade-up"}
    >
      <div className="my-10 text-center">Sampaikan sesuatu untuk kami</div>
      <div>
        {hide ? (
          <MessageSuccess show={hide} />
        ) : (
          <form className="mx-5 space-y-5" onSubmit={onSubmit}>
            <input
              ref={nameInput}
              type="text"
              placeholder="Nama Kamu"
              id="large-input"
              className="block w-full p-2 placeholder-[#C0AD82] text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-[#C0AD82] focus:border-[#C0AD82] rounded-3xl"
            />
            <textarea
              ref={pesanInput}
              type="textArea"
              placeholder="Tulis pesan untuk mempelai..."
              id="large-input"
              rows="4"
              className="block w-full p-2 text-gray-900 border placeholder-[#C0AD82] border-gray-300 rounded-xl bg-gray-50 sm:text-md focus:ring-[#C0AD82] focus:border-[#C0AD82]"
            />
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  onChange={(e) => console.log(e.target.checked)}
                  ref={checkbox}
                  id="remember"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 border border-[#C0AD82] rounded bg-[#E7CD94] focus:ring-3 focus:ring-[#C0AD82] accent-[#C0AD82]"
                  required=""
                  value={1}
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-[#C0AD82]"
              >
                InsyaAllah saya akan hadir.
              </label>
            </div>
            <button
              type="submit"
              className="items-start px-5 py-1 text-white rounded-2xl bg-[#C0AD82]"
            >
              Kirim Pesan
            </button>
          </form>
        )}

        <div className="mt-16 space-y-5 text-center">
          <p>atau dengan gift virtual</p>
          <button
            className="p-2 bg-[#C0AD82] rounded-xl text-white text-4xl hover:shadow-sm hover:shadow-[#3C2E20]"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <BiGift />
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative p-10  mx-10 rounded-xl bg-white">
                  <div className="absolute right-5 top-5 text-xl">
                    <button onClick={() => setShowModal(false)}>
                      <AiOutlineClose />
                    </button>
                  </div>
                  {/*content*/}
                  {dataBank.map((data, idx) => {
                    return (
                      <div
                        key={idx}
                        className="w-full text-start font-Garamond"
                      >
                        <h1 className="text-black text-xl font-bold">
                          {data.name}
                        </h1>
                        <p>{data.long_name}</p>
                        <h1 className="text-xl font-bold">{data.number}</h1>
                        <p className="text-md font-bold">
                          a.n {data.recipient}
                        </p>

                        <button
                          className="text-white px-4 py-1 rounded-full bg-[#C0AD82] text-xs my-5"
                          onClick={() => {
                            navigator.clipboard.writeText(data.number);
                          }}
                        >
                          Salin nomor rekening
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
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
