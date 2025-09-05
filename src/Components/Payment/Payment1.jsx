import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm1 from "./CheckoutForm1";
// import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment1 = () => {
    return (
        <div>
             <div>
                 <h2 className="text-4xl text-center uppercase font-bold">Payment </h2>
             </div>
             <div className="p-20">
                <Elements stripe={stripePromise}>
                    <CheckoutForm1></CheckoutForm1>
                </Elements>
             </div>
        </div>
    );
};

export default Payment1;