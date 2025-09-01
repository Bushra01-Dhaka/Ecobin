import { useEffect, useState } from "react";
import AdminHeaderPart from "../../Hooks/AdminHeaderPart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import TotalUserTable from "./TotalUserTable";

const TotalUsers = () => {
  const axiosPublic = useAxiosPublic();
  const [allUserData, setAllUserData] = useState([]);
  const [normalUser, setNormalUser] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/users`).then((res) => {
      setAllUserData(res.data);
      const user = allUserData.filter((item) => item?.status === "user");
      setNormalUser(user);
    });
  });

  return (
    <div>
      <AdminHeaderPart
        title="Total Users"
        value={normalUser?.length}
      ></AdminHeaderPart>

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
                <th>Action</th>
              </tr>
            </thead>
            {normalUser?.map((item, index) => (
              <TotalUserTable
                key={item?._id}
                item={item}
                index={index}
                normalUser={normalUser}
                setNormalUser={setNormalUser}
              ></TotalUserTable>
            ))}
          </table>
        </div>
      </div>


    </div>
  );
};

export default TotalUsers;
