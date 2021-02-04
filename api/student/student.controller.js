const {create,get,getbyid,remove,update,getbyusername}=require('./student.service');
const { genSaltSync, hashSync, compareSync }=require('bcrypt');
const { sign } = require('jsonwebtoken');
const { json } = require('body-parser');
const { jsonkey } = require('../../configuration/config');
module.exports={
    addstudent:(req,res)=>{
        const body=req.body;
        const salt=genSaltSync(10);
        body.password=hashSync(body.password,salt);
        create(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:error,
                    data:null
                });
            }
            return res.status(200).json({
                success:1,
                message:'record successfully added.',
                data:results
            });
        });
    },
    getstudents:(req,res)=>{
        get((error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:error.message,
                    data:null
                })
            }
            return res.status(200).json({
                success:1,
                message:'',
                data:results
            })
        });
    },
    getstudentbyid:(req,res)=>{
        const id=req.params.id;
        getbyid(id,(error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:'no record found.',
                    data:null
                })
            }
            return res.status(200).json({
                success:1,
                message: '',
                data:results
            })
        });
    },
    deletestudent:(req,res)=>{
        const id=req.body.studentid;
        remove(id,(error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:error.message,
                    data:null
                })
            }
            return res.status(200).json({
                success:1,
                message:'',
                data:results
            })
        });
    },
    updatestudent:(req,res)=>{
        const body=req.body;
        const salt=genSaltSync(10);
        body.password=hashSync(body.password,salt);
        update(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:error,
                    data:null
                });
            }
            return res.status(200).json({
                success:1,
                message:'record successfully updated.',
                data:results
            });
        });
    },
    login:(req,res)=>{
        const body=req.body;
        getbyusername(body.username,(error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:error.message,
                    data:null
                })
            }
            if(!results){
                return res.json({
                     success:0,
                    message:'invalid email or password.'
                });
            }
            
            const result=compareSync(body.password,results.recordset[0].password);
            if(result){
                result.password=undefined;
                const jsontoken=sign({result:results},jsonkey,{
                    expiresIn:"1hr",
                });
                return res.json({
                    success:1,
                    message:"login successful",
                    token:jsontoken
                });
            }
            else{
                return res.json({
                    success:0,
                    message:"invalid email or password."
                });
            }
        });
    }
}