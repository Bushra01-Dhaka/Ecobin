
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";

const Faq = () => {

    const [menuOpen, setMenuOpen] = useState('false');
    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <div>
      <div className="text-center pb-10">
        <h1 className="text-4xl text-slate-800 font-semibold">FAQ</h1>
        <p className="py-4 text-[#059212] text-lg font-bold">
          frequently asked questions
        </p>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2  gap-6">
        <div className="p-6 border-1 rounded-2xl border-[#059212]">
          <div className="flex justify-between items-center">
            <p className="text-xl">What is Smart Waste Management System ?</p>
            {
                menuOpen ? <FiMinus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer"  />
                :
                 <HiOutlinePlus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer" />
            }
          </div>
          {
            menuOpen && <p className="py-6">
            A Smart Waste Management System is a technology-driven solution that
            utilizes sensors, IoT, and data analytics to optimize the collection
            and management of waste. It helps improve efficiency, reduce costs,
            and promote sustainable waste practices.
          </p>
          }
          
        </div>

        <div className="p-6 border-1 rounded-2xl border-[#059212]">
          <div className="flex justify-between items-center">
            <p className="text-xl">Which service plans does EcoBin provide ?</p>
           {
                menuOpen ? <FiMinus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer"  />
                :
                 <HiOutlinePlus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer" />
            }
          </div>
          {
            menuOpen &&  <p className="py-6">
            EcoBin offers both monthly and yearly service plans tailored to meet
            your needs. We provide waste disposal solutions for residential,
            industrial, commercial, and medical & pharmaceutical
            sectors—ensuring reliable and eco-friendly waste management for
            every type of user.
          </p>
          }
        </div>

        <div className="p-6 border-1 rounded-2xl border-[#059212]">
          <div className="flex justify-between items-center">
            <p className="text-xl">
              How does EcoBin handle Construction & Demolition waste ?
            </p>
           {
                menuOpen ? <FiMinus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer"  />
                :
                 <HiOutlinePlus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer" />
            }
          </div>
          {
            menuOpen &&         <p className="py-6">
            Building projects generate a large amount of waste, including
            debris, garbage, and rubble. EcoBin offers an efficient
            collection,separation, and recycling service to manage your
            construction and demolition waste responsibly. <br />
            You have two options: <br />
            <br />
            <strong>Regular Plan:</strong> EcoBin will collect your waste, and
            you’ll be charged for the Construction & Demolition waste service
            along with a transportation fee if you request instant service
            within 2 days.
            <br />
            <br />
            <strong>Mutual Benefit Plan:</strong> Book in advance—at least 15 days before your demolition or construction work. In this plan, you only pay the 50% of the transportation charge. No
            worker cost is applied under this plan.
          </p>
          }
   
        </div>

        <div className="p-6 border-1 rounded-2xl border-[#059212]">
          <div className="flex justify-between items-center">
            <p className="text-xl">
              How does EcoBin handle Land filling services?
            </p>
           {
                menuOpen ? <FiMinus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer"  />
                :
                 <HiOutlinePlus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer" />
            }
          </div>
          {
            menuOpen && <p className="py-6">
            EcoBin offers safe and eco-friendly land filling solutions to manage
            your waste responsibly. You can choose from two flexible service
            options: <br />
            <br />
            <strong>Regular Plan:</strong>If you need
            land filling within at least 2 days, you’ll need to pay the land filling service charge along with the material cost (for soil, rubbish, etc.).
            <br />
            <br />
            <strong>Mutual Benefit Plan:</strong> Book in advance—at least 15 days before your planned work or demolition. With this plan, you only pay the workers’ charge and transportation charge, No extra cost for land filling materials.
          </p>
          }
          
        </div>

        <div className="p-6 border-1 rounded-2xl border-[#059212]">
          <div className="flex justify-between items-center">
            <p className="text-xl"> How secure is the data collected by the system ?</p>
            {
                menuOpen ? <FiMinus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer"  />
                :
                 <HiOutlinePlus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer" />
            }
          </div>
          {
            menuOpen &&   <p className="py-6">
            Data security is a top priority. The system employs encryption protocols and follows industry best practices to ensure the confidentiality and integrity of the collected data. Access to the system is restricted to authorized personnel only.
          </p>
          }
        </div>

         <div className="p-6 border-1 rounded-2xl border-[#059212]">
          <div className="flex justify-between items-center">
            <p className="text-xl">Is the system scalable for different-sized municipalities or businesses ? </p>
           {
                menuOpen ? <FiMinus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer"  />
                :
                 <HiOutlinePlus onClick={onToggleMenu} className="text-2xl font-light cursor-pointer" />
            }
          </div>
          {
            menuOpen &&  <p className="py-6">
            The system may integrate automated sorting technologies to enhance recycling efficiency. These technologies use advanced sorting mechanisms to separate different types of waste, contributing to sustainable waste management practices.
          </p>
          }
         
        </div>





      </div>
    </div>
  );
};

export default Faq;

