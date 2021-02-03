const { addstudent }=require('./student.controller');
const router=require('express').Router();
router.post("/",addstudent);
module.exports=router;