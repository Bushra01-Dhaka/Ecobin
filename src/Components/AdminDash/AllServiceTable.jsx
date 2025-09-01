import { ImBin2 } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AllServiceTable = ({item, index, allServices, setAllServices}) => {
    const {
    _id,
    service_no,
    image,
    service_title,
    service_short_description,
    service_details,
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
            axiosPublic.delete(`/services/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                console.log("Error :", res)
                // ✅ update state without refetch
                setAllServices(allServices?.filter((item) => item?._id !== id));
                Swal.fire({
                  title: "Deleted!",
                  text: "The Service has been deleted.",
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
                                src={image}
                                alt="product image"
                              />
                            </td>
                            <td>{service_title}</td>
                            <td>{service_short_description}</td>
                            <td>
                                <button onClick={() => {handleDelete(_id)}} className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2 className="text-xl" /></button>
                            </td>
                          </tr>
                        </tbody>
    );
};

export default AllServiceTable;