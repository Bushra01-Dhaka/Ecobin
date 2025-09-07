import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import EachBidPostCard from "./EachBidPostCard";

const ExploreBidPosts = () => {
  const axiosPublic = useAxiosPublic();
  const [allBidPost, setAllBidPost] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/bidPost`).then((res) => {
      setAllBidPost(res.data.reverse());
    });
  }, []);
  console.log(allBidPost);
  return (
    <div>
      <div className="hero min-h-[80vh] bg-green-50">
        <div className="hero-content text-neutral-content text-center">
          <div data-aos="zoom-out" className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold  bg-gradient-to-r from-[#1a6322] via-[#059212] to-green-400 bg-clip-text text-transparent text-center lg:text-5xl">
              Explore Affordable Offers and Bid now.
            </h1>
            <p className="mb-5 text-slate-800">
              Affordable Mutual Benefit Program
            </p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="grid grid-cols-1 gap-6 ">
          {allBidPost.map((item, index) => (
            <EachBidPostCard
              key={item?._id}
              index={index}
              item={item}
            ></EachBidPostCard>
          ))}
        </div>
      </div>



    </div>
  );
};

export default ExploreBidPosts;
