import { FaEdit } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const TotalBidTable = ({ item, index, allDoneBidRequest, setAllDoneBidRequest }) => {
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
  const [posterServicePayment, setPosterServicePayment] = useState([]);
  const [bidderServicePayment, setBidderServicePayment] = useState([]);
  const [allBidPost, setAllBidPost] = useState([]);
  const axiosPublic = useAxiosPublic();

const [bidderData, setBidderData] = useState([]);
useEffect(() => {
  axiosPublic.get(`/bidPost/${bidder_service_no}`)
  .then((res) => {
    setBidderData(res.data)
  })
})

useEffect(() => {
  axiosPublic.get('/bidPost')
  .then((res) => {
    setAllBidPost(res.data)
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
  
};

useEffect(() => {
  axiosPublic.get(`/servicePayments/${poster_email}`)
  .then((res) => {
    setPosterServicePayment(res.data);
  })
},[])

useEffect(() => {
  axiosPublic.get(`/servicePayments/${bidder_email}`)
  .then((res) => {
    setBidderServicePayment(res.data);
  })
},[])


  const handleDelete = (id) => {
      Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#059212",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Bid!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosPublic.delete(`/users/${id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  console.log("Error :", res)
                  // ✅ update state without refetch
                  setAllDoneBidRequest(allDoneBidRequest?.filter((item) => item?._id !== id));
                  Swal.fire({
                    title: "Deleted!",
                    text: "Bid has been deleted.",
                    icon: "success",
                  });
                }
              });
            }
          });
  };

  const handleDeleteForPoster = (id) => {
    Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#059212",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Poster Bid Post!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosPublic.delete(`/bidPost/${id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  console.log("Error :", res)
                  // ✅ update state without refetch
                  setAllBidPost(allBidPost?.filter((item) => item?._id !== id));
                  Swal.fire({
                    title: "Deleted!",
                    text: "Bid Post has been deleted.",
                    icon: "success",
                  });
                }
              });
            }
          });
  }

    const handleDeleteForBidder = (id) => {
    Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#059212",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Bidder Bid Post!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosPublic.delete(`/bidPost/${id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  console.log("Error :", res)
                  // ✅ update state without refetch
                  setAllBidPost(allBidPost?.filter((item) => item?._id !== id));
                  Swal.fire({
                    title: "Deleted!",
                    text: "Bid Post has been deleted.",
                    icon: "success",
                  });
                }
              });
            }
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
          {
            (posterServicePayment[0]?.status === 'pending') || (bidderServicePayment[0]?.status === 'pending') ?
            <td className="text-green-600">Payment Successful</td> 
            :
            (posterServicePayment[0]?.status === 'Completed') && (bidderServicePayment[0]?.status === 'Completed') ?
            <td className="text-green-600 font-bold">Completed</td> 
            :
            <td>Payment Due</td>
          }
          
          <td>
          {
            bidderData?.status === "Bid Deal Successfully Done" ? 
            <button className="btn btn-disable"><FaEdit className="text-lg"/>Disabled</button>
            :
            (posterServicePayment[0]?.status === 'Completed') && (bidderServicePayment[0]?.status === 'Completed') ?
            <button className="btn btn-disable"><FaEdit className="text-lg"/>Disabled</button>
            :
            <button onClick={handleToDisableBidderPost} className="btn btn-sm bg-green-600 text-white"><FaEdit className="text-lg"/>Disable</button>
          }
             
          </td>

            <td><button onClick={() => {handleDelete(_id)}} className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2 className="text-xl" /></button></td>

            {
               (posterServicePayment[0]?.status === 'Completed') && (bidderServicePayment[0]?.status === 'Completed') &&
               <td className="flex flex-col justify-center items-center gap-2">
                <button onClick={() => {handleDeleteForBidder(bidderData?._id)}} className="btn text-red-700 hover:text-white hover:bg-red-800 p-2">Bidder Post </button>
                <button onClick={() => {handleDeleteForPoster(poster_bid_id)}} className="btn p-2  text-red-700 hover:text-white hover:bg-red-800">Poster Post </button>
               </td>
            }
          
        </tr>
      </tbody>
  );
};

export default TotalBidTable;