import dbConnect from "../../../db/connect";
import Menu from "@/db/models/Menu";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const menus = await Menu.find();
        return response.status(200).json(menus);
    } else {
        return response.status(404).json({ message: "Menu not found" });
    }
}