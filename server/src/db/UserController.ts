//from https://dev.to/alexmercedcoder/basic-authentication-with-node-express-and-mongo-1a1c
var { Router } = require("express"); // import router from express
const User = require("./user"); // import user model
const bcrypt = require("bcryptjs"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens
import { Request, Response } from "express";

const router = Router(); // create router to create route bundle

//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
const { SECRET = "secret" } = process.env;

// Signup route to create a new user
router.post("/signup", async (req: Request, res: Response) => {
  try {
    // hash the password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // create a new user
    const user = await User.create(req.body);
    const token = await jwt.sign({ username: user.username }, SECRET);
    // send new user as response
    res.json(token);
  } catch (error: any) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      //There was a duplicate key error
      return res.status(400).json({
        message: "Email already in use.",
        data: { error },
      });
    } else return res.status(400).json({ error });
  }
});

// Login route to verify a user and get a token
router.post("/login", async (req: Request, res: Response) => {
  try {
    // check if the user exists
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      //check if password matches
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        // sign token and send it in response
        const token = await jwt.sign({ username: user.username }, SECRET);
        res.json({ token });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;
