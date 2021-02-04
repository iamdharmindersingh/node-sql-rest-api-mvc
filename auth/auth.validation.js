const { verify }=require('jsonwebtoken');
const {jsonkey}=require('../configuration/config');
module.exports={
    checktoken:(req,res,next)=>{
        let token = req.get("authorization");
        if(token){
            token=token.slice(7);
            verify(token,jsonkey,(error,decoded)=>{
                if(error){
                    res.json({
                        success:0,
                        message:'invalid token.'
                    });
                }
                else{
                    next();
                }
            });
        }
        else
        {
            res.json({
                success:0,
                message:'access denied.'
            })
        }
    }
}