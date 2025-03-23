import mongoose from "mongoose";
import 'dotenv/config'
const url = process.env.MONGODB_URL

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(url, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
export default connectDB;