import { useEffect, useState } from "react";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllCartItemsTable from "./AllCartItemsTable";
import { FaPlus } from "react-icons/fa";

const AllCartItems = () => {
  const axiosPublic = useAxiosPublic();
  const [allCart, setAllCart] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/shop`).then((res) => {
      setAllCart(res.data);
    });
  });
  return (
    <div>
      <AdminHeaderPart title="All Cart Items" value={allCart?.length} />
        <div className="flex justify-center">
                       <div>
                           <button className="btn btn-dash text-[#059212] hover:bg-[#059212] text-xl hover:text-white"><FaPlus className="text-xl inline"></FaPlus> Add New Cart Item</button>
                       </div>
                      </div>
       

      <div className="p-10">
        <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md">
              <tr>
                <th>Product No</th>
                <th>Product</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
             
             {
                allCart.map((item) => <AllCartItemsTable
                key={item?._id}
                item={item}
                ></AllCartItemsTable>)
             }
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCartItems;
