import React from "react";
import img from "../../assets/images/ff1.jpeg"
import img1 from "../../assets/images/i2.jpg"
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { LiaCommentsDollarSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="md:px-10 px-6 flex flex-col-reverse lg:flex-row justify-center items-center py-10 lg:gap-8">
      <div className="w-[100%] lg:h-auto lg:mx-auto">
         <img className="" src={img} alt="" />
         <img className="md:hidden lg:block block relative right-[-200px] top-[-200px] rounded-lg shadow-2xl" src={img1} alt="" />
      </div>
      <div className="pb-10 lg:p-8 p-4">
        <p className="py-4 text-[#059212] text-lg font-bold">Why Choose Us</p>
        <h1 className="font-bold text-4xl">
          Why choose our Ecobin services
        </h1>
        <div className="text-lg">
        <p className="py-6">
        At EcoBin, we are committed to delivering reliable, eco-friendly waste management solutions tailored to your needs. Whether you're a homeowner, business owner, or part of an industrial facility, our services ensure responsible waste collection, disposal, and recycling — all while promoting a cleaner, greener future.
        </p>
        <p className="py-6">
        <motion.p 
        whileHover={{y: -10}}
        transition={{type:"spring", stiffness: 300, damping: 15}}
        ><SiGooglecontaineroptimizedos className="text-7xl pb-4" /></motion.p>
        <p className="text-[#059212] text-xl font-bold pb-2">Optimized Collections</p>
        We understand that time and space are valuable. That's why EcoBin offers optimized waste collection schedules tailored to your specific needs. Whether it's daily residential pickups or flexible commercial routes, our data-driven logistics ensure timely, efficient service with minimal disruption to your routine.
        </p>
        <p className="py-6">
        <motion.p 
        whileHover={{y: -10}}
        transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth transition
        ><LiaCommentsDollarSolid className="text-7xl pb-4" /></motion.p>
        <p className="text-[#059212] text-xl font-bold pb-2">Affordable & Scalable Pricing</p>
        EcoBin believes sustainability should be accessible. Our cost-effective plans are built to suit every scale—from small households to large enterprises. With transparent pricing and no hidden fees, you can enjoy premium service without straining your budget. Responsible waste management is now more affordable than ever.
        </p>
      </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
