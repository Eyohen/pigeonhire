import axios from "axios";



export const getStripePlans = async () => {

    const config = {
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
    };
  
    const res = await axios.get(
      `https://api.stripe.com/v1/plans?limit=100`,
      config
    );
    
    console.log("Stripe plans response:", res);
    return res;
  };