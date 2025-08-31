import { ImBin2 } from "react-icons/im";


const AllCartItemsTable = ({item}) => {
    const {
    _id,
    product_no,
    product_name,
    product_intro,
    product_description,
    price,
    type,
    product_image
    } = item; 
    return (
              <tbody className="text-center border-0 border-b border-b-slate-300">
                  <tr className="text-slate-800  font-semibold">
                    <td>{product_no}</td>
                    <td>
                      <img
                        className="w-[70px] h-[70px] object-cover rounded-[50px]"
                        src={product_image}
                        alt="product image"
                      />
                    </td>
                    <td>{product_name}</td>
                    <td>{type}</td>
                    <td>{price} tk</td>
                    <td>
                        <button className="btn-sm p-2 rounded-md bg-red-700 text-white hover:bg-red-800"><ImBin2 className="text-xl" /></button>
                    </td>
                  </tr>
                </tbody>
    );
};

export default AllCartItemsTable;