import StripeCheckout from "react-stripe-checkout";
const key= "pk_test_51MRGm1Lq2BvYijBiDuN5i552dbwsM0Kg2ps3UXbhSo2aJfPTiNzpMQmHzBTQZmHmLzQI92YN0Be4iRzxwIjSVZEp007tP4Nsy7"
 
  const Pay = () => {
     
     const onToken = (token) =>{
        console.log(token)
     }
    return(
    
         <div style={{
            height:100, 
            display: "flex",
             alignItems:"center", 
             justifyContent: "center",

             }}>
            
              <StripeCheckout 
              name="Buy with me"
               image="https://avatars.githubusercontent.com/u/1486366?v=4"
               billingAddress
               shippingAddress
               description="your total is $20"
               amount={2000}
               token={onToken}
               stripeKey={key}
              
               >
            <button style={{
                border: "none" , 
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

  export default Pay;