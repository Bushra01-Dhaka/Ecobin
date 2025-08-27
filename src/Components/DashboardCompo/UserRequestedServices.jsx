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
