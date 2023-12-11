import dotenv from "dotenv";
dotenv.config()

import mysql from "mysql2";



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


// const connection = pool.promise();
// async function showDatabases(){
//     try{
//         const[rows,fields] =  await connection.query(`Show tables`);
//         console.log(rows)
        
//     }catch(err){
//         console.log(err)

//     }
// }

// showDatabases()