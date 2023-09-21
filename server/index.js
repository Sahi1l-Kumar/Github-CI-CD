const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!


app.get("http://ec2-16-170-148-240.eu-north-1.compute.amazonaws.com:3000/", (req, res) => {
  res.status(200).json({message: "Hi"});
});

app.listen(3000, () => console.log("Server running on port 3000"));
