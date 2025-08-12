import { Link } from "react-router";
import IntroBanner from "../CustomCompo/IntroBanner";
import PictureCards from "../CustomCompo/PictureCards";
import myPic from "../assets/images/self.jpeg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
// import nadirPic from "../assets/images/nadir.jpg";
import nadirPic from "../assets/images/maria.jpg";
import MutualBenefits from "./MutualBenefits";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUs = () => {
  return (
    <div>
      <PictureCards></PictureCards>
      {/* About US */}
      <div className="py-10 lg:px-10 px-6">
        <h2 className="text-2xl lg:text-3xl py-4 font-semibold text-center">
          Our Story
        </h2>
        <div className="md:w-[80%] text-lg mx-auto text-justify">
          <hr className="text-slate-300" />
          <p className="py-6">
            At EcoBin, we believe that a cleaner, greener future begins with
            smarter choices today. Our platform is designed to revolutionize
            waste management in Bangladesh by offering a fully digital,
            user-friendly system for scheduling waste pickups, promoting
            recycling, and supporting eco-friendly products. With role-based
            dashboards, real-time tracking, and AI-powered assistance, EcoBin
            connects households, workers, and city corporations to create a
            seamless and sustainable waste solution. We're not just managing
            waste — we're building a movement for a better tomorrow.
          </p>
          <p className="py-4">
            EcoBin is more than just a waste management platform — it’s a step
            toward a smarter, cleaner Bangladesh. Born from the need for
            reliable, affordable, and eco-friendly services, EcoBin empowers
            users to schedule pickups, reduce household waste, and support
            sustainability from the comfort of their homes. By combining modern
            technology with local action, we aim to transform everyday waste
            into a resource and create a culture where caring for the
            environment is simple, efficient, and accessible to all.
          </p>
        </div>
      </div>

      {/* Meet our Team Section */}
      <div className="py-20 px-6 bg-[#059212] text-white md:w-[80%] mx-auto rounded-md shadow-2xl">
        <h2 className="text-2xl lg:text-3xl py-4 font-semibold text-center">
          Meet Our Team Member
        </h2>
        <hr className="text-slate-300" />
        <p className="py-4  text-lg w-[90%] mx-auto">
          Our dedicated team of experts is passionate about waste management and
          sustainability. Each member brings a unique set of skills and
          experience to contribute to our mission of creating a cleaner
          environment.
        </p>

        <div className="flex flex-row-reverse justify-center items-center gap-4 mx-auto my-6">
          <div className="bg-white p-6 rounded-xl shadow-2xl text-slate-800 text-center w-[300px]">
            <img
              className="w-[200px] h-[200px] mx-auto rounded-full object-cover shadow-2xl"
              src={myPic}
              alt=""
            />
            <p className="pt-4 text-xl font-semibold">Humayra Anjum Bushra</p>
            <p className="">React Developer</p>
            <div className="flex justify-center items-center gap-4 py-4 text-3xl font-bold text-slate-800">
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaGithub />
              </Link>
              <Link to="https://www.linkedin.com/in/humayra1/">
                <FaLinkedin />
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-2xl text-slate-800 text-center w-[300px]">
            <img
              className="w-[200px] h-[200px] mx-auto rounded-full object-cover shadow-2xl"
              src={nadirPic}
              alt=""
            />
            {/* <p className="pt-4 text-xl font-semibold">Nadir Nibras</p> */}
             <p className="pt-4 text-xl font-semibold">Farah Sabrin Maria</p>
            <p className="">UI/UX Designer</p>
            <div className="flex justify-center items-center gap-4 py-4 text-3xl font-bold text-slate-800 ">
              <Link to="https://nadironthego.com/">
                <FaFacebook />
              </Link>
              <Link to="https://nadironthego.com/">
                <FaGithub />
              </Link>
              <Link to="https://nadironthego.com/">
                <FaLinkedin />
              </Link>
            </div>
          </div>

        </div>


      </div>

      <MutualBenefits></MutualBenefits>

      <IntroBanner></IntroBanner>
    </div>
  );
};

export default AboutUs;
