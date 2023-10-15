import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import registerRouter from "./routes/user/register.js";
import errorHandling from "./middlwares/error.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/register", registerRouter);
app.get("/hey", (req, res) => res.send("hey there!!"));

app.use(errorHandling);
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
