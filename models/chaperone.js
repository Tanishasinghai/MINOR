const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const ChaperoneSchema=new Schema({
    firstName: String,  
    lastName:String,
    phone:String,
    price:Number,
    description:String,
    location:String,
     
});

module.exports=mongoose.model('Chaperone',ChaperoneSchema);