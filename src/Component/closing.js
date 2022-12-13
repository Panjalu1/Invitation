import { useEffect } from "react";
import Aos from "aos";

function Closing() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="container relative px-5 mx-auto space-y-5 text-sm text-center font-Garamond"
      data-aos={"fade-up"}
    >
      <div>
        <p>
          Merupakan suatu kebahagiaan bagi kami apabila
          <br />
          Bapak/Ibu/Saudara/i berkenan untuk
          <br />
          memberikan do'a restu kepada kami.
        </p>
      </div>
      <div>
        <p>
          Atas Kehadiran dan do'a restu yang diberikan
          <br /> kami ucapkan terimakasih.
        </p>
      </div>
      <div>
        Wassalamu'alaikum warohmatullahi
        <br />
        wabarakatuh.
      </div>
    </div>
  );
}

export default Closing;
