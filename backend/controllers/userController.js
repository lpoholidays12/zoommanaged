import  db from './dbController.js';
import md5 from 'md5';
import { createJwt } from '../middlewares/auth.js';

const loginUser = async (req, res) => {
    var userid = req.body.userid;
  var password = md5(req.body.password);

  var existinguser = await db.query("Select employee_id, password, department_id from employees where name='" + userid + "'")

  if (existinguser[0][0] == undefined) {
    return res.json({status:"404",message:"User not found"})
  }
  else {
    if (password === existinguser[0][0].password) {
      
      var department = await db.query("Select name from departments where department_id='" + existinguser[0][0].department_id + "'")
      const user = {
        employee_id: existinguser[0][0].employee_id,
        name: userid,
        department : department[0][0].name,
      }
      const token = createJwt(user);
      res.json({ Login: true, token: token })
    } else {
      res.json({Value: true, status:"401",message:"Unauthorize Access: Password didnt match"});
    }
  }
}

// const signUpUser = async (req, res) => {
//     const {email,password} = req.body;
//     try{
//         const user = await User.signup(email,password);
//         const token= createToken(user._id);

//         res.status(200).json({email,token})
//     }catch(err){ 
//         res.status(400).json({error:err.message})
//     }
    
// }

export {loginUser}