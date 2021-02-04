require('dotenv').config();
const express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
const studentRouter=require('./api/student/student.router');
app.use("/api/student",studentRouter);
const app_port=process.env.APP_PORT;
app.listen(app_port,()=>{
    console.log('Api server is running on port:'+app_port);
});