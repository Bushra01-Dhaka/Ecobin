import CustomButton from "../Hooks/CustomButton";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const IntroBanner = () => {
  return (
    <div data-aos="zoom-out" data-aos-duration="1500" className="relative h-[80vh] w-[80%] mx-auto overflow-hidden rounded-md shadow-lg">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-700 opacity-40"></div>

      {/* Text & Button */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
          Smart Waste Pickup, Just a Click Away
        </h1>
         <CustomButton label="Explore Services" to="/services"></CustomButton>
      </div>

      
    </div>
  );
};

export default IntroBanner;
