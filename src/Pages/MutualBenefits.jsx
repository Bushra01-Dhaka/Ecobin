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


       <div className="lg:px-20 py-10 flex flex-col lg:flex-row justify-center items-start gap-6 px-8">
        {/* left */}
        <div className="text-lg text-slate-700">
           <h2 className="text-3xl text-[#059212] font-bold">Are You Construction & Demolition Waste Holder ?</h2>
         <p className="py-4">
          Building projects generate a large amount of waste, including debris, garbage, and rubble. EcoBin offers an efficient collection, separation, and recycling service to manage your construction and demolition waste responsibly.
         </p>
         <p className="py-4">
          <span className="font-bold">Regular Plan:</span> EcoBin will collect your waste, and you’ll be charged for the Construction & Demolition waste service along with a transportation fee if you request instant service within 2 days.
         </p>
         <p className="py-4">
          <span className="font-bold">Mutual Benefit Plan: </span> Book in advance—at least 15 days before your demolition or construction work. In this plan, <span className="font-bold text-[#059212]">you only pay the  50% of the transportation charge. No workers’ cost is applied under this plan.</span>
         </p>
        </div>
        {/* Right */}
        <div className="text-lg text-slate-700">
           <h2 className="text-3xl text-[#059212] font-bold">Are You Land Owner ?</h2>
         <p className="py-4">
          EcoBin offers safe and eco-friendly land filling solutions to manage your waste responsibly.
         </p>
         <p className="py-4">
          <span className="font-bold">Regular Plan:</span> If you need landfilling within 2 days, you’ll need to pay the landfilling service charge along with the material cost (for soil, rubbish, etc.).
         </p>
         <p className="py-4">
          <span className="font-bold">Mutual Benefit Plan: </span> Book in advance—at least 15 days before your planned work or demolition. With this plan, <span className="font-bold text-[#059212]">you only pay the workers’ charge and Transportation charge. No extra cost for landfilling materials.</span>
         </p>
        </div>
      </div>

      <div className="flex justify-center items-center text-center mb-20">
        <CustomButton label="Request Service" to="/requestService"></CustomButton>
      </div>

     


    </div>
  );
};

export default MutualBenefits;
