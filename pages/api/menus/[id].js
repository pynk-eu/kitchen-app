import dbConnect from "../../../db/connect";
import Menu from "@/db/models/Menu";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const menus = await Menu.findById(id);

    if (!menus) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(menus);
  }
}