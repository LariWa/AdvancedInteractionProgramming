//https://dev.to/alexmercedcoder/basic-authentication-with-node-express-and-mongo-1a1c
const Data = require("./data"); // import user model
import { Router } from "express";
const router = Router(); // create router to create route bundle
import { isLoggedIn } from "../middleware";
var _ = require("lodash");
import { Request, Response } from "express";

// get all data for user
router.get("/", isLoggedIn, async (req: Request, res: Response) => {
  try {
    res.json(await Data.findOne({ username: req.body.user.username }));
  } catch (error) {
    res.status(400).json({ error });
  }
});
router.get(
  "/getFavourites",
  isLoggedIn,
  async (req: Request, res: Response) => {
    try {
      res.json(
        (await Data.findOne({ username: req.body.user.username })).favourites
      );
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);
router.get("/getGroceries", isLoggedIn, async (req: Request, res: Response) => {
  try {
    res.json(
      (await Data.findOne({ username: req.body.user.username })).groceries
    );
  } catch (error) {
    res.status(400).json({ error });
  }
});
// add favourite for user
router.post(
  "/addFavourite",
  isLoggedIn,
  async (req: Request, res: Response) => {
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
  }
);
router.post(
  "/addIngredient",
  isLoggedIn,
  async (req: Request, res: Response) => {
    try {
      res.json(
        await Data.update(
          { username: req.body.user.username },
          { $addToSet: { groceries: req.body.ingredient } },
          { upsert: true }
        )
      );
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);
router.post(
  "/deleteIngredient",
  isLoggedIn,
  async (req: Request, res: Response) => {
    try {
      res.json(
        await Data.update(
          { username: req.body.user.username },
          { $pull: { groceries: req.body.ingredient } }
        )
      );
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);

// delete favourite
router.post(
  "/deleteFavourite",
  isLoggedIn,
  async (req: Request, res: Response) => {
    try {
      res.json(
        await Data.updateOne(
          { username: req.body.user.username },
          { $pull: { favourites: req.body.id } }
        ).catch((error: any) => res.status(400).json({ error }))
      );
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);
router.post(
  "/addIngredient",
  isLoggedIn,
  async (req: Request, res: Response) => {
    try {
      res.json(
        await Data.update(
          { username: req.body.user.username },
          { $addToSet: { groceries: req.body.ingredient } },
          { upsert: true }
        )
      );
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);
router.post(
  "/deleteIngredient",
  isLoggedIn,
  async (req: Request, res: Response) => {
    try {
      res.json(
        await Data.update(
          { username: req.body.user.username },
          { $pull: { groceries: req.body.ingredient } }
        )
      );
    } catch (error) {
      res.status(400).json({ error });
    }
  }
);
router.get("/topTen", async (req, res) => {
  try {
    let data = await Data.find({});
    let favs = data.flatMap(
      (entry: {
        toObject: () => { (): any; new (): any; favourites: Array<string> };
      }) => entry.toObject().favourites
    );
    var counter = _.countBy(favs);
    var result = _(favs)
      .uniq()
      .sortBy((elem: string) => counter[elem])
      .reverse()
      .value();
    res.json(result.slice(0, 10));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

export default router;
