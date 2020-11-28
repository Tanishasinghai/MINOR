const Chaperone=require('../models/chaperone');


module.exports.index=async (req,res)=>{
    const chaperones=await Chaperone.find({});
    res.render('chaperones/index',{chaperones});
};

module.exports.renderNewForm=(req,res)=>{
    res.render('chaperones/new');
};

module.exports.createProfile=async (req,res)=>{
    const chaperone=new Chaperone(req.body.chaperone);   
     await chaperone.save();
     console.log(chaperone);
     res.redirect(`/chaperones/${chaperones._id}`);  
 };

 module.exports.showProfile=async (req,res)=>{
    const chaperone=await Chaperone.findById(req.params.id);
    if(!chaperone){
        return res.redirect('/chaperones');
    }
    res.render('chaperones/show',{chaperone});
};

module.exports.renderEditForm=async (req,res)=>{
    const {id}=req.params;
    const chaperone=await Chaperone.findById(id);
    if(!chaperone){
        return res.redirect('/chaperones');
    }
    res.render('chaperones/edit',{chaperone});
};

module.exports.updateProfile=async (req,res)=>{
    const {id}=req.params; 
    console.log(req.body);
    const chaperone=await Chaperone.findByIdAndUpdate(id,{...req.body.chaperone})
    
    await chaperone.save();
    
   res.redirect(`/chaperones/${chaperone._id}`);
};

module.exports.deleteProfile=async (req,res)=>{
    const {id}=req.params;
    await Chaperone.findByIdAndDelete(id);
 
    res.redirect('/chaperones');
};

