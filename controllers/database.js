import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config()


const pool = mysql.createPool({
    host: '184.168.114.114',
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database:'zoom-uat',
    waitForConnections: true,
    connectionLimit:20,
    queueLimit:0,
})

export default pool.promise()


// import md5 from "md5";

// var pass = "Sakshi@123";
// var hashed_password = md5(pass)
// const connection = pool.promise();
// async function showDatabases(){
//     try{
//         const[rows,fields] =  await connection.query(`INSERT INTO employees(name, gender, password,department_id) values('Sakshi', 'F','`+hashed_password+`', 4)`);
        
//     }catch(err){
//         console.log(err)
//     }
// }

// showDatabases()