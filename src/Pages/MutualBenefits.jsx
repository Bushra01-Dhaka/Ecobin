import { useRef } from "react";
import HoverDevCards from "../CustomCompo/HoverDevCards";
import { Link } from "react-router";
import { FaArrowCircleRight } from "react-icons/fa";

const MutualBenefits = () => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };
  return (
    <div>
      <div className="min-h-[80vh] flex justify-center items-center">
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
        <Link>
          <button
            className="btn myBtn font-semibold bg-linear-to-r from-[#059212] to-[#9BEC00] text-white text-lg hover:border-0  rounded-md"
            onMouseMove={handleMouseMove}
            ref={btnRef}
          >
            <span>Request Service <FaArrowCircleRight className="inline text-2xl text-white" /></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MutualBenefits;
