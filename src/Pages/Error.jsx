
import { Link } from "react-router";
import img from "../assets/images/err.png"
import { FaArrowRight } from "react-icons/fa";

const Error = () => {
    return (
        <div data-aos="zoom-in"
        data-aos-duration="1200"
         className='flex justify-center items-center min-h-screen text-center'>
            <div>
                <img className='w-[400px] h-' src={img} alt="error 404 page" />
                <h2 className="text-4xl font-semibold text-slate-800 uppercase">Page Not Found!</h2>
                <Link to="/"><p className="py-4 hover:underline">Back to Home <FaArrowRight className="inline"></FaArrowRight></p></Link>
            </div>
        </div>
    );
};

export default Error;