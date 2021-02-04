const { addstudent, getstudents, getstudentbyid, deletestudent, updatestudent, login }=require('./student.controller');
const router=require('express').Router();
const {checktoken}=require('../../auth/auth.validation');
router.post("/addstudent",checktoken,addstudent);
router.get('/getstudents',checktoken,getstudents);
router.get('/getstudentbyid/:id',checktoken,getstudentbyid);
router.delete('/deletestudent',checktoken,deletestudent);
router.patch('/updatestudent',checktoken,updatestudent);
router.post('/login',login);
module.exports=router