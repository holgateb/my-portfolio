const express = require("express");
const router = express.Router();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));