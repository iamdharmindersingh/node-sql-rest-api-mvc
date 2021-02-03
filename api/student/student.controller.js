const {create}=require('./student.service');
module.exports={
    addstudent:(req,res)=>{
        const body=req.body;
        create(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:error
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    }
}