import { ImBin2 } from "react-icons/im";


const AllServiceTable = ({item, index}) => {
    const {
    _id,
    service_no,
    image,
    service_title,
    service_short_description,
    service_details,
    } = item;
    return (
          <tbody className="text-center border-0 border-b border-b-slate-300">
                          <tr className="text-slate-800  font-semibold">
                            <td>{service_no}</td>
                            <td>
                              <img
                                className="w-[70px] h-[70px] object-cover rounded-[50px]"
                                src={image}
                                alt="product image"
                              />
                            </td>
                            <td>{service_title}</td>
                            <td>{service_short_description}</td>
                            <td>
                                <button className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2 className="text-xl" /></button>
                            </td>
                          </tr>
                        </tbody>
    );
};

export default AllServiceTable;