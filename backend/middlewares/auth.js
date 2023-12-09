import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()



const verifyJwt = (req, res, next) => {
  const token = req.headers["access-token"];
  if (!token) {
    return res.json("we need token please provide it for next time")
  } else {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json("Not Authenticated")
      } else {
        req.userid = decoded.password;
        next()
      }
    })
  }
}

const createJwt = (password) => {
  const token = jwt.sign({ data: password }, secretKey, { expiresIn: 60 * 60 })
  return token
}

export { verifyJwt, createJwt }
