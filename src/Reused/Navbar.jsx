import React, { useState, useRef } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import { MdClose, MdMenu } from "react-icons/md";
import "./customBtn.css"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState("false");
  const btnRef = useRef(null);
  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--x', `${x}px`);
    btnRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="md:max-w-screen-2xl mx-auto bg-slate-50 flex justify-between items-center px-6 md:px-10 shadow-lg lg:py-2 py-4">
      <div className="flex justify-center items-center">
        <img className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] object-cover" src={logo} alt="" />
        <p className="font-bold text-3xl">
          Eco<span className="text-[#059212]">bin</span>
        </p>
      </div>

      <div className={`md:static md:min-h-fit absolute ${menuOpen ? 'top-[30%]' : 'top-[-120%]'} left-0 bg-slate-50 md:w-auto w-full flex items-center px-16 md:py-0 py-10 transition-all duration-3000 z-10`}>
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-8 text-lg text-black hover:text-[#059212] font-semibold">
          <li className="text-md text-black hover:text-[#059212] font-semibold">
            <Link>Home</Link>
          </li>
          <li className="text-md text-black hover:text-[#059212] font-semibold">
            <Link>Services</Link>
          </li>

          <li className="text-md text-black hover:text-[#059212] font-semibold">
            <Link>Pickup Request</Link>
          </li>
          <li className="text-md text-black hover:text-[#059212] font-semibold">
            <Link>Shop</Link>
          </li>
          <li className="text-md text-black hover:text-[#059212] font-semibold">
            <Link>Company</Link>
          </li>
          <li className="text-lg text-black hover:text-[#059212] font-semibold">
            <Link>Packages</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center gap-2">
        <Link>
          <button className="btn myBtn font-light bg-linear-to-r from-[#059212] to-[#9BEC00] text-white hover:border-0  rounded-full"
           onMouseMove={handleMouseMove}
           ref={btnRef}
          >
            <span>Sign in</span>
          </button>
        </Link>

        {menuOpen ? (
          <MdClose
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden text-slate-900"
          />
        ) : (
          <MdMenu
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden text-slate-900"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
