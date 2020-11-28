const express=require('express');
const router=express.Router();
const chaperones=require('../controllers/chaperones');
const Chaperone=require('../models/chaperone');

/*CREATE AND NEW ROUTE INITIAL DATABASE
app.get('/makecampground',async (req,res)=>{
    const camp=new Campground({title:'My Backyard',description:'cheap camping!'});
    await camp.save();
    res.send(camp);
})

*/
 router.route('/')
//INDEX ROUTE
.get(chaperones.index)
//CREATE ROUTE
.post(chaperones.createProfile);

//NEW ROUTE
router.get('/new',chaperones.renderNewForm);

router.route('/:id')
//SHOW ROUTE
.get(chaperones.showProfile)
//UPDATE ROUTE
.put(chaperones.updateProfile)
//DELETE ROUTE
.delete(chaperones.deleteProfile);


//EDIT ROUTE
router.get('/:id/edit',chaperones.renderEditForm);

module.exports=router;