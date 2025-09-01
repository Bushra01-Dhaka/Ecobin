import { useEffect, useState } from "react";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllCartItemsTable from "./AllCartItemsTable";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AllCartItems = () => {
  const axiosPublic = useAxiosPublic();
  const [allCart, setAllCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosPublic.get(`/shop`).then((res) => {
      setAllCart(res.data);
    });
  });

  const handleShopItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const product_name = form.product_name.value;
    const product_intro = form.product_intro.value;
    const product_description = form.product_description.value;
    const price = form.price.value;
    const type = form.type.value;
    const product_image = form.product_image.value;

    const shopItem = {
      product_name : product_name,
      product_intro: product_intro,
      product_description : product_description,
      price : price,
      type : type,
      product_image : product_image
    }

    axiosPublic.post(`/shop`, shopItem)
    .then((res) => {
      if(res.data.insertedId){
        console.log("Product Added into EcoShop");
        Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product Added Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
            navigate(`/dashboard/allCartItems`)
      }
    })
     


  }





  return (
    <div>
      <AdminHeaderPart title="Total Products" value={allCart?.length} />

      {/* Modal Button For ADD NEW SHOP ITEM */}

      <div className="flex justify-center">
        <div>
          <button
            className="btn btn-dash text-[#059212] hover:bg-[#059212] text-xl hover:text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
             <FaPlus className="text-xl inline"></FaPlus> Add New Product
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-2xl  text-[#059212]">Add New Product Into EcoShop</h3>
               <div className="py-4">
                   <form onSubmit={handleShopItem} action="w-[80%] mx-auto text-slate-800">
                       <fieldset className="fieldset">
                           <input
                            type="text"
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                            placeholder="Product Name"
                            name="product_name" required />

                            <input
                            type="text"
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                            placeholder="Product Intro"
                            name="product_intro"  required />

                            <textarea
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0 px-2"
                            placeholder="Product Description" rows="10"
                            name="product_description"  required></textarea>

                             <input
                            type="number"
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                            placeholder="Product Price"
                            name="price"  required />

                             <input
                            type="text"
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                            placeholder="Product Type"
                            name="type"  required />

                             <input
                            type="text"
                            className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                            placeholder="Product Image Link"
                            name="product_image"  required />

                             <input
                             className="btn btn-neutral mt-8 bg-linear-to-r hover:bg-linear-to-l border-0 from-[#1a6322] to-[#059212] text-white"
                             type="submit"
                            value="Add Now"/>   

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
                <th>Product No</th>
                <th>Product</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            {allCart.map((item, index) => (
              <AllCartItemsTable
                key={item?._id}
                item={item}
                index={index}
                allCart={allCart}
                setAllCart={setAllCart}
              ></AllCartItemsTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCartItems;
