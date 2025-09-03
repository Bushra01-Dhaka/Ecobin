// import { ImBin2 } from "react-icons/im";
// import { IoIosMail } from "react-icons/io";

// const TotalBidTable = ({ item, index }) => {
//   const {
//     _id,
//     poster_bid_id,
//     poster_service_no,
//     poster_service,
//     poster_property,
//     poster_price,
//     poster_name,
//     poster_email,
//     poster_phone,
//     poster_pic,
//     poster_address,
//     poster_truck_no,
//     poster_date,
//     poster_product_type,
//     poster_service_type,
//     poster_status,
//     bidder_service_no,
//     bidder_service,
//     bidder_service_type,
//     bidder_product_type,
//     bidder_price,
//     bidder_truck_no,
//     bidder_name,
//     bidder_email,
//     bidder_phone,
//     bidder_address,
//     bidder_status,
//     bidder_date,
//     confirm_status,
//   } = item;
//   return (
//       <tbody className="text-center border-0 border-b border-b-slate-300">
//         <tr className="text-slate-800 font-semibold">
//           <td>{index + 1}</td>
//           <td>{bidder_email}</td>
//           <td>{poster_email}</td>
//           <td>{poster_address}</td>
//           <td>{bidder_address}</td>
//           <td>{poster_status}</td>
//           <td>{bidder_status}</td>
//           <td>
//             <button className="btn btn-sm bg-green-600 text-white"><IoIosMail className="text-lg"/> Poster</button>
//             <button className="btn btn-sm bg-green-600 text-white"><IoIosMail className="text-lg"/> Bidder</button>
//             </td>
//           <td><button className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2 className="text-xl" /></button></td>
//         </tr>
//       </tbody>
//   );
// };

// export default TotalBidTable;










// email diye kora eta 

// import { ImBin2 } from "react-icons/im";
// import { IoIosMail } from "react-icons/io";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";

// const TotalBidTable = ({ item, index }) => {
//   const {
//     _id,
//     poster_bid_id,
//     poster_service_no,
//     poster_service,
//     poster_property,
//     poster_price,
//     poster_name,
//     poster_email,
//     poster_phone,
//     poster_pic,
//     poster_address,
//     poster_truck_no,
//     poster_date,
//     poster_product_type,
//     poster_service_type,
//     poster_status,
//     bidder_service_no,
//     bidder_service,
//     bidder_service_type,
//     bidder_product_type,
//     bidder_price,
//     bidder_truck_no,
//     bidder_name,
//     bidder_email,
//     bidder_phone,
//     bidder_address,
//     bidder_status,
//     bidder_date,
//     confirm_status,
//   } = item;

//   const axiosPublic = useAxiosPublic();

//    const handleSendEmail = async (poster, bidder) => {
//     try {
//       const res = await axiosPublic.post("/sendEmail", { poster, bidder });
//       if (res.data.success) {
//         // alert("📩 Emails sent successfully!");
//          Swal.fire({
//                   title: "Deleted!",
//                   text: "📩 Emails sent successfully!",
//                   icon: "success", 
//                 });
//       } else {
//         alert("Failed to send email!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong!");
//     }
//   };


//   return (
//       <tbody className="text-center border-0 border-b border-b-slate-300">
//         <tr className="text-slate-800 font-semibold">
//           <td>{index + 1}</td>
//           <td>{bidder_email}</td>
//           <td>{poster_email}</td>
//           <td>{poster_address}</td>
//           <td>{bidder_address}</td>
//           <td>{poster_status}</td>
//           <td>{bidder_status}</td>
//           <td>
//             {/* <button className="btn btn-sm bg-green-600 text-white"><IoIosMail className="text-lg"/> Poster</button>
//             <button className="btn btn-sm bg-green-600 text-white"><IoIosMail className="text-lg"/> Bidder</button> */}
             
//               <button
//             className="btn bg-green-600 text-white"
//             onClick={() =>
//               handleSendEmail(
//                 {
//                   name: item.poster_name,
//                   email: item.poster_email,
//                   phone: item.poster_phone,
//                   address: item.poster_address,
//                   service: item.poster_service,
//                   product: item.poster_product_type,
//                   truck_no: item.poster_truck_no,
//                   price: item.poster_price,
//                   date: item.poster_date,
//                 },
//                 {
//                   name: item.bidder_name,
//                   email: item.bidder_email,
//                   phone: item.bidder_phone,
//                   address: item.bidder_address,
//                   service: item.bidder_service,
//                   product: item.bidder_product_type,
//                   truck_no: item.bidder_truck_no,
//                   price: item.bidder_price,
//                   date: item.bidder_date,
//                 }
//               )
//             }
//           >
//             <IoIosMail className="text-2xl" /> Send Emails
//           </button>

//           </td>

            
//           <td><button className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2 className="text-xl" /></button></td>
//         </tr>
//       </tbody>
//   );
// };

// export default TotalBidTable;

