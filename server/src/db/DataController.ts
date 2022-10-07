//https://dev.to/alexmercedcoder/basic-authentication-with-node-express-and-mongo-1a1c
const Data = require("./data"); // import user model
import { Router } from "express";
const router = Router(); // create router to create route bundle
import { isLoggedIn } from "../middleware";
// get all data for user
router.get("/", isLoggedIn, async (req, res) => {
  try {
    res.json(await Data.findOne({ username: req.body.user.username }));
  } catch (error) {
    res.status(400).json({ error });
  }
});
router.get("/getFavourites", isLoggedIn, async (req, res) => {
  try {
    res.json(
      (await Data.findOne({ username: req.body.user.username })).favourites
    );
  } catch (error) {
    res.status(400).json({ error });
  }
});
// add favourite for user
router.post("/addFavourite", isLoggedIn, async (req, res) => {
  try {
    res.json(
      await Data.update(
        { username: req.body.user.username },
        { $addToSet: { favourites: req.body.id } },
        { upsert: true }
      )
    );
  } catch (error) {
    res.status(400).json({ error });
  }
});

// delete favourite
router.post("/deleteFavourite", isLoggedIn, async (req, res) => {
  try {
    res.json(
      await Data.updateOne(
        { username: req.body.user.username },
        { $pull: { favourites: req.body.id } }
      ).catch((error) => res.status(400).json({ error }))
    );
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;
