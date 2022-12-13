import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BrideContext = createContext({
  user: null,
});

export const ContextPengantin = ({ children }) => {
  const [bride, setBride] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://app.sekeco.com/invitee/rifqoh-dan-afif.json", {
        signal: controller.signal,
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => setBride(res.data));
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <BrideContext.Provider value={bride}>{children}</BrideContext.Provider>
    </>
  );
};
