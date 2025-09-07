import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router";


const AllPaymentsTable = ({item, index, allCartPayments, setAllCartPayments}) => {
     const {_id, email, price, date, transactionId,cartIds, status} = item;
       const axiosPublic = useAxiosPublic();
       const navigate = useNavigate();

// update cart Payment status : Completed
const handleChangeCartStatus = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "The Service Provided Successfully!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#059212",
    cancelButtonColor: "#d33",
    confirmButtonText: "Products Delivery Completed",
  }).then((result) => {
    if (result.isConfirmed) {
      axiosPublic.patch(`/payments/${id}`, {
        status: "Completed", // updating status only
      })
      .then((res) => {   // ✅ fixed
        if (res.data.success) {
          Swal.fire({
            title: "Updated!",
            text: "Service status has been marked as Completed.",
            icon: "success",
          });
        }
        
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error!", "Failed to update status.", "error");
      });
    }
  });
};
    return (
         <tbody className="text-center border-0 border-b border-b-slate-300">
             <tr className="text-slate-800  font-semibold">
               <td>{index + 1}</td>
               <td>{email}</td>
               <td>{price} tk</td>
               <td>{date}</td>
               <td>{transactionId}</td>
               <td>{cartIds?.length}</td>
               <td>
                 <button onClick={() => {handleChangeCartStatus(_id)}} className="btn-sm rounded-md bg-green-700 text-white text-md p-1 hover:bg-green-800">
                  {status}
                 </button>
               </td>
             </tr>
           </tbody>
    );
};

export default AllPaymentsTable;