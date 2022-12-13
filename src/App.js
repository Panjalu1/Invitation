import Cover from "./Component/cover";
import PointSection from "./Component/pointSections";
import DateSection from "./Component/dateSection";
import GalerySection from "./Component/galerySection";
import FormSection from "./Component/formSection";
import ClosingSection from "./Component/closing";
import Footer from "./Component/footer";
import { ContextPengantin } from "./utils/Context";

function App() {
  return (
    <ContextPengantin>
      <Cover />
      <PointSection />
      <DateSection />
      <GalerySection />
      <FormSection />
      <ClosingSection />
      <Footer />
    </ContextPengantin>
  );
}

export default App;
