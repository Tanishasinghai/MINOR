const Guide=require('../models/guide');

module.exports.guideRenderRegister=(req,res)=>{
    res.render('guides/register')
};

module.exports.register=async(req,res)=>{
    try{
     const {email,username,password}=req.body;
     const guide=new Guide({email,username});
     const registeredGuide=await Guide.register(guide,password);
     req.login(registeredGuide,err=>{
         if(err)return err;
         res.redirect('/');
     })
    
    }catch(e){
      console.log(e);
        res.redirect('/register');
    }
 };

 module.exports.renderLogin=(req,res)=>{
    res.render('guides/login')
};

module.exports.Login=(req,res)=>{
    
   res.redirect('/');
};

module.exports.Logout=(req,res)=>{
    req.logout();
    res.redirect('/');
};
