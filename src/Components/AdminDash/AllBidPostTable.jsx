import { ImBin2 } from "react-icons/im";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AllBidPostTable = ({ item, index, allBidPost, setAllBidPost }) => {
  const {
    _id,
    service_no,
    service,
    property,
    price,
    poster_name,
    poster_email,
    poster_phone,
    poster_pic,
    poster_address,
    truck_no,
    date,
    product_type,
    service_type,
    status,
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
              axiosPublic.delete(`/bidPost/${id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  console.log("Error :", res)
                  // ✅ update state without refetch
                  setAllBidPost(allBidPost?.filter((item) => item?._id !== id));
                  Swal.fire({
                    title: "Deleted!",
                    text: "User Post has been deleted.",
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
        <td>{poster_name}</td>
        <td>{service}</td>
        <td>{poster_email}</td>
        <td>{poster_address}</td>
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

export default AllBidPostTable;
