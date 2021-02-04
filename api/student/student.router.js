const { addstudent, getstudents, getstudentbyid, deletestudent, updatestudent, getstudentbyusername }=require('./student.controller');
const router=require('express').Router();
router.post("/addstudent",addstudent);
router.get('/getstudents',getstudents);
router.get('/getstudentbyid/:id',getstudentbyid);
router.delete('/deletestudent',deletestudent);
router.patch('/updatestudent',updatestudent);
router.post('/login',getstudentbyusername);
module.exports=router