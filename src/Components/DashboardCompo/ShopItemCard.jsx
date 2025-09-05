import { useContext } from "react";
import CustomButton from "../../Hooks/CustomButton";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const ShopItemCard = ({ eachShopItems }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    product_no,
    product_name,
    product_intro,
    product_description,
    price,
    type,
    product_image,
  } = eachShopItems;

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSelectedCart = () => {
    const addedCart = {
      product_id: _id,
      product_no: product_no,
      product_name: product_name,
      product_image: product_image,
      product_intro: product_intro,
      price: price,
      type: type,
      email: user?.email,
      name: user?.displayName,
    };
    console.log("Selected Item: ", addedCart);
    axiosPublic.post("/cart", addedCart).then((res) => {
      if (res.data.insertedId) {
        console.log("Cart Data Added to the Database");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Cart Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard/userCartItems');
      }
    });
  };

  return (
    <div className="lg:p-20 flex flex-col lg:flex-row justify-center items-center gap-10">
      {/* left */}
      <div>
        <img
          className="lg:h-[450px] lg:w-[450px] object-cover rounded-md shadow-2xl"
          src={product_image}
          alt=""
        />
      </div>

      {/* right */}
      <div className="p-6">
        <p>{product_no}</p>
        <h2 className="text-4xl font-bold text-[#059212]">{product_name}</h2>
        <p className="text-2xl text-orange-500 font-bold py-4">{price} tk</p>
        <p className="py-4 lg:max-w-[500px]">
          {product_intro} {product_description}
        </p>
        <div className="py-4 flex flex-col mx-auto text-center lg:flex-row justify-center lg:gap-6">
          <CustomButton label="Buy Now" to=""></CustomButton>
          <div onClick={handleSelectedCart}>
            <CustomButton label="Add to Cart" to=""></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemCard;
