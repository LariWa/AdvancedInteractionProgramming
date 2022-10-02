//https://dev.to/alexmercedcoder/basic-authentication-with-node-express-and-mongo-1a1c
const Data = require("./data"); // import user model
import{ Router } from "express";

const dataRouter = Router(); // create router to create route bundle
// const { isLoggedIn } = require("../middleware");
import {isLoggedIn} from "../middleware"
// get all data for user
dataRouter.post("/", isLoggedIn, async (req, res) => {
  //const { username } = req.body.user; // get username from req.user property created by isLoggedIn middleware
  return res.json(
    await Data.find( req.body.user).catch((error) =>
      res.status(400).json({ error })
    )
  );
});

// add favourite for user
dataRouter.post("/add", isLoggedIn, async (req, res) => {
  try {
    console.log("add Fav" + req.body);
    res.json(
      await Data.update(
        { username: req.body.user },
        { $addToSet: { favourites: req.body } }
      ).catch((error) => res.status(400).json({ error }))
    );
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Login route to verify a user and get a token
dataRouter.post("/delete", isLoggedIn, async (req, res) => {
  try {
    console.log("delete Fav" + req.body);
    res.json(
      await Data.update(
        { username: req.body.user },
        { $pull: { favourites: req.body } }
      ).catch((error) => res.status(400).json({ error }))
    )
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = dataRouter;
