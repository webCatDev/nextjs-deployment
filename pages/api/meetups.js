import connectMongo from '../../utils/connectMongo'
import Meetup from "../../models/Meetup";


async function handler(req, res) {
    await connectMongo()
    const meetups = await Meetup.find()
    console.log(meetups)

    res.status(200).json(meetups)
}

export default handler