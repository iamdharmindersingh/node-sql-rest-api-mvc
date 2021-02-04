const {config , pool} = require('../../configuration/config');
const sql=require('mssql');
module.exports={
    create:async (data,callback)=>{
        let pool=await sql.connect(config);
        let insert = await pool.request()
        .input('studentid',sql.Int,data.studentid)
        .input('studentname',sql.VarChar,data.studentname)
        .input('age',sql.Int,data.age)
        .input('address',sql.VarChar,data.address)
        .input('username',sql.VarChar,data.username)
        .input('password',sql.VarChar,data.password)
        .execute('savestudent',(error,results)=>{
            if(error){
                return callback(error);
            }
            return callback(null,results);
        });
    },
    get: async callback=>{
        let pool=await sql.connect(config);
        let students=await pool.request()
        .execute('getstudents',(error,results)=>{
            if(error){
                return callback(error);
            }
            return callback(null,results);
        });
    },
    getbyid: async (id,callback)=>{
        let pool=await sql.connect(config);
        let students=await pool.request()
        .input('studentid',sql.Int,id)
        .execute('getstudents',(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            return callback(null,results[0]);
        });
    },
    remove: async (id,callback)=>{
        let pool=await sql.connect(config);
        let students=await pool.request()
        .input('studentid',sql.Int,id)
        .execute('deletestudent',(error,results)=>{
            if(error){
                return callback(error);
            }
            return callback(null,results);
        });
    },
    update:async (data,callback)=>{
        let pool=await sql.connect(config);
        let insert = await pool.request()
        .input('studentid',sql.Int,data.studentid)
        .input('studentname',sql.VarChar,data.studentname)
        .input('age',sql.Int,data.age)
        .input('address',sql.VarChar,data.address)
        .input('username',sql.VarChar,data.username)
        .input('password',sql.VarChar,data.password)
        .execute('updatestudent',(error,results)=>{
            if(error){
                return callback(error);
            }
            return callback(null,results);
        });
    },
    getbyusername: async (username,callback)=>{
        let pool=await sql.connect(config);
        let students=await pool.request()
        .input('username',sql.VarChar,username)
        .execute('getstudentsbyusername',(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            return callback(null,results[0]);
        });
    }
};