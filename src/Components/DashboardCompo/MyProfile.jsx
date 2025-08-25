import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [activeUser, setActiveUser] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user?.email) {
      axiosPublic.get(`/users/${user.email}`)
        .then((res) => setActiveUser(res.data))
        .catch((error) => console.error("Error fetching profile: ", error));
    }
  }, [axiosPublic, user?.email]);

 const handleFileChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("image", file);

  try {
    const uploadRes = await fetch(
      `https://api.imgbb.com/1/upload?key=4f1b4b0af6a0375cc4dbefa60a5fc665`, // put your key here
      { method: "POST", body: formData }
    );

    const uploadData = await uploadRes.json();
    console.log("IMGBB upload response:", uploadData); // check response

    const imageUrl = uploadData?.data?.display_url; // ✅ correct key

    if (!imageUrl) {
      console.error("No image URL found in IMGBB response!");
      return;
    }

    await axiosPublic.patch(`/users/${user.email}`, { photo: imageUrl });

    setActiveUser((prev) => ({
      ...prev,
      photo: imageUrl
    }));

  } catch (err) {
    console.error("Image upload failed", err);
  }
};

  if (!activeUser) return <p>Loading...</p>;

  return (
    <div className="flex justify-start items-center p-10 lg:p-20 min-h-[60vh]">
      <div className="flex justify-start items-center gap-6">
        <div className="relative">
          <img
            src={activeUser.photo || "https://i.ibb.co/F77zzXn/upload-area.png"}
            alt="User Avatar"
            className="w-40 h-40 rounded-lg object-cover"
          />
          <FaEdit
            className="absolute top-2 right-2 cursor-pointer text-[#059212] hover:text-[#9BEC00] text-3xl"
            onClick={() => fileInputRef.current.click()}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Name: {activeUser.name}</h2>
          <h2 className="text-xl font-semibold">Email: {activeUser.email}</h2>
          {
            activeUser?.phone &&   <h2 className="text-xl font-semibold">Phone: +88{activeUser.phone}</h2>
          }
        
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
