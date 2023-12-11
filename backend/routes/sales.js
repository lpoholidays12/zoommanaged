import express from "express"

import {verifyJwt} from "../middlewares/auth.js"
import  { getAllPackages } from "../controllers/salesController.js" 

const router = express.Router();

router.use(verifyJwt);

router.get("/package", getAllPackages);

export default router