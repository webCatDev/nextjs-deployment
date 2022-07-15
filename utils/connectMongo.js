import mongoose from "mongoose";
const connectStr =
  "mongodb+srv://webcatdev:t9EgoYgiYSMQMRR9@cluster0.iea6c.mongodb.net/cluster0?retryWrites=true&w=majority";

const connectMongo = async () => mongoose.connect(connectStr).catch((err) => console.log(err));

export default connectMongo
