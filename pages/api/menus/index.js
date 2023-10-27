import dbConnect from "../../../db/connect";
import Menu from "@/db/models/Menu";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const menus = await Menu.find();
        response.status(200).json(menus);
    } else {
        response.status(404).json({ message: "Menu not found" });
    }

    if (request.method === "POST") {
        try {
            await Menu.create(request.body);
            response.status(201).send({ status: "Menu created" });
        } catch (err) {
            console.log(err);
            response.status(500).send({ error: err.message });
        }
    }
}

