import img from "../assets/images/shop.jpg";

const Shop = () => {
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
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Visit Our Eco Shop </h1>
              <p className="mb-5">
                Explore Sustainable Solutions for Your Waste Management Needs
              </p>
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

      <div>
        <h2 className="text-2xl lg:text-3xl text-center py-6 font-semibold">
          Waste Less, Live More.
        </h2>
       
      </div>

    </div>
  );
};

export default Shop;
