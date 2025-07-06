import { useEffect, useState } from "react";
import img from "../assets/images/2.png";
import { Link } from "react-router";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  console.log(services);
  return (
    <div className="bg-slate-100">
      <div>
        <div
          className="hero min-h-[60vh]"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Ecobin Services</h1>
              <p className="mb-5">Explore Our Waste Management Solutions</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl text-center py-6 font-semibold">
          Your Needs, Our Expertise.
        </h2>
        <hr />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 px-6 lg:px-10 py-20">
        {services.map((item) => (
          <div key={item.service_no}>
            <div>
              <div>
                <img
                  className="h-[300px] w-[400px] object-cover rounded-2xl"
                  src={item?.image}
                  alt="Services"
                />
                <div className="bg-white text-slate-800 rounded-2xl p-4 lg:w-[350px] relative top-[-50px]">
                  <h3 className="text-xl font-bold text-slate-950 py-6">
                    {item?.service_title}
                  </h3>
                  <p>{item?.service_details}</p>
                  <div className="flex items-center my-auto text-slate-950 hover:text-white">
                    <Link>
                      <button className="btn w-[190px] bg-transparent my-6 border-2 border-slate-950  text-slate-950 shadow-xl p-6 transition-all duration-200 text-lg hover:bg-[#059212] hover:text-white hover:border-[#059212]">
                        <span>Explore Now</span>
                      </button>
                    </Link>
                    <HiArrowRight className="text-2xl  relative left-[-40px] "/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
