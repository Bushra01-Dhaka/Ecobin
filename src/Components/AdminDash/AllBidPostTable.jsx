import { ImBin2 } from "react-icons/im";

const AllBidPostTable = ({ item, index }) => {
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
    <tbody className="text-center border-0 border-b border-b-slate-300">
      <tr className="text-slate-800 font-semibold">
        <td>{index + 1}</td>
        <td>{poster_name}</td>
        <td>{service}</td>
        <td>{poster_email}</td>
        <td>{poster_address}</td>
        <td>{price} tk</td>
        <td>{date}</td>
        <td>{status}</td>
        <td>
          <button className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800">
            <ImBin2 className="text-xl" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default AllBidPostTable;
