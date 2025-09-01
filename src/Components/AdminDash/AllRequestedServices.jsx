import { useEffect, useState } from "react";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllServiceRequestTable from "./AllServiceRequestTable";


const AllRequestedServices = () => {
    const [requestServices, setRequestServices] = useState([]);
    const axiosPublic = useAxiosPublic();
     useEffect(() => {
            axiosPublic.get(`/requestServices`)
            .then((res) => {
               setRequestServices(res.data);
            })
        })
    return (
        <div>
            <AdminHeaderPart title ="Requested Services" value={requestServices?.length}></AdminHeaderPart>

                <div className="p-10">
                    <div className="overflow-x-auto rounded-md">
                      <table className="table  table-zebra rounded-md">
                        {/* head */}
                        <thead className="bg-[#059212] text-white text-center rounded-md">
                          <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Service Title</th>
                            <th>Property Type</th>
                            <th>Container Size</th>
                            <th>Truck Required</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                       {
                        requestServices.map((item, index) => <AllServiceRequestTable
                        key={item._id}
                        index={index}
                        item={item}
                        requestServices={requestServices}
                        setRequestServices={setRequestServices}
                        ></AllServiceRequestTable>)
                       }
                      </table>
                    </div>
                  </div>
        </div>
    );
};

export default AllRequestedServices;