import img from "../assets/images/d4.jpg"
import MutualBenefits from "./MutualBenefits";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Packages = () => {
    return (
        <div>
             <div className="relative ">
                    <div
                      className="hero min-h-[80vh]"
                      style={{
                        backgroundImage: `url(${img})`,
                      }}
                    >
                      <div className="hero-overlay"></div>
                      <div className="hero-content text-neutral-content text-center">
                        <div data-aos="zoom-out" className="max-w-md">
                          <h1 className="mb-5 text-5xl font-bold">Our Packages</h1>
                          <p className="mb-5">Choose the Plan That Fits Your Needs and Budget</p>
                        </div>
                      </div>
                    </div>
            
                    <div class="wave">
                      <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                          class="shape-fill"
                        ></path>
                      </svg>
                    </div>
             </div>

             <MutualBenefits></MutualBenefits>
        </div>
    );
};

export default Packages;