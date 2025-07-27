import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router";
import { FaArrowAltCircleRight } from "react-icons/fa";
const ServiceSlide = () => {
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
    <div className="w-full max-w-[1200px] mx-auto">
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 640px (Tablet starts)
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px (Desktop starts)
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {services.map((item) => (
          <div key={item?._id}>
            <SwiperSlide>
              <div className="relative">
                <div className="lg:w-96 w-full">
                  <img
                    src={item?.image}
                    className="w-full lg:h-[300px] rounded-lg"
                    alt="Services"
                  />
                </div>
                <div className="md:relative md:top-[-80px] lg:w-82 w-full bg-white p-6 shadow-xl md:rounded-lg h-[420px]">
                  <h2 className="text-black text-2xl  font-semibold pt-6">
                   {item?.service_title}
                  </h2>
                  <p className="py-4 text-slate-600">
                   {item?.service_details}
                  </p>
                  <div className="text-black text-lg hover:text-white flex items-center gap-4">
                    <Link to={`/serviceDetails/${item?._id}`}>
                      <button className="btn bg-white border-black hover:border-0 hover:text-white shadow-xl p-4 hover:bg-[#059212] ">
                        <span>Explore Now</span>
                        <FaArrowAltCircleRight className="text-2xl" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}

        {/* <SwiperSlide>
          <div className="relative">
            <div className="lg:w-96 w-full">
              <img
                src={slide1}
                className="w-full lg:h-[300px] rounded-lg"
                alt="Services"
              />
            </div>
            <div className="md:relative md:top-[-80px] lg:w-82 w-full bg-white p-6 shadow-xl md:rounded-lg h-[420px]">
              <h2 className="text-black text-2xl  font-semibold pt-6">
                Residential Waste Management
              </h2>
              <p className="py-4 text-slate-600">
                EcoBin provides reliable and timely residential waste collection
                services, helping families maintain cleaner, healthier living
                environments. We ensure proper disposal and recycling practices,
                making it easier for households to contribute to a greener
                future.
              </p>
              <div className="text-black text-lg hover:text-white flex items-center gap-4">
                <Link>
                  <button className="btn bg-white border-black hover:border-0 hover:text-white shadow-xl p-4 hover:bg-[#059212] ">
                    <span>Explore Now</span>
                    <FaArrowAltCircleRight className="text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="lg:w-96">
              <img
                src={slide2}
                className="w-full md:h-[300px] rounded-lg"
                alt="Services"
              />
            </div>
            <div className="md:relative md:top-[-80px] md:w-82 bg-white p-6 shadow-xl md:rounded-lg h-[420px]">
              <h2 className="text-black text-2xl  font-semibold pt-6">
                Commercial Waste Solutions
              </h2>
              <p className="py-4 text-slate-600">
                Our commercial waste services are designed to meet the unique
                needs of businesses, from small offices to large enterprises.
                EcoBin offers flexible collection schedules, responsible
                disposal, and customized recycling programs to support your
                company's sustainability goals.
              </p>
              <div className="text-black text-lg hover:text-white flex items-center gap-4">
                <Link>
                  <button className="btn bg-white border-black hover:border-0 hover:text-white shadow-xl p-4 hover:bg-[#059212] ">
                    <span>Explore Now</span>
                    <FaArrowAltCircleRight className="text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="lg:w-96">
              <img
                src={slide3}
                className="w-full md:h-[300px] rounded-lg"
                alt="Services"
              />
            </div>
            <div className="md:relative md:top-[-80px] md:w-82 bg-white p-6 shadow-xl md:rounded-lg h-[420px]">
              <h2 className="text-black text-2xl  font-semibold pt-6">
                Industrial Waste Management
              </h2>
              <p className="py-4 text-slate-600">
                Managing industrial waste requires expertise and responsibility.
                EcoBin specializes in the safe collection, transportation, and
                disposal of industrial by-products, ensuring full compliance
                with environmental regulations while minimizing your facility's
                ecological footprint.
              </p>
              <div className="text-black text-lg hover:text-white flex items-center gap-4">
                <Link>
                  <button className="btn bg-white border-black hover:border-0 hover:text-white shadow-xl p-4 hover:bg-[#059212] ">
                    <span>Explore Now</span>
                    <FaArrowAltCircleRight className="text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="lg:w-96">
              <img
                src={slide4}
                className="w-full md:h-[300px] rounded-lg"
                alt="Services"
              />
            </div>
            <div className="md:relative md:top-[-80px] md:w-82 bg-white p-6 shadow-xl md:rounded-lg h-[420px]">
              <h2 className="text-black text-2xl  font-semibold pt-6">
                Medical & Pharmaceutical Waste Disposal
              </h2>
              <p className="py-4 text-slate-600">
                EcoBin ensures the safe and compliant disposal of hazardous
                medical and pharmaceutical waste. From hospitals to clinics and
                pharmacies, our services protect public health and the
                environment by adhering to strict industry safety standards.
              </p>
              <div className="text-black text-lg hover:text-white flex items-center gap-4">
                <Link>
                  <button className="btn bg-white border-black hover:border-0 hover:text-white shadow-xl p-4 hover:bg-[#059212] ">
                    <span>Explore Now</span>
                    <FaArrowAltCircleRight className="text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="lg:w-96">
              <img
                src={slide5}
                className="w-full md:h-[300px] rounded-lg"
                alt="Services"
              />
            </div>
            <div className="md:relative md:top-[-80px] md:w-82 bg-white p-6 shadow-xl md:rounded-lg h-[420px]">
              <h2 className="text-black text-2xl  font-semibold pt-6">
                Construction & Demolition Waste Services
              </h2>
              <p className="py-4 text-slate-600">
                Building projects generate massive waste — EcoBin provides
                efficient collection, separation, and recycling services for
                construction and demolition debris. We help reduce landfill
                impact and promote the responsible reuse of materials wherever
                possible.
              </p>
              <div className="text-black text-lg hover:text-white flex items-center gap-4">
                <Link>
                  <button className="btn bg-white border-black hover:border-0 hover:text-white shadow-xl p-4 hover:bg-[#059212] ">
                    <span>Explore Now</span>
                    <FaArrowAltCircleRight className="text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="lg:w-96">
              <img
                src={slide6}
                className="w-full md:h-[300px] rounded-lg"
                alt="Services"
              />
            </div>
            <div className="md:relative md:top-[-80px] md:w-82 bg-white p-6 shadow-xl md:rounded-lg h-[420px]">
              <h2 className="text-black text-2xl  font-semibold pt-6">
                Landfilling Solutions
              </h2>
              <p className="py-4 text-slate-600">
                For waste that cannot be recycled or repurposed, EcoBin offers
                safe, regulated landfilling solutions. Our goal is to manage
                landfill waste with minimal environmental impact, ensuring safe
                disposal while continually seeking new ways to reduce landfill
                use.
              </p>
              <div className="text-black text-lg hover:text-white flex items-center gap-4">
                <Link>
                  <button className="btn bg-white border-black hover:border-0 hover:text-white shadow-xl p-4 hover:bg-[#059212] ">
                    <span>Explore Now</span>
                    <FaArrowAltCircleRight className="text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ServiceSlide;
