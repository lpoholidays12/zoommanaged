import mysql from "mysql2";

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'lpo@123',
    database:'zoomdatasets',
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