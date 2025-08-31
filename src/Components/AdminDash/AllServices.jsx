import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import AllServiceTable from "./AllServiceTable";
import { FaPlus } from "react-icons/fa";


const AllServices = () => {
    const axiosPublic = useAxiosPublic();
    const [allServices, SetAllServices] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/services`)
        .then((res) => {
           SetAllServices(res.data);
        })
    })
    return (
        <div>
               <AdminHeaderPart title="All Services" value={allServices?.length} />

               <div className="flex justify-center">
                <div>
                    <button className="btn btn-dash text-[#059212] hover:bg-[#059212] text-xl hover:text-white"><FaPlus className="text-xl inline"></FaPlus> Add New Service</button>
                </div>
               </div>



                <div className="p-10">
        <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md">
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Service Title</th>
                <th>Short Description</th>
                <th>Action</th>
              </tr>
            </thead>
             
             {
                allServices.map((item, index) => <AllServiceTable
                key={item?._id}
                item={item}
                index={index}
                ></AllServiceTable>)
             }
           
          </table>
        </div>
      </div>


        </div>
    );
};

export default AllServices;