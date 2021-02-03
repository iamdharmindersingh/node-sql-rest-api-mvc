const {config} = require('../../configuration/config');
const sql=require('mssql');
module.exports={
    create:async (data,callback)=>{
        let pool=await sql.connect(config);
        let insert = await pool.request()
        .input('StudentID',sql.Int,data.StudentID)
        .input('StudentName',sql.VarChar,data.StudentName)
        .input('Age',sql.Int,data.Age)
        .input('Address',sql.VarChar,data.Address)
        .execute('savestudent',(error,results)=>{
            if(error){
                return callback(error);
            }
            return callback(null,results);
        });
    }
};