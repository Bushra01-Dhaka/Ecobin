import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import useCustomButton from "./useCustomButton";


const CustomButton = ({ label = "Details", to = "#" }) => {
  const { btnRef, handleMouseMove } = useCustomButton();

  return (
    <Link to={to}>
      <button
        className="btn w-[200px] h-[50px] p-2 myBtn bg-gradient-to-r from-[#059212] to-[#9BEC00] text-lg text-center font-semibold text-white border-0 rounded-lg my-4"
        onMouseMove={handleMouseMove}
        ref={btnRef}
      >
        <span className="text-center">
          {label} <FaArrowRight className="inline" />
        </span>
      </button>
    </Link>
  );
};

export default CustomButton;
