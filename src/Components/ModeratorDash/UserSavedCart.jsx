import { useEffect, useState } from "react";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UserSavedCartTable from "./UserSavedCartTable";

const UserSavedCart = () => {
  const axiosPublic = useAxiosPublic();
  const [allCarts, setAllCarts] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/cart`).then((res) => {
      setAllCarts(res.data);
    });
  });
  return (
    <div>
      <AdminHeaderPart title="User Added Carts" value={allCarts?.length}></AdminHeaderPart>
      <div className="p-10">
        <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md">
              <tr>
                <th>No</th>
                <th>Product</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {allCarts?.map((item, index) => (
              <UserSavedCartTable
                key={item?._id}
                item={item}
                index={index}
                allCarts={allCarts}
                setAllCarts={setAllCarts}
              ></UserSavedCartTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserSavedCart;
