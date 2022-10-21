import axios from "axios";

import express, { Request, Response } from "express";
const router = express.Router();

//gets random meal
router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Ok");
});
module.exports = router;
