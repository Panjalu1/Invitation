import Cover from "./Component/cover";
import PointSection from "./Component/pointSections";
import DateSection from "./Component/dateSection";
import FormSection from "./Component/formSection";
import ClosingSection from "./Component/closing";
import Footer from "./Component/footer";
import { ContextPengantin } from "./utils/Context";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Walimatul Ursy: Rifqoh dan Afif";
  }, []);
  return (
    <ContextPengantin>
      <Cover />
      <PointSection />
      <DateSection />
      <FormSection />
      <ClosingSection />
      <Footer />
    </ContextPengantin>
  );
}

export default App;
