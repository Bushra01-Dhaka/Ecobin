import { ImBin2 } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AllServiceRequestTable = ({item, index, requestServices, setRequestServices}) => {
    const {
   _id,
   service,
   property,
   container_size,
   price,
   name,
   date,
   email,
   phone,
   address,
   status,
   truck_no,
   product_type,
   service_type,
    } = item;

      const axiosPublic = useAxiosPublic();

     const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#059212",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosPublic.delete(`/requestServices/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                console.log("Error :", res)
                // ✅ update state without refetch
                setRequestServices(requestServices?.filter((item) => item?._id !== id));
                Swal.fire({
                  title: "Deleted!",
                  text: "User Service Request has been deleted.",
                  icon: "success", 
                });
              }
            });
          }
        });
      };
    
    return (
         <tbody className="text-center border-0 border-b border-b-slate-300">
              <tr className="text-slate-800 font-semibold">
                <td>{index + 1}</td>
                <td>{email}</td>
                <td>{service}</td>
                <td>{property}</td>
                <td>{container_size}</td>
                <td>{truck_no}</td>
                <td>{price} tk</td>
                <td>{date}</td>
                <td>{status}</td>
                <td>
                  <button onClick={() => {handleDelete(_id)}} className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800">
                    <ImBin2 className="text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
    );
};

export default AllServiceRequestTable;