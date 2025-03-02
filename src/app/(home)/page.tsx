import Collab from "./_components/collab";
import Header from "./_components/header";
import Information from "./_components/information";
import Invest from "./_components/invest";
import Mission from "./_components/mission";
import Vision from "./_components/vision";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Information />
      <Vision />
      <Mission />
      <Invest />
      <Collab />
    </div>
  );
};

export default HomePage;
