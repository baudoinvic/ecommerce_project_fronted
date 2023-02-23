
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import {useNavigate} from "react-router-dom";

const Success = () => {
  const stripeData = useSelector((state) => state.cart.stripeData)
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const data = stripeData.stripeData;
  console.log(stripeData);
  const cart = stripeData.cart;
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const createOrder = async () => {
      try {
        if (!data || !cart) {
          throw new Error("Missing required data to create an order.");
        }
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch (error) {
        console.error(error);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  console.log(location)
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "35px",
        color: "green"
      }}
    >
      


      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successful. Your order is being prepared...`}
         
        <button 
        style={{paadding: 10,
        width:200,
        cursor:"pointer",
        height: 50,marginTop:20}} onClick={()=>navigate("/home")}> Go to Homepage</button>
        
   </div>
  );
};

export default Success;