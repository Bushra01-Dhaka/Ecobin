import { MdOutlinePhoneInTalk } from "react-icons/md";
import img from "../../assets/images/d10.jpg";
import { GoHome, GoMail } from "react-icons/go";
import CustomButton from "../../Hooks/CustomButton";
import { FaMailBulk } from "react-icons/fa";
import MailButton from "./MailButton";

const ContactUs = () => {

  return (
    <div className="min-h-screen mx-auto p-10 lg:p-20 bg-green">
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          {/* left */}
      <div data-aos="fade-left" data-aos-duration="1500" className="flex-1">
        <img className="h-[90vh] rounded-md object-cover" src={img} alt="" />
      </div>

      {/* right */}
      <div data-aos="fade-right" data-aos-duration="1500" className="flex-1">
        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-800">
          Contact Us
        </h2>
        <p className="py-6 text-md">
          Whether it is a curious inquiry, a problem to solve, or a topic to
          discuss, share your thoughts, and let us engage in a meaningful
          conversation!
        </p>

        <div className="grid grid-cols-1 gap-6 space-y-6 pt-10">
          <div className="flex items-center gap-8">
            <GoHome className="text-3xl text-green-600 " />
            <p className="text-md">
              50/1 Black Wood Read, <br />
              North Street, Dhaka - 1206
            </p>
          </div>
          <div className="flex items-center gap-8">
            <MdOutlinePhoneInTalk className="text-3xl text-green-600 " />
            <p className="text-md">(+880) 174 000 666</p>
          </div>
          <div className="flex items-center gap-8">
            <GoMail className="text-3xl text-green-600 " />
            <p className="text-md">humayraanjum87@gmail.com</p>
          </div>
        </div>
      </div>
    </div>

      <div className="flex justify-center items-center  py-20">
         <MailButton></MailButton>
        </div>
    </div>
  );
};

export default ContactUs;
