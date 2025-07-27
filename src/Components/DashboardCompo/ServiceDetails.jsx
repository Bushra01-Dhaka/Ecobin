import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CustomButton from "../../Hooks/CustomButton";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Faq from "../Faq1";
import img1 from "../../assets/images/d5.jpg";
import img2 from "../../assets/images/d2.jpg";
import img3 from "../../assets/images/d6.jpg";
import img4 from "../../assets/images/d10.jpg";
import MutualBenefits from "../../Pages/MutualBenefits";

const ServiceDetails = () => {
  const { id } = useParams();
  console.log("Service Id: ", id);

  const [allServices, setAllServices] = useState([]);
  const [eachService, setEachService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((result) => result.json())
      .then((data) => {
        setAllServices(data);
      });
  }, []);
  //   console.log(allServices);

  useEffect(() => {
    if (allServices.length > 0) {
      const perService = allServices.find((item) => item?._id === id);
      setEachService(perService);
      console.log("Each Service: ", perService);
    }
  }, [allServices]);

  return (
    <div>
      <div className="relative ">
        <div
          className="hero min-h-[80vh] border-0"
          style={{
            backgroundImage: `url(${eachService?.image})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-white text-center">
            <div>
              <div className="max-w-lg">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold uppercase">
                  {eachService?.service_title}
                </h1>
                <p className="mb-5">{eachService?.service_short_description}</p>
              </div>
              <CustomButton label="Request Service" to=""></CustomButton>
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

      <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-10 px-6 lg:px-10 py-20">
        {/* left side */}
        <div className="">
          <div className="bg-green-50 lg:w-[350px] rounded-xl shadow-2xl py-6">
            <h3 className=" text-2xl py-6 text-center text-slate-800 font-bold">
              Our Services
            </h3>

            <div className="p-6 grid grid-cols-1 gap-6 text-slate-700 font-bold text-justify cursor-pointer ">
              {allServices.map((item) => (
                <div key={item?._id}>
                  <h3 className="text-md text-center">{item?.service_title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[350px] bg-linear-to-r from-green-700 to-green-500 text-white p-6 rounded-md shadow-2xl my-10">
            <h3 className="text-2xl font-bold">
              Trusted And Reliable Waste Collection!
            </h3>
            <p className="py-4">
              We offer customers regular collection of trash, on a scheduled or
              call basis, with a safe level of service.
            </p>
            <CustomButton label="Get Started Now" to=""></CustomButton>
            <div className="py-8 space-y-4 font-bold">
              <div className="flex justify-start gap-2 items-center">
                <MdOutlineEmail className="text-xl" />
                <p>ecobin@123.com</p>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FaPhoneAlt className="text-xl" />
                <p>Phone: +880 174 000 666</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="p-6 text-lg text-slate-800">
          <h2 className="text-3xl font-bold text-slate-800 text-start">
            Overview
          </h2>
          <p className="py-6">
            {eachService?.service_details} EcoBin is a next-generation waste
            management platform designed to revolutionize how Bangladesh handles
            waste — from households to construction sites. We believe that
            sustainability starts with smart systems, and that’s exactly what
            EcoBin offers. Our platform provides a fully digital, user-friendly
            solution for scheduling household waste pickups, managing recycling,
            and streamlining communication between users, workers, and city
            authorities through role-based dashboards.
          </p>
          <img
            className="rounded-md shadow-2xl w-full object-cover"
            src={eachService?.image}
            alt=""
          />
          <p className="py-10">
            One of EcoBin’s standout features is our Mutual Benefit Program for
            Landfilling & Construction Demolition Waste (CDW), which connects
            construction companies that generate waste with those in need of
            landfilling materials — creating an eco-friendly exchange that
            reduces environmental harm and promotes circular use of resources.
            With AI-powered assistance, real-time updates, and a focus on
            transparency and accountability, EcoBin is more than just a waste
            management tool — it’s a movement toward cleaner cities and greener
            futures. By turning everyday waste into a resource, we’re not only
            reducing pollution but also empowering communities to take part in
            meaningful environmental change.
          </p>

          {(eachService?.service_title === "Land Filling Service" ||
            eachService?.service_title ===
              "Construction & Demolition Waste") && <MutualBenefits />}

          {/* image gallery */}

          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={img1}
              alt=""
              className="h-[300px] object-cover cursor-pointer hover:shadow-md hover:shadow-green-700 w-[500px] rounded-md transition-transform duration-300 hover:scale-105"
            />
            <img
              src={img2}
              alt=""
              className="h-[300px] object-cover cursor-pointer hover:shadow-md hover:shadow-green-700 w-[500px] rounded-md transition-transform duration-300 hover:scale-105"
            />
            <img
              src={img3}
              alt=""
              className="h-[300px] object-cover cursor-pointer hover:shadow-md hover:shadow-green-700 w-[500px] rounded-md transition-transform duration-300 hover:scale-105"
            />
            <img
              src={img4}
              alt=""
              className="h-[300px] object-cover cursor-pointer hover:shadow-md hover:shadow-green-700 w-[500px] rounded-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          <Faq></Faq>

          {/* buttons */}
          <div className="px-6 space-x-4 text-center">
            <CustomButton label="Request Service" to=""></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
