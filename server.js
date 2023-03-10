require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
app.use(cors());

const { PORT, HOST, MONGO_URI } = process.env;

/* const host = process.env.HOST;
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI; */

require("./app/routes")(app);

mongoose
  .connect(MONGO_URI )
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        (`DB connected and listening on ${HOST}:${[PORT]}`)
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });