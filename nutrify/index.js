const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// importing models
const userModel = require("./models/userModel");
const foodModel = require("./models/foodModel");
const trackingModel = require("./models/trackingModel");
const verifyToken = require("./verifyToken");
// middele ware
const app = express();
app.use(express.json());
// database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/nutrify")
  .then(() => {
    console.log("Database connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

// endpoint for registering user
app.post("/register", (req, res) => {
  let user = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    if (!err) {
      bcrypt.hash(user.password, salt, async (err, hpass) => {
        if (!err) {
          user.password = hpass;
          try {
            let doc = await userModel.create(user);
            res.status(201).send({ message: "User Registered" });
          } catch (err) {
            console.log(err);
            res.status(500).send({ message: "Some Problem" });
          }
        }
      });
    }
  });
});
// endpoint for login

app.post("/login", async (req, res) => {
  let foundUser = req.body;
  try {
    let user = await userModel.findOne({ email: foundUser.email });
    if (user != null) {
      bcrypt.compare(foundUser.password, user.password, (err, success) => {
        if (success == true) {
          jwt.sign({ email: foundUser.email }, "safuyyeeApi", (err, token) => {
            if (!err) {
              res.send({ msg: "log in success", token: token });
            }
          });
        } else {
          res.send({ msg: "in correct password" });
        }
      });
    } else {
      res.send({ msg: "user not found with this email" });
    }
  } catch (error) {
    console.log(error);
    res.send({ msg: "some thing went wrong" });
  }
});
// end point to get all foods
app.get("/foods", verifyToken, async (req, res) => {
  try {
    let food = await foodModel.find();
    res.send(food);
  } catch (error) {
    console.log(error);
    res.send({ msg: "some thing went wrong for fetch foods" });
  }
});

// end points for search food
app.get("/foods/:name", verifyToken, async (req, res) => {
  try {
    let foods = await foodModel.find({
      name: { $regex: req.params.name, $options: "i" },
    });
    if (foods.length !== 0) {
      res.send(foods);
    } else {
      res.status(404).send({ message: "Food Item Not Fund" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Some Problem in getting the food" });
  }
});

//end points for track food
app.post("/track", verifyToken, async (req, res) => {
  let trackData = req.body;
  try {
    let data = await trackingModel.create(trackData);
    res.status(201).send({ msg: "food added successfully", data });
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: "something wen wrong while tracking" });
  }
});

// end ponits for fetching all eaten foods
app.get("/track/:userid", verifyToken, async (req, res) => {
  let userid = req.params.userid;
  let date = new Date(req.params.date);
  let strDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  try {
    let foods = await trackingModel
      .find({ userId: userid, eatenDate: strDate })
      .populate("userId")
      .populate("foodId");
    res.send(foods);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Some Problem in getting the food" });
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
