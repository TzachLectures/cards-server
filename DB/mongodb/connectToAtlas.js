const mongoose = require("mongoose");

const userName = process.env.ATLAS_USER_NAME;
const password = ATLAS_USER_NAME.env.ATLAS_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@cluster0.x6eafhe.mongodb.net/`
  )
  .then(() => console.log("connected to MongoDb Atlas!"))
  .catch((error) => console.log(`could not connect to mongoDb: ${error}`));
