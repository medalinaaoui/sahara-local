import express from "express";

const app = express();

const PORT = 8000;
app.listen(process.env.PORT || PORT, (err) => {
  if (!err) console.log("server runnig on port: ", PORT);
});
