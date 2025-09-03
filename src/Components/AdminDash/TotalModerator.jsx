import { useEffect, useState } from "react";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import TotalModeratorTable from "./TotalModeratorTable";


const TotalModerator = () => {
    const axiosPublic = useAxiosPublic();
  const [allUserData, setAllUserData] = useState([]);
  const [allModerator, setModerator] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/users`).then((res) => {
      setAllUserData(res.data);
      const moderator = allUserData.filter((item) => item?.status === "Moderator");
      setModerator(moderator);
    });
  });
    
    return (
        <div>
            <AdminHeaderPart title="Total Moderators" value={allModerator?.length}></AdminHeaderPart>

              <div className="p-10">
        <div className="overflow-x-auto rounded-md">
          <table className="table  table-zebra rounded-md">
            {/* head */}
            <thead className="bg-[#059212] text-white text-center rounded-md">
              <tr>
                <th>No</th>
                <th>User Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            {allModerator?.map((item, index) => (
              <TotalModeratorTable
                key={item?._id}
                item={item}
                index={index}
                allModerator = {allModerator}
                setModerator = {setModerator}   
              ></TotalModeratorTable>
            ))}
          </table>
        </div>
      </div>
        </div>
    );
};

export default TotalModerator;