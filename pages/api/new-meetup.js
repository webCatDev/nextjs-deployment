import connectMongo from "../../utils/connectMongo";
import Meetup from '../../models/Meetup'

async function handler(req, res) {
    if (req.method === "POST") {
    await connectMongo()
    const { title, description, image, address } = req.body;
    const meetup = await Meetup.create({ title, description, image, address });

    console.log(meetup);

    res.status(201).json({ message: "inserted", data: meetup });
  }
}

export default handler;
