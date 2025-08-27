import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router";
import UserEachRequestService from "./UserEachRequestService";

const UserRequestedServices = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const [bookingData, setBookingData] = useState([]);

useEffect(() => {
  if (user?.email) {
    setBookingData([]); // Clear previous data immediately when email changes
    axiosPublic
      .get(`/requestServices?email=${user.email}`)
      .then((res) => {
        setBookingData(res.data);
      })
      .catch((error) => {
        console.error("Error in booking: ", error);
      });
  } else {
    setBookingData([]); // No logged-in user = no data
  }
}, [axiosPublic, user?.email]);



  return (
    <div>
        <div>
        <h2 className="text-2xl lg:text-4xl font-semibold p-6 border-b border-0 text-slate-800 text-center ">
          Total Requested Service: {bookingData?.length}
        </h2>
      </div>

      <div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-10 py-6">
            {/* {
                bookingData.map((item,index) => <div 
                key={item._id}
                item={item}
                >
                    <div data-aos="fade-in" className="p-6 border-2 border-[#059212] rounded-lg shadow-2xl">
                        <h3 className="text-2xl inline py-2 px-4 text-white rounded-md bg-[#059212]">{index+1}</h3>
                      <div className="py-4">

                        <p className="text-lg py-2"><span className="font-semibold">Service Name:</span>  {item?.service}</p>

                        <p className="text-lg py-2"><span className="font-semibold">Property Type:</span>  {item?.property}</p>

                        {
                          item?.truck_no &&  <p className="text-lg py-2"><span className="font-semibold">Truck:</span>  {item?.truck_no}</p>
                        }
                        {
                          item?.product_type && <p className="text-lg py-2"><span className="font-semibold">Product Type:</span>  {item?.product_type}</p>
                        }

                        {
                          item?.service_type &&   <p className="text-lg py-2"><span className="font-semibold">Service Type:</span>  {item?.service_type}</p>
                        }

                        {
                          item?.service == "Mutual Benefit Program" || item?.service == "Construction & Demolition Waste" || item?.service == "Land Filling Service" ? <></> :
                           <p className="text-lg py-2"><span className="font-semibold">Container Size:</span>  {item?.container_size}</p>
                        }


                        <p className="text-lg py-2"><span className="font-semibold">Address:</span>  {item?.address}</p>

                        <p className="text-lg py-2"><span className="font-semibold">Price:</span>  {item?.price} tk</p>

                        <p className="text-lg py-2"><span className="font-semibold">Booking Date:</span>  {item?.date}</p>

                        <p className="text-lg py-2"><span className="font-semibold">Status:</span>  <span className="rounded-full text-black font-bold text-xs p-2 bg-slate-400">{item?.status} Requested</span></p>

                         {
                          item?.service == "Mutual Benefit Program" || item?.service == "Construction & Demolition Waste" || item?.service == "Land Filling Service" ? 
                          <Link><button 
                          className="btn btn-block btn-info bg-gradient-to-r from-[#1a6322] to-[#059212] ...  rounded-md text-white  h-[40px]  hover:bg-gradient-to-l border-0 hover:text-white mt-6"
                        >Post Now For Bid</button></Link>
                           :
                          <Link><button 
                          className="btn btn-block btn-info bg-gradient-to-r from-[#1a6322] to-[#059212] ...  rounded-md text-white  h-[40px]  hover:bg-gradient-to-l border-0 hover:text-white mt-6"
                        >Pay Now</button></Link> 
                        }

                        </div>
                    </div>
                </div>)
            } */}
            {
                bookingData.map((item,index) => <UserEachRequestService
                key={item?._id}
                index={index}
                item={item}
                ></UserEachRequestService>)
            }
        </div>
      </div>

    </div>

  );
};

export default UserRequestedServices;
