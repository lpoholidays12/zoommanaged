import express from "express"

import {verifyJwt} from "../middlewares/auth.js"
import  { getPackages,getPackage } from "../controllers/salesController.js" 

const router = express.Router();

router.use(verifyJwt);

router.get("/package", getPackages);

router.get('/package/:id', getPackage)


export default router