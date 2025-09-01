import { FaUsers, FaUserSecret } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const TotalUserTable = ({ item, index, normalUser, setNormalUser }) => {
  const { _id, name, email, phone, photo, status } = item;
  const axiosPublic = useAxiosPublic();

  const handleDeleteUser = (id) => {
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
        axiosPublic.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            console.log("Error :", res)
            // ✅ update state without refetch
            setNormalUser(normalUser?.filter((item) => item?._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
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
            src={photo}
            alt="product image"
          />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          {status === "user" ? <button className="btn-sm p-2 rounded-md bg-green-700 text-white hover:bg-green-800">
            <FaUsers className="text-xl" />
          </button>
          :
          <button className="btn-sm p-2 rounded-md bg-green-700 text-white hover:bg-green-800">
            <FaUserSecret className="text-xl"></FaUserSecret>
          </button>}
        </td>
        <td>
            <button onClick={() => {handleDeleteUser(_id)}} on className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2 className="text-xl" /></button>
        </td>
      </tr>
    </tbody>
  );
};

export default TotalUserTable;
