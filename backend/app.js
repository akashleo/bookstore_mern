const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:emptyTank4@cluster0.kju64.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => console.log(error));
