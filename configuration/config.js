const sql=require('mssql');
require('dotenv').config();
const config={
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    port:parseInt(process.env.DB_PORT,10),
    server:process.env.DB_SERVER,
    database:process.env.DB_NAME,
    options:{
        encrypt: true,
        enableArithAbort: true
    } 
};
const pool=sql.connect(config)
.then(p=>{
    console.log("Connected to SQL database.");
    //console.log(p);
    //return p
})
.catch(err=>console.log("Database connection error."));

module.exports={
    config
};