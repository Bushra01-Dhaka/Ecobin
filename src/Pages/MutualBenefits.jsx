import HoverDevCards from "../CustomCompo/HoverDevCards";

import CustomButton from "../Hooks/CustomButton";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MutualBenefits = () => {
  return (
    <div className="">
      <div data-aos="fade-in" data-aos-duration="1500" className="min-h-[50vh] flex justify-center items-center ">
        <div className="max-w-3xl mx-auto p-8 lg:p-0">
          <h2 className="text-4xl lg:text-6xl text-center text-slate-800 font-semibold">
            Mutual Benefit Program for{" "}
            <span className="bg-gradient-to-r from-[#059212] to-[#9BEC00] text-transparent bg-clip-text">
              Landfilling & CD Waste
            </span>{" "}
          </h2>
          <p className="pt-6 text-center text-slate-500">{`EcoBin’s Mutual Benefit Program for Landfilling & CD Waste connects construction waste producers with those in need of landfill materials. This eco-friendly exchange reduces waste, lowers costs, and gives demolition debris a new purpose — building a cleaner future together..`}</p>
        </div>
      </div>

      <HoverDevCards></HoverDevCards>

      <div className="flex justify-center items-center text-center mb-20">
        <CustomButton label="Request Service" to="/requestService"></CustomButton>
      </div>
    </div>
  );
};

export default MutualBenefits;
