import { Link, useNavigate } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import {  useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserEachRequestService = ({ item, index }) => {
  const {
    _id,
    service,
    property,
    price,
    name,
    date,
    email,
    phone,
    address,
    truck_no,
    product_type,
    service_type,
  } = item;
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
   // ✅ State to disable button after posting
  const [isPosted, setIsPosted] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/users/${email}`)
    .then((res) => {
        setCurrentUser(res.data);
    })
  },[])


  // Bid Post Handle
  const handleBidPost = () => {
     // ✅ Disable button after success
        setIsPosted(true);
    const bidPostInfo = {
      service_no: _id,
      service: service,
      property: property,
      price: price,
      poster_name: name,
      poster_email: email,
      poster_phone: phone,
      poster_pic: currentUser?.photo,
      poster_address: address,
      truck_no: truck_no,
      date: date,
      product_type: product_type,
      service_type: service_type,
      status: "Service Posted",
    };
    console.log("Click: ", bidPostInfo);

    axiosPublic.post(`/bidPost`, bidPostInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Post into Mutual Bidding Page",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/exploreBidPosts");
      }
    });
  };

  return (
    <div
      data-aos="fade-in"
      className="p-6 border-2 border-[#059212] rounded-lg shadow-2xl"
    >
      <h3 className="text-2xl inline py-2 px-4 text-white rounded-md bg-[#059212]">
        {index + 1}
      </h3>
      <div className="py-4">
        <p className="text-lg py-2">
          <span className="font-semibold">Service Name:</span> {item?.service}
        </p>

        <p className="text-lg py-2">
          <span className="font-semibold">Property Type:</span> {item?.property}
        </p>

        {item?.truck_no && (
          <p className="text-lg py-2">
            <span className="font-semibold">Truck:</span> {item?.truck_no}
          </p>
        )}
        {item?.product_type && (
          <p className="text-lg py-2">
            <span className="font-semibold">Product Type:</span>{" "}
            {item?.product_type}
          </p>
        )}

        {item?.service_type && (
          <p className="text-lg py-2">
            <span className="font-semibold">Service Type:</span>{" "}
            {item?.service_type}
          </p>
        )}

        {item?.service == "Mutual Benefit Program" ||
        item?.service == "Construction & Demolition Waste" ||
        item?.service == "Land Filling Service" ? (
          <></>
        ) : (
          <p className="text-lg py-2">
            <span className="font-semibold">Container Size:</span>{" "}
            {item?.container_size}
          </p>
        )}

        <p className="text-lg py-2">
          <span className="font-semibold">Address:</span> {item?.address}
        </p>

        <p className="text-lg py-2">
          <span className="font-semibold">Price:</span> {item?.price} tk
        </p>

        <p className="text-lg py-2">
          <span className="font-semibold">Booking Date:</span> {item?.date}
        </p>

        <p className="text-lg py-2">
          <span className="font-semibold">Status:</span>{" "}
          <span className="rounded-full text-black font-bold text-xs p-2 bg-slate-400">
            {item?.status} Requested
          </span>
        </p>

        {item?.service == "Mutual Benefit Program" ||
        item?.service == "Construction & Demolition Waste" ||
        item?.service == "Land Filling Service" ? (
         <Link>
            <button
              onClick={handleBidPost}
              disabled={isPosted} // ✅ Disable after posting
              className={`btn btn-block btn-info bg-gradient-to-r from-[#1a6322] to-[#059212] rounded-md text-white h-[40px] mt-6 ${
                isPosted ? "opacity-50 cursor-not-allowed" : "hover:bg-gradient-to-l"
              }`}
            >
              {isPosted ? "Already Posted" : "Post Now For Bid"}
            </button>
          </Link>
        ) : (
          <Link>
            <button className="btn btn-block btn-info bg-gradient-to-r from-[#1a6322] to-[#059212] ...  rounded-md text-white  h-[40px]  hover:bg-gradient-to-l border-0 hover:text-white mt-6">
              Pay Now
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserEachRequestService;
