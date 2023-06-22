import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClassCart from "../../../hooks/useSelectedClassCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    const [selectedCart] = useSelectedClassCart();
    const total = selectedCart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <Helmet>
                <title>The Creativity Center | Payment</title>
            </Helmet>
            <SectionTitle heading={"Please proceed to Payment"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} selectedCart={selectedCart}></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;