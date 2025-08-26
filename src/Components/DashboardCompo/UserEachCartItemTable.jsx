import { ImBin2 } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const UserEachCartItemTable = ({ item, userCartData, setUserCartData }) => {
  const {
    _id,
    product_no,
    product_name,
    product_image,
    price,
    type,
    email,
    name,
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
        axiosPublic.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            console.log("Error :", res)
            // ✅ update state without refetch
            setUserCartData(userCartData?.filter((item) => item?._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };


  return (
      <tbody className="text-center">
        <tr className="text-slate-800">
        <td>{product_no}</td>
        <td><img className="w-[70px] h-[70px] object-cover rounded-[50px]" src={product_image} alt="product image" /></td>
        <td>{product_name}</td>
        <td>{price} tk</td>
        <td><button onClick={() => {handleDelete(_id)}}  className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2 className="text-2xl" /></button></td>
        <td><button className="btn-sm p-2 rounded-md bg-green-700 text-white hover:bg-green-800">Pay Now</button></td>
      </tr>
      </tbody>
    
  );
};

export default UserEachCartItemTable;
