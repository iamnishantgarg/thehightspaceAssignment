const express = require("express");
const User = require("./user");
const mongoose = require("mongoose");
const app = express();
const MONGO_URI =
  "mongodb+srv://owner:dbowner@cluster0-hfi0g.mongodb.net/thehighspace?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

const seedData = (req, res) => {
  const data = {
    name: "Naveen",
    age: 22,
    sex: "Other",
    addresses: ["mumbai"],
  };
  User.create({ ...data })
    .then((user) => {
      console.log(user);
      return res.send("data seeded");
    })
    .catch((err) => {
      console.log(err);
      return res.send("error");
    });
};

// fetching addresses of single user

app.get("/users/:id", (req, res) => {
  console
    .log(req.params.id)
    .then((user) => {
      if (user) return res.json({ success: true, addresses: user.addresses });
      else return res.json({ success: false, error: "No user with this id" });
    })
    .catch((err) => {
      console.log("[USER]" + err);
      return res.json({ success: false, error: err });
    });
});

// fetching all user end point

app.get("/users", (req, res) => {
  User.find({}, "name age sex _id")
    .then((users) => {
      // console.log(users);
      if (users) return res.json({ success: true, users });
      else return res.json({ success: true, message: "no user found" });
    })
    .catch((err) => {
      console.log("[USER:" + err);
      return res.json({ success: false, error: err });
    });
});

app.get((req, res) => res.json({ success: false, error: "unhandled route" }));

mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log("[DBERROR]:" + err);
    else
      app.listen(PORT, () => {
        console.log(`Server is active on port ${PORT}`);
      });
  }
);
