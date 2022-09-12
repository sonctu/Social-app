const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const db = require("./configs/connectDB");

const app = express();

dotenv.config();
app.use(cors());
app.use(cookieParser());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

db.connect();

routes(app);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running...");
});
