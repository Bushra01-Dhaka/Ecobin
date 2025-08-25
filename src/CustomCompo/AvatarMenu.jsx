import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AvatarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.name);
  const axiosPublic = useAxiosPublic();

  const [activeUser, setActiveUser] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/users/${user.email}`)
        .then((res) => setActiveUser(res.data))
        .catch((error) => console.error("Error fetching profile: ", error));
    }
  }, [axiosPublic, user?.email]);

  // Toggle menu on avatar click
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {user && (
        <div className="relative">
          <div className="avatar cursor-pointer" onClick={toggleMenu}>
            <div className="w-[50px] rounded-full border-2 hover:border-green-600 border-[#059212]">
              {/* {user?.photoURL ? (
                <>
                  <img className="" src={user?.photoURL} alt="" />
                </>
              ) : (
                <>
                  {<img src={activeUser?.photo} />}
                </>
              )} */}
              <img
                src={
                  activeUser?.photo ||
                  user?.photoURL ||
                  "https://i.ibb.co/F77zzXn/upload-area.png"
                }
                alt="User Avatar"
              />
            </div>
          </div>

          {menuOpen && (
            <div className="absolute top-14 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48 p-3 z-10">
              <ul className="space-y-2">
                <li className="text-lg font-semibold">{user?.displayName}!</li>
                <Link to="dashboard/dashContent">
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    My Dashboard
                  </li>
                </Link>
                <Link to="/requestService">
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    Request Service
                  </li>
                </Link>
                <Link to="myProfile">
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    My Profile
                  </li>
                </Link>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-red-600">
                  {" "}
                  <Link to="">
                    <button
                      onClick={handleLogOut}
                      className="btn btn-info  bg-gradient-to-r from-[#1a6322] to-[#059212] ...  rounded-[50px] text-white  hover:bg-gradient-to-l border-0 hover:text-white"
                    >
                      Sign Out
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
