import React from 'react';
import { FaPhoneAlt, FaRegBell } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const Headline = () => {
    return (
        <div className='md:max-w-screen-2xl mx-auto bg-linear-to-r from-[#059212] to-[#F3FF90] p-4 text-white flex justify-between items-center px-6'>

          <div className='flex justify-center items-center gap-2'>
          <FaPhoneAlt className='text-xl' />
          <h2 className="text-lg hover:text-[#F3FF90] font-bold"> +880 174 000 666</h2>
          </div>

          <div className='flex justify-center items-center gap-4'>
          <FaRegBell className='text-2xl hover:text-green-500 cursor-pointer   text-[#059212] font-bold' />
          <IoCartOutline className='text-3xl hover:text-green-500 cursor-pointer text-[#059212] font-bold' />
          </div>

        </div>
    );
};

export default Headline;