import jwt from "jsonwebtoken"

const secretKey = "YourSecretKey";

const verifyJwt = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.sendStatus(400);
  }

  jwt.verify(token.replace("Bearer ", ""), secretKey, (err) => {
    if (err) {
      return res.sendStatus(401);
    }
    next();
  });
};



const createJwt = (username) => {
  const token = jwt.sign({ user: username }, secretKey, { expiresIn: 60 * 60 })
  return token
}

export { verifyJwt, createJwt }