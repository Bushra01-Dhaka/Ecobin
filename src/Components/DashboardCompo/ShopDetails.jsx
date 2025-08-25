import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router";
import ShopItemCard from "./ShopItemCard";
import CustomButton from "../../Hooks/CustomButton";

const ShopDetails = () => {
  const { id } = useParams();
  console.log("Shop Id: ", id);
  const [allShopItems, setAllShopItems] = useState([]);
  const [eachShopItems, setEachShopItems] = useState([]);
  const [allsimilarItems, setAllSimitarItems] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/shop")
      .then((res) => {
        setAllShopItems(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (allShopItems.length > 0) {
      const perItem = allShopItems.find((item) => item?._id === id);
      setEachShopItems(perItem);
      console.log("Per Item: ", perItem);
    }
  }, [allShopItems, id]);

  useEffect(() => {
      if(allShopItems.length > 0){
             const simitarItems = allShopItems.filter(
        (item) => item?.type === eachShopItems?.type
      );
      setAllSimitarItems(simitarItems);
      console.log("Simitar Items: ", simitarItems);
      }
  }, [allShopItems, eachShopItems?.type])

  return (
    <div>
      <div>
        <ShopItemCard eachShopItems={eachShopItems}></ShopItemCard>
      </div>

      <div className="py-10 flex justify-center">
        <div className="">
            <h2 className="text-2xl lg:text-3xl text-center py-6 font-bold">
          Similar Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-20">
          {allsimilarItems.map((item) => (
            <div key={item?.product_no}>
              <div className="bg-white p-4 w-[320px] rounded-md shadow-2xl overflow-hidden">
                <img
                  className="h-[400px] w-[300px] rounded-md object-cover cursor-pointer"
                  src={item?.product_image}
                  alt=""
                />

                <h3 className="py-4 text-lg text-[#059212] font-bold">
                  {item?.product_name}
                </h3>

                <p className="text-slate-700">{item?.product_intro}</p>

                <CustomButton
                  label="Explore Details"
                  to={`/shopDetails/${item?._id}`}
                ></CustomButton>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
