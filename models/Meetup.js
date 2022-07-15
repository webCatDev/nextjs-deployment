import mongoose from "mongoose";

const meetupSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  address: String,
});

const Meetup = mongoose.models.Meetup || mongoose.model("Meetup", meetupSchema);

export default Meetup
