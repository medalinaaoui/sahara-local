import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
const connect = async () => {
  try {
    await mongoose.connect(process.env.DBURI);
    console.log("connected successfully");
  } catch (error) {
    if (error) console.log("error from connecting to mongoDb: ", error);
  }
};
connect();
const PORT = 8000;
app.listen(process.env.PORT || PORT, (err) => {
  if (!err) console.log("server runnig on port: ", PORT);
});
