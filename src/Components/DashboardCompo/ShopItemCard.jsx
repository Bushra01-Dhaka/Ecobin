import CustomButton from "../../Hooks/CustomButton";

const ShopItemCard = ({ eachShopItems }) => {
  const {
    product_no,
    product_name,
    product_intro,
    product_description,
    price,
    type,
    product_image,
  } = eachShopItems;
  return (
    <div className="lg:p-20 flex flex-col lg:flex-row justify-center items-center gap-10">
      {/* left */}
      <div>
        <img className="lg:h-[450px] lg:w-[450px] object-cover rounded-md shadow-2xl" src={product_image} alt="" />
      </div>


      {/* right */}
      <div className="p-6">
        <p>{product_no}</p>
        <h2 className="text-4xl font-bold text-[#059212]">{product_name}</h2>
        <p className="text-2xl text-orange-500 font-bold py-4">{price} tk</p>
        <p className="py-4 lg:max-w-[500px]">{product_intro} {product_description}</p>
        <div className="py-4 flex flex-col mx-auto text-center lg:flex-row justify-center lg:gap-6">
           <CustomButton label="Buy Now" to=""></CustomButton>
           <CustomButton label="Add to Cart" to=""></CustomButton>
        </div>
      </div>


    </div>
  );
};

export default ShopItemCard;
