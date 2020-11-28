const express=require('express');
const app=express();
const path=require('path');
const ejsMate=require('ejs-mate');
const methodOverride=require('method-override');
const mongoose=require('mongoose');
const passport=require('passport');
const LocalStrategy=require('passport-local');



//GUIDE MODEL
const Guide=require('./models/guide');
//CHAPERONE MODEL
const Chaperone=require('./models/chaperone');

//GUIDE ROUTES
const guideRoutes=require('./routes/guides');
// REQUIRING CHAPERONE ROUTER
const chaperoneRoutes=require('./routes/chaperones');
 
mongoose.connect('mongodb://localhost:27017/travel',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Connection error:'));
db.once('open',()=>{
    console.log('Database Connected');
});


app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(Guide.serializeUser());
passport.deserializeUser(Guide.deserializeUser());

//ROUTE HANDLER
app.use('/',guideRoutes);
app.use('/chaperones',chaperoneRoutes);

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(3000,()=>{
    console.log('connected to Port');
})

