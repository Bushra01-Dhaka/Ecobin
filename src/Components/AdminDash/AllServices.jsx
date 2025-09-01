import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import AllServiceTable from "./AllServiceTable";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import { refresh } from "aos";

const AllServices = () => {
  const axiosPublic = useAxiosPublic();
  const [allServices, SetAllServices] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/services`).then((res) => {
      SetAllServices(res.data);
    });
  });

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_title = form.service_title.value;
        const service_short_description = form.service_short_description.value;
        const service_details = form.service_details.value;
        const image = form.image.value;
    
        const serviceItem = {
          service_title : service_title,
          service_short_description: service_short_description,
          service_details : service_details,
          image : image
        }
    
        axiosPublic.post(`/services`, serviceItem)
        .then((res) => {
          if(res.data.insertedId){
            console.log("Service Added into EcoShop");
            Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Service Added Successfully",
                            showConfirmButton: false,
                            timer: 1500,
                          });
               refresh();
          }
        })

  }



  return (
    <div>
      <AdminHeaderPart title="All Services" value={allServices?.length} />

      <div className="flex justify-center">
        <div>
          <button
            className="btn btn-dash text-[#059212] hover:bg-[#059212] text-xl hover:text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <FaPlus className="text-xl inline"></FaPlus> Add New Service
          </button>
           <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-2xl  text-[#059212]">Add New Service</h3>
               <div className="py-4">
                   <form onSubmit={handleAddService} action="w-[80%] mx-auto text-slate-800">
                       <fieldset className="fieldset">
                           <input
                            type="text"
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                            placeholder="Service Title"
                            name="service_title" required />

                            <input
                            type="text"
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                            placeholder="Short Description"
                            name="service_short_description"  required />

                            <textarea
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0 px-2"
                            placeholder="Service Description" rows="10" columns="5"
                            name="service_details"  required></textarea>


                             <input
                            type="text"
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                            placeholder="Service Image Link"
                            name="image"  required />

                             <input
                             className="btn btn-neutral mt-8 bg-linear-to-r hover:bg-linear-to-l border-0 from-[#1a6322] to-[#059212] text-white"
                             type="submit"
                            value="Add Service Now"/>   

                       </fieldset>
                   </form>
               </div>
                {/* form end */}
            </div>
          </dialog>
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

            {allServices.map((item, index) => (
              <AllServiceTable
                key={item?._id}
                item={item}
                index={index}
                allServices={allServices}
                SetAllServices={SetAllServices}
              ></AllServiceTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
