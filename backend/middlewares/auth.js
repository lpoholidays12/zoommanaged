import dotenv from "dotenv";
dotenv.config()
import jwt from "jsonwebtoken";

const verifyJwt = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.sendStatus(400);
  }

  jwt.verify(token.replace("Bearer ", ""), process.env.SECRET_KEY , (err) => {
    if (err) {
      return res.sendStatus(401);
    }
    next();
  });
};


const createJwt = (username) => {
  const token = jwt.sign({ user: username }, process.env.SECRET_KEY, { expiresIn: 60 * 60 })
  return token
}

export { verifyJwt, createJwt }