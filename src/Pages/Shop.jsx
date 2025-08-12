import { useEffect, useRef, useState } from "react";
import img from "../assets/images/shop.jpg";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const btnRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:5000/shop`)
      .then((res) => res.json())
      .then((data) => {
        setShopItems(data);
      });
  }, []);
  console.log(shopItems);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // or any number you want per page

  // Calculate total pages
  const totalPages = Math.ceil(shopItems.length / itemsPerPage);

  // Slice items for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = shopItems.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="bg-linear-to-b from-white to-green-100">
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

      <div className="lg:p-10 p-6 flex justify-between items-start gap-6">
        {/* left side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((item) => (
            <div key={item.product_no}>
              <div className="bg-white p-4 w-[320px] rounded-md shadow-2xl overflow-hidden">
                <img
                  className="h-[400px] w-[300px] rounded-md object-cover cursor-pointer"
                  src={item?.product_image}
                  alt=""
                />

                <h3 className="py-4 text-lg text-[#059212] font-bold">
                  {item?.product_name}
                </h3>

                <p className="text-slate-700">{item?.product_intro}</p>

                <Link to="">
                  <button
                    className="btn-block p-2 myBtn bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold text-white hover:border-0  rounded-lg my-4"
                    onMouseMove={handleMouseMove}
                    ref={btnRef}
                  >
                    <span className="text-center">
                      Details <FaArrowRight className="inline" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* right side */}
        <div>
          <div className="bg-green-50 p-4 w-full h-[100px] flex justify-center items-center rounded-md shadow-2xl">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow" placeholder="Search" />
            </label>
          </div>

          <div className="my-6 py-6 bg-green-50 rounded-md shadow-2xl grid grid-cols-1 gap-4">
            <div className="px-4 py-2 ">
              <p className="text-md rounded-md  bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold py-4 text-white">
                All Products
              </p>
            </div>

            <div className="px-4 py-2 ">
              <p className="text-md rounded-md  bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold py-4 text-white">
                Waste Bins
              </p>
            </div>

            <div className="px-4 py-2 ">
              <p className="text-md rounded-md  bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold py-4 text-white">
                Home Decors
              </p>
            </div>

            <div className="px-4 py-2 ">
              <p className="text-md rounded-md  bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold py-4 text-white">
                Accessories
              </p>
            </div>

            <div className="px-4 py-2 ">
              <p className="text-md rounded-md  bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold py-4 text-white">
                Personal Use
              </p>
            </div>

            <div className="px-4 py-2 ">
              <p className="text-md rounded-md  bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold py-4 text-white">
                Kitchen Items
              </p>
            </div>

            <div className="px-4 py-2 ">
              <p className="text-md rounded-md  bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold py-4 text-white">
                Electronics
              </p>
            </div>

            <div className="px-4 py-2 ">
              <p className="text-md rounded-md  bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold py-4 text-white">
                Stationery
              </p>
            </div>

            <div className="px-4 py-2 ">
              <p className="text-md rounded-md  bg-linear-to-r from-[#059212] to-[#9BEC00] text-center font-semibold py-4 text-white">
                Cleaning Supplies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination effect */}
      <div className="flex justify-center mt-8 pb-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-md border ${
              currentPage === i + 1
                ? "bg-[#059212] text-white"
                : "bg-white text-[#059212] border-[#059212]"
            } hover:bg-[#059212] hover:text-white`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default Shop;
