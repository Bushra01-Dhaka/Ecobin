import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ImBin2 } from "react-icons/im";


const UserSavedCartTable = ({item, index, allCarts, setAllCarts}) => {
    const {
   _id,
   product_no,
   product_name,
   product_image,
   product_intro,
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
                setAllCarts(allCarts?.filter((item) => item?._id !== id));
                Swal.fire({
                  title: "Deleted!",
                  text: "User Product has been deleted.",
                  icon: "success", 
                });
              }
            });
          }
        });
      };
    
    return (
           <tbody className="text-center border-0 border-b border-b-slate-300">
                          <tr className="text-slate-800  font-semibold">
                            <td>{index + 1}</td>
                            <td>
                              <img
                                className="w-[70px] h-[70px] object-cover rounded-[50px]"
                                src={product_image}
                                alt="product image"
                              />
                            </td>
                            <td>{product_name}</td>
                            <td>{email}</td>
                            <td>{type}</td>
                            <td>{price} tk</td>
                            <td>
                                <button onClick={() => {handleDelete(_id)}} className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2
                                 className="text-xl" /></button>
                            </td>
                          </tr>
                        </tbody>
    );
};

export default UserSavedCartTable;