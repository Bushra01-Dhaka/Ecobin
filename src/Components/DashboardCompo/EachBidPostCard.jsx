import { FaHammer } from "react-icons/fa";
import { Link } from "react-router";

const EachBidPostCard = ({ item }) => {
  const {
    _id,
    service_no,
    service,
    property,
    price,
    poster_name,
    poster_email,
    poster_phone,
    poster_pic,
    poster_address,
    truck_no,
    date,
    product_type,
    service_type,
    status,
  } = item;
  return (
    <div className="px-6 border-0 border-b border-b-slate-400">
      <div className="flex justify-start items-center gap-6">
        <img
          className="w-[100px] h-[100px] object-cover rounded-[50px]"
          src={poster_pic}
          alt=""
        />
        <div>
          <h2 className="text-xl lg:text-3xl font-bold">{poster_name}</h2>
          {property == "Land Property" ? (
            <p className="py-2">Land Owner || Looking for Construction Waste</p>
          ) : (
            <p className="py-2">Construction Waste Holder </p>
          )}
        </div>
      </div>

      {property == "Land Property" ? (
        <div className="p-8">
          <h2 className="text-2xl lg:text-3xl font-bold">
            {" "}
            🟢 Business Ad – For Construction & Demolition Waste
          </h2>

          <p className="py-4 text-lg">
            Hello, I’m {poster_name}. I have a land property that needs
            improvement and I’m seeking{" "}
            <span className="font-bold">{truck_no}</span> trucks of Construction
            & Demolition Waste including {product_type}.
          </p>

          <div className="py-4 text-lg space-y-2">
            <p>
              📍 Delivery Location:{" "}
              <span className="font-semibold">{poster_address}</span>
            </p>
            <p>
              📅 Required By: <span className="font-semibold">{date} </span>If
              you’re interested in a mutual benefit deal, feel free to reach
              out.
            </p>
            <p>
              📧 Email: <span className="font-semibold">{poster_email}</span>
            </p>
            <p>
              {" "}
              📞 Phone: <span className="font-semibold">{poster_phone} </span>
            </p>
            <p className="py-4">
              Let’s work together to make the best use of resources!
            </p>
            <Link>
              <button className="btn bg-linear-to-r from-green-600 to-green-800 hover:bg-linear-to-l text-white uppercase">
                Bid Now <FaHammer className="inline"></FaHammer>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="p-8">
          <h2 className="text-2xl lg:text-3xl font-bold">
            {" "}
            🟢 Business Ad – For Land Owner
          </h2>

          <p className="py-4 text-lg">
            Hello, I’m {poster_name}.I manage a Construction & Demolition Waste
            business and currently have{" "}
            <span className="font-bold">{truck_no}</span> trucks of Construction
            & Demolition Waste including {product_type}.
          </p>

          <div className="py-4 text-lg space-y-2">
            <p>
              📍 Available From:{" "}
              <span className="font-semibold">{poster_address}</span>
            </p>
            <p>
              🚛 Quantity:{" "}
              <span className="font-semibold">
                {truck_no} Trucks (ready for delivery)
              </span>
            </p>
            <p>
              📅 Available By: <span className="font-semibold">{date} </span>I’m
              looking for landowners or projects interested in making the best
              use of these resources under a mutual benefit program. If you’re
              interested feel free to reach out.
            </p>
            <p>
              📧 Email: <span className="font-semibold">{poster_email}</span>
            </p>
            <p>
              {" "}
              📞 Phone: <span className="font-semibold">{poster_phone} </span>
            </p>
            <p className="py-4">
              Let’s work together to make the best use of resources!
            </p>
            <Link>
              <button className="btn bg-linear-to-r from-green-600 to-green-800 hover:bg-linear-to-l text-white uppercase">
                Bid Now <FaHammer className="inline"></FaHammer>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EachBidPostCard;
