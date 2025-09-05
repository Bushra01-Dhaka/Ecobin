import { useContext, useEffect, useState } from "react";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import PaymentHistoryTable from "./PaymentHistoryTable";
import ServicePaymentTable from "./ServicePaymentTable";


const PaymentHistory = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);
    const [userCartPayments, setUserCartPayments] = useState([]);
    const [userServicePayment, setUserServicePayment] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/payments/${user?.email}`)
        .then((res) => {
            setUserCartPayments(res.data);
        })
    },[axiosPublic, user?.email])

    useEffect(() => {
      axiosPublic.get(`/servicePayments/${user?.email}`)
      .then((res) => {
        setUserServicePayment(res.data);
      })
    },[axiosPublic,user?.email])
    return (
        <div>
            <AdminHeaderPart title="Payment History" value={(userCartPayments?.length) + (userServicePayment?.length) }></AdminHeaderPart>

              <h2 className="text-center pt-10 text-orange-400 text-3xl font-bold">Cart Payments</h2>

           <div className="p-10">
        <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md">
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Total Price</th>
                <th>Transaction Id</th>
                <th>Purchased Items</th>
                <th>Status</th>
              </tr>
            </thead>
            {userCartPayments?.map((item, index) => (<PaymentHistoryTable
            key={item?._id}
            item={item}
            index={index}
            userCartPayments = {userCartPayments}
            setUserCartPayments = {setUserCartPayments}
            ></PaymentHistoryTable>
            ))}
          </table>
        </div>
           </div>



                 <h2 className="text-center pt-20 text-orange-400 text-3xl font-bold">Service Payments</h2>

      <div className="p-10">
        <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md">
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Total Price</th>
                <th>Transaction Id</th>
                <th>Purchased Items</th>
                <th>Status</th>
              </tr>
            </thead>
             {
              userServicePayment.map((item, index) => <ServicePaymentTable
              key={item?._id}
              index={index}
              item={item}
              userServicePayment = {userServicePayment}
              setUserServicePayment = {setUserServicePayment}
              ></ServicePaymentTable>)
             }
          </table>
        </div>
           </div>
        </div>
    );
};

export default PaymentHistory;