import express from "express";
import cors from "cors";
import db from "./controllers/dbController.js"
import userRoutes from "./routes/user.js";
import salesRoutes from "./routes/sales.js"

const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

const port = process.env.PORT || 5000

app.use('/api/sales', salesRoutes);
app.use('/api/user', userRoutes);

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