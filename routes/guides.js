const express=require('express');
const router=express.Router();
const Guide=require('../models/guide');
const guides=require('../controllers/guides');
const passport=require('passport');


router.route('/register')
.get(guides.guideRenderRegister)
.post(guides.register);
router.route('/login')
.get(guides.renderLogin)
.post(passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),guides.Login);
router.get('/logout',guides.Logout);
module.exports=router;