import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="px-6 py-10 lg:px-8 bg-[#1a6322] text-white grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
      <div>
        <div className="flex justify-start items-center">
          <img
            className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] object-cover"
            src={logo}
            alt=""
          />
          <p className="font-bold text-3xl relative left-[-10px] lg:left-[-20px]">
            Eco<span className="">bin</span>
          </p>
        </div>
        <p className="py-4 text-start">
          From residential pickups to commercial, industrial, and medical waste
          management, EcoBin covers it all. We believe small actions can create
          big changes for a cleaner, greener future.{" "}
        </p>
      </div>

      <div>
        <p className="text-slate-300 font-semibold text-xl pb-4">Company</p>
        <div className="flex flex-col space-y-2">
          <a href="">About Us</a>
          <a href="">Contact</a>
          <a href="">Services</a>
        </div>
         <p className="text-slate-300 font-semibold text-xl py-4">Working Hours</p>
        <div className="flex flex-col space-y-2">
          <a href="">Mon-Fri: 9:00am - 6:00pm</a>
          <a href="">Sat-Sun: 8:00am - 4:00pm</a>
        </div>
      </div>

      <div>
         <p className="text-slate-300 font-semibold text-xl pb-4">Services</p>
        <div className="flex flex-col space-y-2">
          <a href="">Residential Waste </a>
          <a href="">Commercial Waste </a>
          <a href="">Industrial Waste</a>
          <a href="">Medical Waste Disposal</a>
          <a href="">Construction & Demolition Waste</a>
          <a href="">Land filling Solution </a>
        </div>
      </div>

      <div>
         <p className="text-slate-300 font-semibold text-xl pb-4">Get in Touch</p>
         <div className="flex flex-col space-y-2">
          <div className="flex justify-start gap-2 items-center">
             <RiMapPin2Fill className='text-xl' />
             <p>Black Street, Uk - 2204</p>
         </div>
         <div className="flex justify-start gap-2 items-center">
             <MdOutlineEmail className='text-xl' />
             <p>ecobin@123.com</p>
         </div>
         <div className="flex justify-start gap-2 items-center">
             <FaPhoneAlt className='text-xl' />
             <p>Phone: +880 174 000 666</p>
         </div>
         
         </div>
      </div>





    </div>
  );
};

export default Footer;
