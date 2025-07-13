
import banner_img from "../../assets/images/5.png";
import { Link } from "react-router";
import { TiTick } from "react-icons/ti";
const CustomerSupportBanner = () => {
  return (
    <div className="lg:px-10 px-6 py-6 rounded-md">
      <div>
        <div
          className="hero min-h-screen rounded-md"
          style={{
            backgroundImage: `url(${banner_img})`,
            borderRadius: "6px",
          }}
        >
          <div className="hero-overlay bg-linear-to-b from-slate-950 to-[#059212] opacity-60 rounded-md"></div>
          <div className="hero-content  text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-extrabold">
                Become our customer & get special service
              </h1>
              <div className="flex justify-center gap-4 ">
                <Link>
                  <button className="btn border-white rounded-md text-white shadow-xl p-4 bg-[#059212] hover:bg-transparent transition-all duration-200 ">
                    <span>Contact Us</span>
                  </button>
                </Link>
                <Link to="/services">
                  <button className="btn bg-transparent border-white  text-white shadow-xl p-4 transition-all duration-200 hover:bg-[#059212] ">
                    <span>Explore Now</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-linear-to-r from-[#059212] to-[#9BEC00] text-white flex flex-col lg:flex-row justify-between items-start  lg:px-10 px-6 rounded-lg lg:max-w-[1200px] lg:relative top-[-120px] mx-auto ">
        <div className="lg:py-0 py-6">
          <p className="py-4 text-center lg:text-justify">Recycle Materials</p>
          <h2 className="lg:text-5xl text-4xl  text-center lg:text-justify  lg:max-w-[500px] font-bold">
            We collect, recycle & disposal all materials
          </h2>
        </div>
        <div className="flex justify-evenly items-start gap-8">
          <ul className="space-y-4">
            <li className="flex justify-center items-center gap-4">
              <TiTick className="text-4xl" />
              <p>Steel</p>
            </li>
            <li className="flex justify-center items-center gap-4">
              <TiTick className="text-4xl" />
              <p>Plastic</p>
            </li>
            <li className="flex justify-center items-center gap-4">
              <TiTick className="text-4xl" />
              <p>
                Light &<br />
                Bulb
              </p>
            </li>
            <li className="flex justify-center items-center gap-4">
              <TiTick className="text-4xl" />
              <p>
                Book &<br />
                Paper
              </p>
            </li>
            <li className="flex justify-center items-center gap-4">
              <TiTick className="text-4xl" />
              <p>Bottle</p>
            </li>
          </ul>

            <ul className="space-y-4">
              <li className="flex justify-center items-center gap-4">
                <TiTick className="text-4xl" />
                <p>Food & Grocery</p>
              </li>
              <li className="flex justify-center items-center gap-4">
                <TiTick className="text-4xl" />
                <p>Common waste</p>
              </li>
              <li className="flex justify-center items-center gap-4">
                <TiTick className="text-4xl" />
                <p>Newspaper</p>
              </li>
              <li className="flex justify-center items-center gap-4">
                <TiTick className="text-4xl" />
                <p>Glass</p>
              </li>
            </ul>
        </div>

         {/* for curve  */}
         <div class="curve">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
    </svg>
</div>

      </div>


    </div>
  );
};

export default CustomerSupportBanner;
