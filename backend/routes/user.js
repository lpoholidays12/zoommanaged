import express from 'express';
import  { loginUser} from "../controllers/userController.js"

const router = express.Router();


router.post('/login', loginUser);
// router.post('/signup', signUpUser);


export default router