require("dotenv").config();
const app = require("./server/index");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
const DB_URL = process.env.URL;
mongoose
  .connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => {
    console.log("mongoose is live");
    app.listen(port, () => console.log(`Hey, App runs on port ${port}!`));
  })
  .catch(err => console.log(err));
