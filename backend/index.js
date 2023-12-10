import express from "express";
import md5 from "md5";
import cors from "cors";
import db from "./controllers/database.js"
import axios from "axios";
import jwt from "jsonwebtoken";
import { verifyJwt, createJwt } from "./middlewares/auth.js";



// import userRoutes from "./routes/users.js"

const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

const port = process.env.PORT || 5000

app.post("/login", async function (req, res) {

  var userid = req.body.userid;
  var password = md5(req.body.password);

  var existinguser = await db.query("Select password, department_id from employees where name='" + userid + "'")

  if (existinguser[0][0] == undefined) {
    return res.json({ status: "404", message: "User not found" })
  }
  else {
    if (password === existinguser[0][0].password) {
      const token = createJwt(userid)
      var department = await db.query("Select name from departments where department_id='" + existinguser[0][0].department_id + "'")
      res.json({ Login: true, token: token, data: department[0][0].name })
    } else {
      res.json({ Value: true, status: "401", message: "Unauthorize Access: Password didnt match" });
    }
  }
})

app.get("/sales", verifyJwt, async function (req, res) {
  var packageData = await db.query(`SELECT * from packages`);

  const packages = packageData[0].reduce((result, packageItem) => {
    const packageType = packageItem.package_type;

    result[packageType] = result[packageType] || [];

    // Push the package to the array
    result[packageType].push(packageItem);

    return result;
  }, {});

  res.json({ packages })

})

app.get("/packages", verifyJwt, async function (req, res) {
  var packages = await db.query(`SELECT * FROM packages`)
  res.json({ Tours: packages[0] });
})

app.get("/subPackage", async function (req, res) {
  var subPackage = await db.query(`SELECT * FROM sub_package`)
  res.json({ subPackages: subPackage[0] })
})

app.get("/europeanTour", async function (req, res) {
  var europeanTours = await db.query(`SELECT * FROM sub_package WHERE package_id = 1`)
  res.json({ europeanTour: europeanTours[0] });
})

app.get("/internationalTour", async function (req, res) {
  var internationalTours = await db.query(`SELECT * FROM sub_package WHERE package_id = 2`)
  res.json({ internationalTour: internationalTours[0] });
})

app.get("/domesticTour", async function (req, res) {
  var domesticTours = await db.query(`SELECT * FROM sub_package WHERE package_id = 3`)
  res.json({ domesticTour: domesticTours[0] });
})

app.get("/asianTour", async function (req, res) {
  var asianTours = await db.query(`SELECT * FROM sub_package WHERE package_id = 4`)
  res.json({ asianTour: asianTours[0] });
})

app.listen(port, function () {
  console.log(`server is running on port number ${port}`);
})