import React from 'react';
import img1 from "../../assets/images/f1.png"
import img2 from "../../assets/images/f2.png"
import img3 from "../../assets/images/f3.png"

const Features = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-evenly items-center gap-6  text-center min-h-[100vh] px-6 md:px-10 py-10 lg:py-0'>
            <div className=' hover:bg-green-200 hover:opacity-80 hover:rounded-t-[50px] transition-all duration-500'>
                <div>
                   <img className='w-[100px] h-[100px] object-cover mx-auto' src={img1} alt="" />
                </div>
                <h2 className="text-xl font-bold">Waste Collection</h2>
                <p className="py-4 text-lg lg:w-[80%] mx-auto">Easily book waste pickups at your convenience with just a few clicks — EcoBin ensures timely, reliable service for every home and business.</p>
            </div>

            <div className=' hover:bg-green-200 hover:opacity-80 hover:rounded-t-[50px] transition-all duration-500'>
            <div>
                <div>
                <img className='w-[100px] h-[100px] object-cover mx-auto' src={img2} alt="" />
                </div>
                <h2 className="text-xl font-bold">Realtime Pickup Request</h2>
                <p className="py-4 text-lg lg:w-[80%] mx-auto">Easily book waste pickups at your convenience with just a few clicks — EcoBin ensures timely, reliable service for every home and business.</p>
            </div>
            </div>

            <div className=' hover:bg-green-200 hover:opacity-80 hover:rounded-t-[50px] transition-all duration-500'>
            <div>
                <div>
                <img className='w-[100px] h-[100px] object-cover mx-auto' src={img3} alt="" />
                </div>
                <h2 className="text-xl font-bold">Sustainable Shop</h2>
                <p className="py-4 text-lg lg:w-[80%] mx-auto">Easily book waste pickups at your convenience with just a few clicks — EcoBin ensures timely, reliable service for every home and business.</p>
            </div>
            </div>
        </div>
    );
};

export default Features;