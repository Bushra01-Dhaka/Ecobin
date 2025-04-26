import React from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";

const HoriSlider = () => {
  return (
    <div className="md:max-w-screen-2xl mx-auto px-6 md:px-10">
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 p-6">
            <div className="lg:w-[80%]">
              <p className="md:text-lg text-md py-4 font-bold text-[#059212]">
                Driving Change for a Healthier Planet
              </p>
              <h1 className="md:text-5xl text-4xl font-bold">
                Modern Waste Pickup, Made for Bangladesh
              </h1>
              <p className="py-6 text-lg">EcoBin is transforming the way Bangladesh handles waste — with modern, reliable, and eco-friendly pickup solutions designed to serve every neighborhood. We make waste collection smarter, greener, and hassle-free, helping communities build a cleaner and healthier future.</p>
            </div>
            <div className="lg:w-[80%]">
              <img className="lg:w-[100%] mx-auto rounded shadow-lg" src={img1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center min-h-[100vh]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6">
            <div className="lg:w-[80%]">
              <p className="text-lg py-4 font-bold text-[#059212]">
                Driving Change for a Healthier Planet
              </p>
              <h1 className="md:text-5xl text-4xl font-bold">
              Building Greener Cities, One Pickup at a Time
              </h1>
              <p className="py-6 text-lg">EcoBin is transforming the way Bangladesh handles waste — with modern, reliable, and eco-friendly pickup solutions designed to serve every neighborhood. We make waste collection smarter, greener, and hassle-free, helping communities build a cleaner and healthier future.</p>
            </div>
            <div className="lg:w-[80%]">
              <img className="lg:w-[100%] mx-auto rounded shadow-lg" src={img2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center min-h-[100vh]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 p-6">
            <div className="lg:w-[80%]">
              <p className="text-lg py-4 font-bold text-[#059212]">
                Driving Change for a Healthier Planet
              </p>
              <h1 className="md:text-5xl text-4xl font-bold">
              Simplifying Waste Management for Everyone
              </h1>
              <p className="py-6 text-lg">EcoBin is transforming the way Bangladesh handles waste — with modern, reliable, and eco-friendly pickup solutions designed to serve every neighborhood. We make waste collection smarter, greener, and hassle-free, helping communities build a cleaner and healthier future.</p>
            </div>
            <div className="lg:w-[80%]">
              <img className="lg:w-[100%] mx-auto rounded shadow-lg" src={img3} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center min-h-[100vh]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 p-6">
            <div className="lg:w-[80%]">
              <p className="text-lg py-4 font-bold text-[#059212]">
                Driving Change for a Healthier Planet
              </p>
              <h1 className="md:text-5xl text-4xl font-bold">
              Smarter Waste Collection for a Better Tomorrow
              </h1>
              <p className="py-6 text-lg">EcoBin is transforming the way Bangladesh handles waste — with modern, reliable, and eco-friendly pickup solutions designed to serve every neighborhood. We make waste collection smarter, greener, and hassle-free, helping communities build a cleaner and healthier future.</p>
            </div>
            <div className="lg:w-[80%]">
              <img className="lg:w-[100%] mx-auto rounded shadow-lg" src={img4} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div> 
  );
};

export default HoriSlider;
