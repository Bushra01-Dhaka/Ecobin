import { Link } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

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
  const [currentUser, setCurrentUser] = useState([]);
  const [doneBidData, setDoneBidData] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/users/${email}`).then((res) => {
      setCurrentUser(res.data);
    });
  }, []);

  // Done Bid post theke bidder er bidder_service_id collect korbo , jate ultimately 
  // Bidder er dewa post ta status change hoy and deactivate hoy
  useEffect(() => {
    axiosPublic.get(`/doneBid/${_id}`)
    .then((res) => {
        setDoneBidData(res.data);
        // update the Bidder status to Bid Deal Successfully Done
         axiosPublic.patch(`/bidPost/${doneBidData?.bidder_service_no}`, {
          status: "Bid Deal Successfully Done",
        });

    })
  },[]);

  console.log("Done Bid Data: ", doneBidData);







  //  update status after posted for bid
  const handlePostService = async () => {
    try {
      await axiosPublic.patch(`/requestServices/${_id}`, {
        status: "Service Posted",
      });
      
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // Bid Post Handle
  const handleBidPost = () => {
    // ✅ Disable button after success
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
      status: status,
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
        // navigate("/dashboard/exploreBidPosts");
      }
    });
  };

  console.log("Status: ", status);

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

        {/* <p className="text-lg py-2">
          <span className="font-semibold">Status:</span>{" "}
          <span className="rounded-full text-black font-bold text-xs p-2 bg-slate-400">
            {item?.status}
          </span>
        </p> */}
        {/* <p className="font-semibold text-lg py-2">Status: {isPosted ? <span className="text-[#059212]">Service Posted</span> : status}</p> */}
        <p className="font-semibold text-lg py-2">
          Status: <span className="text-[#059212]">{item?.status}</span>
        </p>

        {/* {item?.service == "Mutual Benefit Program" ||
        item?.service == "Construction & Demolition Waste" ||
        item?.service == "Land Filling Service" ? (
         <div onClick={handlePostService}>
           <button
            onClick={handleBidPost}
            disabled={item?.status === "Service Posted"}
            className={`btn btn-block btn-info bg-gradient-to-r from-[#1a6322] to-[#059212] rounded-md text-white h-[40px] mt-6 ${
              item?.status === "Service Posted"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gradient-to-l"
            }`}
          >
            {item?.status === "Service Posted"
              ? "Already Posted"
              : "Post Now For Bid"}
          </button>
         </div>
        ) : (
          <Link>
            <button className="btn btn-block btn-info bg-gradient-to-r from-[#1a6322] to-[#059212] ...  rounded-md text-white  h-[40px]  hover:bg-gradient-to-l border-0 hover:text-white mt-6">
             Pay Now
            </button>
          </Link>
        )} */}

        {item?.service == "Mutual Benefit Program" ||
        item?.service == "Construction & Demolition Waste" ||
        item?.service == "Land Filling Service" ? (
          <>
            {item?.status === "Bid Deal Successfully Done" ? (
              // ✅ Show Pay Now when deal is done
              <Link to="/dashboard/payment">
                <button className="btn btn-block btn-info bg-gradient-to-r from-[#1a6322] to-[#059212] rounded-md text-white h-[40px] mt-6 hover:bg-gradient-to-l">
                  Pay Now
                </button>
              </Link>
            ) : (
              // ✅ Default: Post for Bid button
              <div onClick={handlePostService}>
                <button
                  onClick={handleBidPost}
                  disabled={item?.status === "Service Posted"}
                  className={`btn btn-block btn-info bg-gradient-to-r from-[#1a6322] to-[#059212] rounded-md text-white h-[40px] mt-6 ${
                    item?.status === "Service Posted"
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gradient-to-l"
                  }`}
                >
                  {item?.status === "Service Posted"
                    ? "Already Posted"
                    : "Post Now For Bid"}
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/dashboard/payment">
            <button className="btn btn-block btn-info bg-gradient-to-r from-[#1a6322] to-[#059212] rounded-md text-white h-[40px] mt-6 hover:bg-gradient-to-l">
              Pay Now
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserEachRequestService;
