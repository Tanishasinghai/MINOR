const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');  


const guideSchema=new mongoose.Schema({
  email:{
      type:String,
      required:true,
      unique:true
  }
});
guideSchema.plugin(passportLocalMongoose); 
module.exports=mongoose.model('Guide',guideSchema);