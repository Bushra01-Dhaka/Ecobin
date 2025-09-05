

const PaymentHistoryTable = ({item, index, userCartPayments, setUserCartPayments}) => {
    const {_id, email, price, transactionId,cartIds, status} = item;
    return (
        <tbody className="text-center border-0 border-b border-b-slate-300">
             <tr className="text-slate-800  font-semibold">
               <td>{index + 1}</td>
               <td>{email}</td>
               <td>{price} tk</td>
               <td>{transactionId}</td>
               <td>{cartIds?.length}</td>
               <td>
                 <button className="btn-sm rounded-md bg-green-700 text-white text-md p-1 hover:bg-green-800">
                  {status}
                 </button>
               </td>
             </tr>
           </tbody>
    );
};

export default PaymentHistoryTable;