import { NextFunction, Request, Response } from "express";

const jwt = require("jsonwebtoken");

// MIDDLEWARE FOR AUTHORIZATION (MAKING SURE THEY ARE LOGGED IN)
const isLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // check if auth header exists
    if (req.headers.authorization) {
      // parse token from header
      const token = req.headers.authorization.split(" ")[1]; //split the header and get the token
      if (token) {
        const payload = await jwt.verify(token, "secret");
        if (payload) {
          // store user data in request object
          req.body.user = payload;
          next();
        } else {
          res.status(401).json({ error: "token verification failed" });
        }
      } else {
        res.status(401).json({ error: "malformed auth header" });
      }
    } else {
      res.status(401).json({ error: "No authorization header" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

// export custom middleware
export { isLoggedIn };
