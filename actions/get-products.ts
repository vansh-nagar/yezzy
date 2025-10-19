"use server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const woocommerce = new WooCommerceRestApi({
  url: "http://localhost:10004/",
  consumerKey: process.env.WC_CONSUMER_KEY || "",
  consumerSecret: process.env.WC_CONSUMER_SECRET || "",
  version: "wc/v3",
});

export const getProducts = async () => {
  try {
    const response = await woocommerce.get("products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await woocommerce.get(`products`, {
      id: parseInt(id),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
