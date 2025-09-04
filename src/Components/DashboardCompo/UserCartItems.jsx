import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UserEachCartItemTable from "./UserEachCartItemTable";
import Swal from "sweetalert2";
import { Link } from "react-router";

const UserCartItems = () => {
  const { user } = useContext(AuthContext);
  const [userCartData, setUserCartData] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (user?.email) {
      setUserCartData([]); // Clear previous data immediately when email changes
      axiosPublic
        .get(`/cart?email=${user.email}`)
        .then((res) => {
          setUserCartData(res.data);
        })
        .catch((error) => {
          console.error("Error in booking: ", error);
        });
    } else {
      setUserCartData([]); // No logged-in user = no data
    }
  }, [axiosPublic, user?.email]);

  //   delete specific cart item
  

  // Calculate Total Price of all Cart Items
  // const totalPrice = userCartData.reduce(
  //   (total, item) => total + item?.price,
  //   0
  // );

  const totalPrice = userCartData.reduce(
  (total, item) => total + (Number(item?.price) || 0),
  0
);

  return (
    <div>
      <div>
        {userCartData.length == 0 ? (
          <h2 className="text-2xl lg:text-4xl font-semibold p-6  border-0 text-slate-800 text-center ">
            Oops Cart is Empty!
          </h2>
        ) : (
          <div className="flex justify-between items-center px-6">
            <h2 className="text-2xl lg:text-4xl font-bold p-6  border-0 text-slate-800 text-center ">
              My Cart: ({userCartData?.length})
            </h2>
            <h2 className="text-2xl lg:text-4xl font-semibold p-6  border-0 text-[#059212] text-center">
              Total Price: {totalPrice}tk
            </h2>

            {
              userCartData?.length ? 
              <Link to={`/dashboard/payment`}>
            <button className="btn-sm p-4 bg-orange-400  rounded-[50px]  text-white hover:bg-[#059212] cursor-pointer">Pay Now</button></Link>
            :
            <Link>
            <button disabled className="btn-sm p-4 bg-orange-400  rounded-[50px]  text-white hover:bg-[#059212] cursor-pointer">Pay Now</button></Link>
            }
            
          </div>
        )}
      </div>

      <div className="lg:p-6">
        <div className="overflow-x-auto">
          <table className="table  lg:table-zebra">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center">
              <tr>
                <th>Product No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Cancel Action</th>
              </tr>
            </thead>
            {userCartData.map((item, index) => (
              <UserEachCartItemTable
                key={item?._id}
                item={item}
                index={index}
                userCartData={userCartData}
                setUserCartData={setUserCartData}
              ></UserEachCartItemTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCartItems;
