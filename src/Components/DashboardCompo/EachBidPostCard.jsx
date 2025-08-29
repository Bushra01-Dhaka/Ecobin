import { FaHammer } from "react-icons/fa";
import { Link } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

  const axiosPublic = useAxiosPublic();
  const [bidderData, setBidderData] = useState([]);
  const [isBidClicked, setIsBidClicked] = useState(false);
  let bidderService = "";
  if(service === "Land Filling Service"){
     bidderService = "Construction & Demolition Waste";
  }
  else{
     bidderService = "Land Filling Service"
  }

  console.log("Bidder Now Service: ", bidderService)

  // Let's find out the Requested_Service Id to change the Bidder's service status
  useEffect(() => {
    axiosPublic.get(`/requestServices/${bidderService}`).then((res) => {
      setBidderData(res.data);
    });
  }, []);

  console.log("Bidder Id: ", bidderData?._id);
  console.log("Bidder Id: ", bidderData);

  // new
  const handleBidNow = async () => {
    try {
      // 1. Update poster status
      await axiosPublic.patch(`/requestServices/${service_no}`, {
        status: "Bid Deal Successfully Done",
      });

      // 2. Update bidder status
      if (bidderData?._id) {
        await axiosPublic.patch(`/requestServices/${bidderData?._id}`, {
          status: "Bid Deal Successfully Done",
        });
      }
      
      // to disabled poster post "BID NOW" Button
      if (bidderData?._id) {
        await axiosPublic.patch(`/bidPost/${_id}`, {
          status: "Bid Deal Successfully Done",
        });
      }

      // To disabled Bidder Post "BID NOW" Button
      if (bidderData?._id) {
        await axiosPublic.patch(`/bidPost/${bidderData?._id}`, {
          status: "Bid Deal Successfully Done",
        });
      }


      const doneBidInfo = {
        poster_bid_id: _id,
        poster_service_no: service_no,
        poster_service: service,
        poster_property: property,
        poster_price: price,
        poster_name,
        poster_email,
        poster_phone,
        poster_pic,
        poster_address,
        poster_truck_no: truck_no,
        poster_date: date,
        poster_product_type: product_type,
        poster_service_type: service_type,
        poster_status: status,
        bidder_service_no: bidderData?._id,
        bidder_service: bidderData?.service,
        bidder_service_type: bidderData?.service_type,
        bidder_product_type: bidderData?.product_type,
        bidder_price: bidderData?.price,
        bidder_truck_no: bidderData?.truck_no,
        bidder_name: bidderData?.name,
        bidder_email: bidderData?.email,
        bidder_phone: bidderData?.phone,
        bidder_address: bidderData?.address,
        bidder_status: bidderData?.status,
        bidder_date: bidderData?.date,
        confirm_status: "Bidder Wanna Bid",
      };
      const res = await axiosPublic.post(`/doneBid`, doneBidInfo);
      if (res.data.insertedId) {
        // patch status by service_no
        // await axiosPublic.patch(`/bidPost/${bidderData?._id}`, {
        //   status: "Bid Deal Successfully Done",
        // });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Bidding data Saved Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setIsBidClicked(true); // ✅ disable button
    } catch (err) {
      console.error("Error updating bid deal:", err);
    }
  };

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
              🚛 Quantity Required:{" "}
              <span className="font-semibold">{truck_no} Trucks</span>
            </p>
            <p>
              🗑️ Material Required:{" "}
              <span className="font-semibold">{product_type}</span>
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

            {status === "Bid Deal Successfully Done" ? (
              <button
                // onClick={handleBidNow}
                // disabled={isBidClicked}
                className="btn btn-disabled "
              >
                Bid Done
                <FaHammer className="inline" />
              </button>
            ) : (
              <button
                onClick={handleBidNow}
                // disabled={isBidClicked}
                className="btn bg-linear-to-r from-green-600 to-green-800 hover:bg-linear-to-l text-white uppercase"
              >
                Bid Now
                <FaHammer className="inline" />
              </button>
            )}
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
              🗑️ Material Available:{" "}
              <span className="font-semibold">{product_type}</span>
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
            {status === "Bid Deal Successfully Done" ? (
              <button
                // onClick={handleBidNow}
                disabled={isBidClicked}
                className="btn btn-disabled "
              >
                Bid Done
                <FaHammer className="inline" />
              </button>
            ) : (
              <button
                onClick={handleBidNow}
                disabled={isBidClicked}
                className="btn bg-linear-to-r from-green-600 to-green-800 hover:bg-linear-to-l text-white uppercase"
              >
                Bid Now
                <FaHammer className="inline" />
              </button>
            )}

            {/* <button
              onClick={handleBidNow}
              disabled={isBidClicked}
              className="btn bg-linear-to-r from-green-600 to-green-800 hover:bg-linear-to-l text-white uppercase"
            >
              {isBidClicked ? "Bid Done" : "Bid Now"}{" "}
              <FaHammer className="inline" />
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default EachBidPostCard;
