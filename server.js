const express = require("express");
const router = express.Router();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
// app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});