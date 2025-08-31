import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import AllBidPostTable from "./AllBidPostTable";


const AllBidPosts = () => {
    const axiosPublic = useAxiosPublic();
    const [allBidPost, setAllBidPosts] = useState([]);
    useEffect(() => {
        axiosPublic.get(`/bidPost`)
        .then((res) => {
            setAllBidPosts(res.data)
        }) 
    })
    return (
        <div>
            <AdminHeaderPart title="All Bid Posts" value={allBidPost?.length} />

             <div className="p-10">
        <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md">
              <tr>
                <th>No</th>
                <th>Poster Name</th>
                <th>Service</th>
                <th>Email</th>
                <th>Address</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
              
              {
                allBidPost.map((item, index) => <AllBidPostTable
                key={item?._id}
                item={item}
                index={index}
                ></AllBidPostTable>)
              }
          </table>
        </div>
      </div>


        </div>
    );
};

export default AllBidPosts;