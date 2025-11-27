import axios from "axios";

export const getStripePlans = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/pricing`
    );

    console.log("Pricing response:", res);
    return res;
  } catch (error) {
    console.error("Error fetching pricing:", error);
    throw error;
  }
};
