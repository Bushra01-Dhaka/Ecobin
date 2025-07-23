
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";
import { MdMoreTime } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { GiTreeGrowth } from "react-icons/gi";
import { BsRecycle } from "react-icons/bs";

const HoverDevCards = () => {
  return (
    <div className="px-20 mb-20">
      <p className=" py-6 text-3xl lg:text-4xl font-Semibold bg-gradient-to-r from-slate-900 to-slate-800 text-transparent bg-clip-text text-center">Why Choose Mutual Benefit Program?</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
        <Card
          title="Connect Stakeholders"
          subtitle="Links construction companies and land developers to exchange CD waste for landfilling needs."
          href="#"
          Icon={FaHandshake}
        />
        <Card 
        title="Reduce Environmental Harm" 
        subtitle="Prevents illegal dumping by properly managing and redirecting demolition waste." 
        href="#" 
        Icon={ GiTreeGrowth} />

        {/* <Card 
        title="24/7 Availability" 
        subtitle="Book appointments anytime, anywhere" 
        href="#" 
        Icon={MdMoreTime} /> */}

        <Card
          title="Promote Circular Use"
          subtitle="Gives waste a second life by reusing it in new construction and infrastructure projects. "
          href="#"
          Icon={BsRecycle}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#059212] to-[#9BEC00] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#059212] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#059212] group-hover:text-[#9BEC00] transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;