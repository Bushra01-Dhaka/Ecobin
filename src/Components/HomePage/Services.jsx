import IntroBanner from "../../CustomCompo/IntroBanner";
import ServiceSlider from "./ServiceSlider";
const Services = () => {
  return (
    <div>
      <div className="text-center pb-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="py-4 text-[#059212] text-lg font-bold">
          Comprehensive Waste Solutions
        </p>
      </div>


      <div className="px-6 md:px-10 mx-auto">
               <ServiceSlider></ServiceSlider>
      </div>



    </div>
  );
};

export default Services;
