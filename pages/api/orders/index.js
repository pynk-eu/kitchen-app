import { getServerSession } from "next-auth";
import dbConnect from "../../../db/connect";
import Order from "@/db/models/Order";
import { authOptions } from "../auth/[...nextauth]";
import Menu from "@/db/models/Menu";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      console.log(request.body)
      const session = await getServerSession(request, response, authOptions)
      console.log(session)
      if (session) {
        const { items } = request.body;
        const userId = session.user.userId;
        let total = 0;

        for (let i = 0; i < items.length; i++) {
          const item = await Menu.findById(items[i].itemId)
          console.log(item)
          total += (item.price * items[i].qty);
        }

        await Order.create({ items, orderPlacedBy: userId, total });

        response.status(200).json({ status: "Order Placed" });
      } else {
        response.status(401).json({ error: 'PLease login to place order' })
      }
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}