import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";


const CheckoutForm1 = () => {
     const stripe = useStripe();
     const elements = useElements();
     const [error, setError] = useState('');
     const axiosPublic = useAxiosPublic();
     const [allCartData, setAllCartData] = useState([]);
     const {user} = useContext(AuthContext);
     const [clientSecret, setClientSecret] = useState('');
     const [transactionId, setTransactionId] = useState('');
     const navigate = useNavigate();

     useEffect(() => {
      axiosPublic.get(`/requestServices?email=${user?.email}`)
      .then((res) => {
        setAllCartData(res.data)
      })
     },[axiosPublic,user?.email])

     const totalPrice = allCartData.reduce( (total, item) => total + parseFloat(item.price),0)


     useEffect(() => {
       if(totalPrice > 0){
         axiosPublic.post(`/create-payment-intent`, {price : totalPrice})
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
       }
     },[axiosPublic, totalPrice])

    const handleSubmit = async (event) => {
        // block native submission
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log("Payment Error", error);
            setError(error.message);
        }
        else{
            console.log("Payment Method", paymentMethod);
            setError('');
        }

        // Confirm Payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
          payment_method:{
            card: card,
            billing_details:{
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous',
            }
          }
        })

        if(confirmError){
          console.log('confirm error')
        }
        else{
          console.log('payment intent', paymentIntent);
          if(paymentIntent?.status === 'succeeded')
          {
            console.log('transaction id', paymentIntent?.id);
            setTransactionId(paymentIntent?.id);

            // Now save the Payment in the database
            const payment = {
              email : user?.email,
              price: totalPrice,
              transactionId: paymentIntent?.id,
              date: new Date(),
              cartIds: allCartData.map(item => item._id),
            //   menuItemIds: allCartData.map(item => item.product_id),
              status: 'pending',
            }

            const res = await axiosPublic.post(`/servicePayments`, payment);
            console.log('payment saved', res.data);

            if(res.data?.paymentRequest?.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for payment.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            navigate(`/dashboard/paymentHistory`)

          }
        }



    }
    return (
        <form onSubmit={handleSubmit}>
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm bg-orange-400 my-4 text-white font-bold" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="py-2 text-red-500">{error}</p>
      {
        transactionId && <p className="py-4 text-green-600">Your transaction id: {transactionId}</p>
      }
        </form>
    );
};

export default CheckoutForm1;