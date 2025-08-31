import { useEffect, useState } from "react";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import TotalBidTable from "./TotalBidTable";


const TotalBidReq = () => {
    const axiosPublic = useAxiosPublic();
    const [allDoneBidRequest, setAllDoneBidRequest] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/doneBid`)
        .then((res) => {
            setAllDoneBidRequest(res.data);
        })
    })
    return (
        <div>
            <AdminHeaderPart title="Total Bid Request" value={allDoneBidRequest?.length}></AdminHeaderPart>

            <div className="p-6">
                   <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md text-sm">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md text-sm">
              <tr>
                <th>No</th>
                <th>Poster Email</th>
                <th>Bidder Email</th>
                <th>Poster Address</th>
                <th>Bidder Address</th>
                <th>Poster Status</th>
                <th>Bidder Status</th>
                <th>Send Mail</th>
                <th>Action</th>
              </tr>
            </thead>
            {
              allDoneBidRequest.map((item, index) => <TotalBidTable
              key={item?._id}
              index={index}
              item={item}
              ></TotalBidTable>)
            }  
          </table>
        </div>
            </div>
        </div>
    );
};

export default TotalBidReq;