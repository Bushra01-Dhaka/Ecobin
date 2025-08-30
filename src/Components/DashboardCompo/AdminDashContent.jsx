import { FaUsers } from "react-icons/fa";
import { FaSackDollar, FaUserShield } from "react-icons/fa6";
import { ImHammer2 } from "react-icons/im";

const AdminDashContent = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold text-center ">
            Welcome to Dashboard
          </h2>

          <div className="pt-20 flex justify-center gap-4 items-center">
            <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
              <p>
                {" "}
                <FaUsers className="text-5xl mx-auto text-green-600" />
              </p>
              <p className="py-2 text-2xl text-center">Total Users</p>
              <p className="text-2xl mx-auto font-bold text-green-600">4</p>
            </div>
            <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
              <p>
                {" "}
                <FaUserShield  className="text-5xl mx-auto text-green-600" />
              </p>
              <p className="py-2 text-2xl text-center">Total Moderator</p>
              <p className="text-2xl mx-auto font-bold text-green-600">4</p>
            </div>
            <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
              <p>
                {" "}
                <ImHammer2 className="text-5xl mx-auto text-green-600" />
              </p>
              <p className="py-2 text-2xl text-center">Total Bids</p>
              <p className="text-2xl mx-auto font-bold text-green-600">4</p>
            </div>
            <div className="text-center border-1 p-6 lg:w-[230px] rounded-md shadow-lg lg:h-[200px] transform transition-transform duration-800 hover:-translate-y-2 cursor-pointer">
              <p>
                {" "}
                <FaSackDollar className="text-5xl mx-auto text-green-600" />
              </p>
              <p className="py-2 text-2xl text-center">Total Payments</p>
              <p className="text-2xl mx-auto font-bold text-green-600">4</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashContent;
