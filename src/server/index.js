// dotenv - loads environment variables from a .env file
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "../../dist");
console.log(publicPath);
const port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//EndPoint
const feeling = require("./feeling");
app.use("/api/feeling", feeling);

//Public Folder
app.use(express.static(publicPath));

app.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
