const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoutes);

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`.white)
);
