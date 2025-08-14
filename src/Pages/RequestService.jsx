import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const RequestService = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const [price, setPrice] = useState(500);

  const containerPrices = {
    "32 Gallon Trash": 500,
    "64 Gallon Trash": 1000,
    "76 Gallon Trash": 1200,
    "150 Gallon Trash": 1800,
    "200 Gallon Trash": 2000,
    "1 Truck Demolition/Garbage Waste": 5000,
    "2 Trucks Demolition/Garbage Waste": 10000,
    "3 Trucks Demolition/Garbage Waste": 1500,
    "4+ Trucks Demolition/Garbage Waste": 20000,
    "No Required": 0,
  };

  const handleContainerChange = (event) => {
    const selectedSize = event.target.value;
    setPrice(containerPrices[selectedSize] || 0);
  };

  const handleServiceRequest = (event) => {
    event.preventDefault();
    const form = event.target;
    const service = form.service.value;
    const property = form.property.value;
    const container_size = form.container_size.value;
    const price = form.price.value;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;

    console.log(
      service,
      property,
      container_size,
      price,
      name,
      date,
      email,
      phone,
      address
    );

    const requestInfo = {
      service: service,
      property: property,
      container_size: container_size,
      price: price,
      name: user?.displayName,
      date: date,
      email: user?.email,
      phone: phone,
      address: address,
    };

    axiosPublic.post("/requestServices", requestInfo).then((res) => {
      if (res.data.insertedId) {
        console.log("User Added into database");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service Requested  Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/dashboard/myRequestedServices");
      }
    });
  };

  return (
    <div>
      <div
        data-aos="zoom-in-up"
        className="min-h-[60vh] flex justify-center items-center "
      >
        <div className="max-w-3xl mx-auto p-8 lg:p-0">
          <h2 className="text-4xl lg:text-6xl text-center text-slate-800 font-semibold">
            Eco-Friendly Pickup at Your Doorstep{" "}
            <span className="bg-gradient-to-r from-[#059212] to-[#9BEC00] text-transparent bg-clip-text">
              Schedule Today
            </span>{" "}
          </h2>
          <p className="pt-6 text-center text-slate-500">{`EcoBin’s Service Request feature makes waste collection easier, faster, and smarter for everyone. Whether you're a homeowner or a business, you can schedule pickups with just a few clicks — ensuring timely service, reduced clutter, and a cleaner environment, all while supporting sustainable waste management.`}</p>
        </div>
      </div>

      <div className="my-10 flex flex-col lg:flex-row justify-center items-start gap-10 px-6 lg:px-20 py-6 ">
        {/* left */}
        <div
          data-aos="fade-right"
          className=" w-[400px]  bg-linear-to-tl from-[#059212] to-[#9BEC00] rounded-md shadow-2xl text-white p-10 text-justify hover:bg-linear-to-tr transition-transform duration-200 cursor-pointer"
        >
          <h3 className="text-3xl my-6 font-bold">
            Trusted And Reliable Waste Collection!
          </h3>
          <div className="space-y-6">
            <div className="py-6 border-b-2">
              <p className="text-lg font-bold">Local Address:</p>
              <p>Black Street, Uk - 2204</p>
            </div>

            <div className="py-6 border-b-2">
              <p className="text-lg font-bold">Email Address:</p>
              <p>ecobin@123.com</p>
            </div>

            <div className="py-6 border-b-2">
              <p className="text-lg font-bold">Phone Address:</p>
              <p>+880 174 000 666</p>
            </div>

            <div className="py-6 border-b-2">
              <p className="text-lg font-bold">Web Address:</p>
              <p>https//:ecobin.com</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 p-6 text-slate-800">
          <p className="text-lg font-bold">
            Please complete the form below, to request a quote, and we will be
            in touch. Or you can call us +880 174 000 666 and our specialists
            will provide the necessary help!
          </p>

          <div>
            {/* form for request service */}
            <form
              onSubmit={handleServiceRequest}
              action=""
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              <div className="my-10">
                <label className="font-bold">Select Service*</label>
                <select
                  defaultValue="Residential Waste Collection"
                  className="select select-neutral mt-4"
                  name="service"
                  required
                >
                  <option>Residential Waste Collection</option>
                  <option>Commercial Waste Management</option>
                  <option>Medical & Pharmaceutical Waste Disposal</option>
                  <option>Construction & Demolition Waste</option>
                  <option>Land Filling Service</option>
                  <option>Industrial Waste Management</option>
                  <option>Mutual Benefit Program</option>
                </select>
              </div>

              <div className="my-10">
                <label className="font-bold">Select Property Type*</label>
                <select
                  defaultValue="Your Apartment/House"
                  className="select select-neutral mt-4"
                  name="property"
                  required
                >
                  <option>Your Apartment/House</option>
                  <option>Industry</option>
                  <option>Hospital</option>
                  <option>Educational Institution</option>
                  <option>Land Property</option>
                  <option>Event & Community Center</option>
                  <option>Office/Market</option>
                </select>
              </div>

              {/* <div className="mb-10">
                <label className="font-bold">Property Size ( sq m)*</label>
                  <input 
                type="number" 
                className="input w-full my-4 border-black " 
                placeholder="Property Size (sq m)"
                name="property_size"
                />
              </div> */}

              <div className="mb-10">
                <label className="font-bold">Container Size*</label>
                <select
                  defaultValue="Nothing"
                  className="select select-neutral mt-4"
                  name="container_size"
                  onChange={handleContainerChange}
                >
                  <option>32 Gallon Trash</option>
                  <option>64 Gallon Trash</option>
                  <option>76 Gallon Trash</option>
                  <option>150 Gallon Trash</option>
                  <option>200 Gallon Trash</option>
                  <option>1 Truck Demolition/Garbage Waste</option>
                  <option>2 Trucks Demolition/Garbage Waste</option>
                  <option>3 Trucks Demolition/Garbage Waste</option>
                  <option>4+ Trucks Demolition/Garbage Waste</option>
                  <option>No Required</option>
                </select>
              </div>

              <div className="mb-10">
                <label className="font-bold">Price(tk)*</label>
                <input
                  type="number"
                  className="input w-full my-4 border-black"
                  placeholder="Price tk"
                  name="price"
                  value={price}
                  readOnly
                />
              </div>

              <div className="mb-10">
                <label className="font-bold">Name*</label>
                <input
                  type="text"
                  className="input w-full my-4 border-black "
                  placeholder={user?.displayName}
                  name="name"
                  readOnly
                  required
                />
              </div>

              <div className="mb-10">
                <label className="font-bold">Service Date*</label>
                <input
                  type="date"
                  className="input w-full my-4 border-black"
                  name="date"
                  required
                />
              </div>

              <div className="mb-10">
                <label className="font-bold">Email*</label>
                <input
                  type="email"
                  className="input w-full my-4 border-black"
                  placeholder={user?.email}
                  name="email"
                  readOnly
                />
              </div>

              <div className="mb-10">
                <label className="font-bold">Phone Number*</label>
                <input
                  type="number"
                  className="input w-full my-4 border-black"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </div>

              <div className="mb-10">
                <label className="font-bold">Address*</label>
                <textarea
                  type="text"
                  className="input w-full my-4 border-black"
                  name="address"
                  placeholder="Black Street, Uk - 2204"
                  required
                ></textarea>
              </div>

              <div></div>

              <div className="mb-10">
                <input
                  className="btn bg-linear-to-r hover:bg-linear-to-l from-[#059212] to-[#9BEC00] text-white text-lg rounded-md w-[300px] h-[50px]"
                  type="submit"
                  value="Confirm Request"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestService;
