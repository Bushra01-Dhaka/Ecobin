import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaSackDollar } from "react-icons/fa6";
import { ImHammer2 } from "react-icons/im";
import { FaUsers, FaUserShield } from "react-icons/fa";
import { FiGitPullRequest } from "react-icons/fi";
import { BsPostcard } from "react-icons/bs";
import { AuthContext } from "../../Provider/AuthProvider";


const ModeratorDashContent = () => {
     const axiosPublic = useAxiosPublic();
  const [allUserData, setAllUserData] = useState([]);
  const [normalUser, setNormalUser] = useState([]);
  const [allBidPost, setAllBidPost] = useState([]);
  const [requestService, setRequestService] = useState([]);
  const [userPost, setUserPost] = useState([]);
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
  
       const totalServicePrice = userServicePayment.reduce( (total, item) => total + item.price,0);



  useEffect(() => {
    axiosPublic.get(`/doneBid`)
    .then((res) => {
      setAllBidPost(res.data);
    })

  }, [])

  useEffect(() => {
     axiosPublic.get(`/requestServices`)
     .then((res) => {
        setRequestService(res.data)
     })
  })

  useEffect(() => {
    axiosPublic.get(`/bidPost`)
     .then((res) => {
        setUserPost(res.data)
     })
  })
    return (
         <div>
              <div className="flex justify-center items-center">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-center ">
                    Welcome to Dashboard
                  </h2>
        
                  <div className="pt-20 flex justify-center gap-4 items-center">
                    <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg hover:bg-linear-to-r from-yellow-500 to-orange-400 hover:border-0 lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
                      <p>
                        {" "}
                        <FiGitPullRequest className="text-5xl mx-auto text-green-600" />
                      </p>
                      <p className="py-2 text-2xl text-center">Service Requests</p>
                      <p className="text-2xl mx-auto font-bold text-green-600">{requestService?.length}</p>
                    </div>
                    <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg hover:bg-linear-to-r from-yellow-500 to-orange-400 hover:border-0 lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
                      <p>
                        {" "}
                        <BsPostcard  className="text-5xl mx-auto text-green-600" />
                      </p>
                      <p className="py-2 text-2xl text-center">Bid Posts</p>
                      <p className="text-2xl mx-auto font-bold text-green-600">{userPost?.length}</p>
                    </div>
                    <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg hover:bg-linear-to-r from-yellow-500 to-orange-400 hover:border-0 lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
                      <p>
                        {" "}
                        <ImHammer2 className="text-5xl mx-auto text-green-600" />
                      </p>
                      <p className="py-2 text-2xl text-center">Total Bids</p>
                      <p className="text-2xl mx-auto font-bold text-green-600">{allBidPost?.length}</p>
                    </div>
                    <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg hover:bg-linear-to-r from-yellow-500 to-orange-400 hover:border-0 lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
                      <p>
                        {" "}
                        <FaSackDollar className="text-5xl mx-auto text-green-600" />
                      </p>
                      <p className="py-2 text-2xl text-center">Total Payments</p>
                      <p className="text-2xl mx-auto font-bold text-green-600">{(allCartPayments?.length) + (userServicePayment?.length)}</p>
                    </div>
        
                  </div>
                </div>
              </div>
            </div>
    );
};

export default ModeratorDashContent;