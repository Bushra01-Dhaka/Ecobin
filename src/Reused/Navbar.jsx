import React from 'react';
import logo from "../assets/images/logo.png"
import { Link } from 'react-router';
const Navbar = () => {
    return (
        <div className='md:max-w-screen-2xl mx-auto bg-white flex justify-between items-center px-10 border-b-2 '>

            <div className='flex justify-center items-center'>
                <img className='w-[80px] h-[80px] object-cover' src={logo} alt="" />
                <p className='font-bold text-3xl'>Eco<span className='text-[#059212]'>bin</span></p>
            </div>

            <div className=''>
                <ul className='flex items-center gap-[3vw] text-lg text-black hover:text-[#059212] font-semibold'>
                    <li className='text-lg text-black hover:text-[#059212] font-semibold'><Link>Home</Link></li>
                    <li className='text-lg text-black hover:text-[#059212] font-semibold'><Link>Services</Link></li>
                    <li className='text-lg text-black hover:text-[#059212] font-semibold'><Link>Services</Link></li>
                    <li className='text-lg text-black hover:text-[#059212] font-semibold'><Link>Pickup Request</Link></li>
                    <li className='text-lg text-black hover:text-[#059212] font-semibold'><Link>Shop</Link></li>
                    <li className='text-lg text-black hover:text-[#059212] font-semibold'><Link>Company</Link></li>
                    <li className='text-lg text-black hover:text-[#059212] font-semibold'><Link>Packages</Link></li>
                </ul>
            </div>

            <div>
                <Link><button className='btn bg-[#059212] text-white border-0 hover:bg-green-500 rounded-full'>Sign in</button></Link>
            </div>
        </div>
    );
};

export default Navbar;