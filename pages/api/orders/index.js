import dbConnect from "../../../db/connect";
import Order from "@/db/models/Order";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const { selectedItemsIds, userId } = request.body;
      await Order.create({ items: selectedItemsIds, orderPlacedBy: userId });

      response.status(201).json({ status: "Order Placed" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}