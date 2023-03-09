import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from 'react-redux';

const key = "pk_test_51MRGm1Lq2BvYijBiDuN5i552dbwsM0Kg2ps3UXbhSo2aJfPTiNzpMQmHzBTQZmHmLzQI92YN0Be4iRzxwIjSVZEp007tP4Nsy7"

function PaymentComponent() {
  const dispatch = useDispatch()

  function handlePayment() {
    // Make payment and get transaction details
    const transaction = {
      id: 1,
      amount: 100,
      method: 'credit card',
      datetime: new Date()
    }
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
  }

  return (
    <div style={{
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <StripeCheckout
        name="Buy with me"
        image="https://avatars.githubusercontent.com/u/1486366?v=4"
        billingAddress
        shippingAddress
        description="your total is $200"
        amount={20000}
        token={handlePayment}
        stripeKey={key}
      >
        <button style={{
          border: "none",
          width: 170,
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "black",
          color: "white",
          fontWeight: "600",
          margin: "2px",
          cursor: "pointer",
          marginTop: "680px",
        }}>
          pay Now
        </button>
      </StripeCheckout>
    </div>
  );
}

const Pay = () => {
  const onToken = (token) => {
    console.log(token)
  }

  return (
    <PaymentComponent />
  );
}

export default Pay;