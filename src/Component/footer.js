import { useContext } from "react";
import Gambar9 from "../assets/img/9.svg";
import { BrideContext } from "../utils/Context";

function Footer() {
  const data = useContext(BrideContext);
  return (
    <div className="container mx-auto text-center">
      <div className="my-5">
        <p className="font-bold">
          {data?.bride?.first?.nickname} & {data?.bride?.second?.nickname}
        </p>
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

export default Footer;
