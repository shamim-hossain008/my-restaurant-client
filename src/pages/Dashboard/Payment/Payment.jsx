import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTaitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

// add publishable key  ('')
const stripePromise = loadStripe (import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
