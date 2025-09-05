import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DashContent = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const [bookingData, setBookingData] = useState([]);
  //   const [activeUser, setActiveUser] = useState([]);
  console.log(user?.email);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
  if (user?.email) {
    setCartItems([]); // Clear previous data immediately when email changes
    axiosPublic
      .get(`/cart?email=${user.email}`)
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((error) => {
        console.error("Error in booking: ", error);
      });
  } else {
    setCartItems([]); // No logged-in user = no data
  }
}, [axiosPublic, user?.email]);
  

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
        <h2 className="text-2xl lg:text-4xl font-semibold p-6 border-b border-0 text-slate-800 text-center lg:text-justify">
          Welcome Back, {user?.displayName}!
        </h2>
      </div>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-10 px-20">
        <div>
          <h2 className="text-2xl font-semibold text-center  p-6 bg-orange-400 border-2 text-white rounded-md shadow-2xl">
            {" "}
            Total Service Request: {bookingData?.length}
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-center p-6 bg-[#059212] text-white border-2 border-[#059212] rounded-md shadow-2xl">
            {" "}
            Total My Cart: {cartItems?.length}
          </h2>
        </div>
        {/* <div>
          <h2 className="text-2xl font-semibold text-center text-slate-800 p-6 border-2 border-[#059212] rounded-md shadow-2xl">
            {" "}
            Total Order:
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default DashContent;
