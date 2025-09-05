import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import AllPaymentsTable from "./AllPaymentsTable";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import AllServicesPaymentTable from "./AllServicesPaymentTable";


const AllPaymentsList = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);
    const [allCartPayments, setAllCartPayments] = useState([]);
     const [userServicePayment, setUserServicePayment] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/payments`)
        .then((res) => {
            setAllCartPayments(res.data);
        })
    },[axiosPublic, user?.email]);

     const totalPrice = allCartPayments.reduce( (total, item) => total + item.price,0)

      useEffect(() => {
      axiosPublic.get(`/servicePayments`)
      .then((res) => {
        setUserServicePayment(res.data);
      })
    },[axiosPublic])

    const totalServicePrice = userServicePayment.reduce( (total, item) => total + item.price,0)
    
    return (
          <div>
            <AdminHeaderPart title="Payment History" value={allCartPayments?.length}></AdminHeaderPart>
            <div className="py-2">
                <h2 className="text-3xl text-orange-400 font-bold text-center">Total Cart Payment: {totalPrice} tk</h2>
            </div>

      <div className="p-10">
        <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md">
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Total Price</th>
                <th>Date</th>
                <th>Transaction Id</th>
                <th>Purchased Items</th>
                <th>Status</th>
              </tr>
            </thead>
            {allCartPayments?.map((item, index) => (<AllPaymentsTable
            key={item?._id}
            item={item}
            index={index}
            allCartPayments = {allCartPayments}
            setAllCartPayments = {setAllCartPayments}
            ></AllPaymentsTable>
            ))}
          </table>
        </div>
      </div>

      <h2 className="text-3xl text-orange-400 font-bold text-center">Total Service Payment: {totalServicePrice}  tk</h2>
       
        <div className="p-10">
        <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md">
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Total Price</th>
                <th>Date</th>
                <th>Transaction Id</th>
                <th>Purchased Services</th>
                <th>Status</th>
              </tr>
            </thead>
             {
              userServicePayment.map((item, index) => <AllServicesPaymentTable
              key={item?._id}
              item={item}
              index = {index}
              userServicePayment = {userServicePayment}
              setUserServicePayment = {setUserServicePayment}
              ></AllServicesPaymentTable>)
             }
          </table>
        </div>
      </div>

        </div>
    );
};

export default AllPaymentsList;