import { useEffect, useState } from "react";
import img from "../assets/images/service2.jpg";
import { Link } from "react-router";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import MaskImage from "../CustomCompo/MaskImage";
import MutualBenefits from "./MutualBenefits";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ServicePage = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  console.log(services);
  return (
    <div className="">
      <div className="relative ">
        <div
          className="hero min-h-[80vh]"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div data-aos="zoom-out" className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Ecobin Services</h1>
              <p className="mb-5">Explore Our Waste Management Solutions</p>
            </div>
          </div>
        </div>

        <div class="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div>
        <h2 className="text-2xl lg:text-3xl text-center py-6 font-semibold">
          Your Needs, Our Expertise.
        </h2>
        
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 px-6 lg:px-10 pt-20">
        {services.map((item) => (
          <div key={item.service_no}>
            <div>
              <div>
                <img
                  className="h-[300px] w-[400px] relative object-cover rounded-2xl"
                  src={item?.image}
                  alt="Services"
                />
                <div className="w-[400px] h-[300px] hover:bg-linear-to-b from-transparent to-[#059212] absolute top-[-300px] rounded-2xl"></div>

                <div className="bg-white text-slate-800 rounded-2xl p-4 lg:w-[350px] relative top-[-50px]">
                  <h3 className="text-xl font-bold text-slate-800 py-6">
                    {item?.service_title}
                  </h3>
                  <p className="text-slate-600">{item?.service_details}</p>
                  <div className="flex items-center my-4 text-slate-950 hover:text-white">
                    <Link to={`/serviceDetails/${item?._id}`}>
                      <button className="btn bg-white border-black hover:border-0 hover:text-white shadow-xl p-4 hover:bg-[#059212] ">
                        <span>Explore Now</span>
                        <FaArrowAltCircleRight className="text-2xl" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <MutualBenefits></MutualBenefits>


    </div>
  );
};

export default ServicePage;
