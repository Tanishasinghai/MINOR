
const mongoose=require('mongoose');
const cities=require('./cities');
const faker = require('faker');
const Chaperone=require('../models/chaperone');

mongoose.connect('mongodb://localhost:27017/travel',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'Connection error:'));
db.once('open',()=>{
    console.log('Database Connected');
});

const sample=array=>array[Math.floor(Math.random()*array.length)];


const seedDB=async ()=>{
    await Chaperone.deleteMany({});
    
    for(let i=0;i<20;i++){
        let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let phone = faker.phone.phoneNumber();
        const random1000=Math.floor(Math.random()*1000);
        const price=Math.floor(Math.random()*20)+10;
    const chaperone=new Chaperone({
        firstName,
        lastName,
        phone,
        location:`${cities[random1000].city},${cities[random1000].state}`,
        description:'We take the stress out of inter-railing, so you can go everywhere you’ve always wanted to go without worrying about the boring stuff. With transport, accommodation and directions included, we’re pioneering a new way to travel around the globe.Pick from our popular routes or make your own. If you want the best inter-railing experience, then book one of our group tours — travel in a small group with a dedicated Euroventure group leader.',
        price,
    })
    await chaperone.save();
    console.log(chaperone);
}
}
seedDB().then(()=>{
    mongoose.connection.close();
})