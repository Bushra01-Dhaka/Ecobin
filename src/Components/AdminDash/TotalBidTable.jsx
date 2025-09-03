import { FaEdit } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const TotalBidTable = ({ item, index }) => {
  const {
    _id,
    poster_bid_id,
    poster_service_no,
    poster_service,
    poster_property,
    poster_price,
    poster_name,
    poster_email,
    poster_phone,
    poster_pic,
    poster_address,
    poster_truck_no,
    poster_date,
    poster_product_type,
    poster_service_type,
    poster_status,
    bidder_service_no,
    bidder_service,
    bidder_service_type,
    bidder_product_type,
    bidder_price,
    bidder_truck_no,
    bidder_name,
    bidder_email,
    bidder_phone,
    bidder_address,
    bidder_status,
    bidder_date,
    confirm_status,
  } = item;
  const axiosPublic = useAxiosPublic();
//    const handleToDisableBidderPost =  async() => {
//    try {
//     await axiosPublic.patch(`/bidPost/${bidder_service_no}`, {
//        status: "Bid Deal Successfully Done",
//      });
//      console.log("Bidder post disabled successfully");
//       Swal.fire({
//                position: "top-right",
//                icon: "success",
//                title: "Bidder Post is disabled Successfully",
//               showConfirmButton: false,
//                timer: 1500,
//              });
//    } catch (err) {
//      console.error("Error updating bid deal:", err);
//    }
//  };

const [bidderData, setBidderData] = useState([]);
useEffect(() => {
  axiosPublic.get(`/bidPost/${bidder_service_no}`)
  .then((res) => {
    setBidderData(res.data)
  })
})


const handleToDisableBidderPost =  () => {
   axiosPublic.patch(`/bidPost/${bidderData?._id}`, {
      status: "Bid Deal Successfully Done",
    });
    console.log("Bidder post disabled successfully");
     Swal.fire({
              position: "top-right",
              icon: "success",
              title: "Bidder Post is disabled Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
  
}
  return (
      <tbody className="text-center border-0 border-b border-b-slate-300">
        <tr className="text-slate-800 font-semibold">
          <td>{index + 1}</td>
          <td>{poster_email}</td>
          <td>{bidder_email}</td>
          <td>{poster_address}</td>
          <td>{bidder_address}</td>
          <td>{poster_status}</td>
          <td>{bidder_status}</td>
          <td>
            <button className="btn btn-sm bg-green-600 text-white"><IoIosMail className="text-lg"/> Poster</button>
            <button className="btn btn-sm bg-green-600 text-white"><IoIosMail className="text-lg"/> Bidder</button>
            </td>
          <td><button className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2 className="text-xl" /></button></td>
          <td>
          {
            bidderData?.status === "Bid Deal Successfully Done" ? 
            <button className="btn btn-disable"><FaEdit className="text-lg"/>Disabled</button>
            :
            <button onClick={handleToDisableBidderPost} className="btn btn-sm bg-green-600 text-white"><FaEdit className="text-lg"/>Disable</button>
          }
             
          </td>
          
        </tr>
      </tbody>
  );
};

export default TotalBidTable;