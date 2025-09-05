import { useContext, useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { FaSackDollar, FaUserShield } from "react-icons/fa6";
import { ImHammer2 } from "react-icons/im";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";

const AdminDashContent = () => {
   const axiosPublic = useAxiosPublic();
  const [allUserData, setAllUserData] = useState([]);
  const [normalUser, setNormalUser] = useState([]);
  const [allBidPost, setAllBidPost] = useState([]);
  const [allModerators, setAllModerators] = useState([]);
  const [allCartPayments, setAllCartPayments] = useState([]);
  const [userServicePayment, setUserServicePayment] = useState([]);
  const {user} = useContext(AuthContext);
  

    useEffect(() => {
        axiosPublic.get(`/payments`)
        .then((res) => {
            setAllCartPayments(res.data);
        })
    },[axiosPublic, user?.email]);

      useEffect(() => {
      axiosPublic.get(`/servicePayments`)
      .then((res) => {
        setUserServicePayment(res.data);
      })
    },[axiosPublic])

    const totalCartPrice = allCartPayments.reduce( (total, item) => total + item.price,0);

     const totalServicePrice = userServicePayment.reduce( (total, item) => total + item.price,0)

  useEffect(() => {
    axiosPublic.get(`/users`).then((res) => {
      setAllUserData(res.data);
      const user = allUserData.filter((item) => item?.status === "user");
      const moderator = allUserData.filter((item) => item?.status === "Moderator")
      setNormalUser(user);
      setAllModerators(moderator);
    });
  });

  useEffect(() => {
    axiosPublic.get(`/doneBid`)
    .then((res) => {
      setAllBidPost(res.data);
    })
  }, [])

  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-center ">
            Welcome to Dashboard
          </h2>

          <div className="pt-20 flex justify-center gap-4 items-center">
            <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
              <p>
                {" "}
                <FaUsers className="text-5xl mx-auto text-green-600" />
              </p>
              <p className="py-2 text-2xl text-center">Total Users</p>
              <p className="text-2xl mx-auto font-bold text-green-600">{normalUser?.length}</p>
            </div>
            <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
              <p>
                {" "}
                <FaUserShield  className="text-5xl mx-auto text-green-600" />
              </p>
              <p className="py-2 text-2xl text-center">Total Moderator</p>
              <p className="text-2xl mx-auto font-bold text-green-600">{allModerators?.length}</p>
            </div>
            <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
              <p>
                {" "}
                <ImHammer2 className="text-5xl mx-auto text-green-600" />
              </p>
              <p className="py-2 text-2xl text-center">Total Bids</p>
              <p className="text-2xl mx-auto font-bold text-green-600">{allBidPost?.length}</p>
            </div>
            <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
              <p>
                {" "}
                <FaSackDollar className="text-5xl mx-auto text-green-600" />
              </p>
              <p className="py-2 text-2xl text-center">Total Payments</p>
              <p className="text-2xl mx-auto font-bold text-green-600">{allCartPayments?.length}</p>
            </div>

          </div>

          <div className="p-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
               <div className="bg-linear-to-r hover:bg-linear-to-l pointer-cursor from-[#1a6322] to-[#059212] p-6 py-4 h-[200px] flex justify-center items-center rounded-md shadow-2xl text-center">
                <h3 className="text-3xl font-bold text-white">Service Payment <br /> {totalServicePrice} tk</h3>
               </div>

               <div className="bg-linear-to-r hover:bg-linear-to-l from-orange-500 to-orange-400 p-6 py-4 h-[200px] flex justify-center pointer-cursor items-center rounded-md shadow-2xl text-center">
                <h3 className="text-3xl font-bold text-white">Cart Payment <br />{totalCartPrice} tk</h3>
               </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AdminDashContent;
