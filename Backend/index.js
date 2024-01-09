const express=require('express');
const cors=require('cors');
require('./DB/Config')

const app=express();

const User=require('./DB/User');


app.use(express.json());
app.use(cors());


app.post('/register',async(req,resp)=>{
    let user=new User(req.body);
    let result=await user.save()
    result=result.toObject();
    delete result.password;
    
    resp.send(result);

})


app.post('/login',async(req,resp)=>{
    if(req.body.password && req.body.email){
        let user=await User.findOne(req.body).select("-password");
        resp.send(user);
       
    }else{
        resp.send({result:"No Result Found"})
    }
})

app.listen(5000)