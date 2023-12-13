import express, { Router } from "express"

import {verifyJwt} from "../middlewares/auth.js"
import  { getPackageList,getPackage,getPackageType } from "../controllers/salesController.js" 

const router = express.Router();

router.use(verifyJwt);

router.get("/", getPackageType)

router.get("/:id", getPackageList);

router.get('/package/:id', getPackage)


export default router