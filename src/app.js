const express= require('express');
const hbs = require('hbs');
const bodyparser=require('body-parser');
const details=require('../src/models/details');
const slider=require('./models/slider');
const Cards=require('./models/cards');


const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://Root:kgILypQu5AvRe3Ng@cluster0.acvn3t4.mongodb.net/').
then(
    console.log("Mongo db connected")
    
);
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

/*Cards.create(
    {
    iconUrl: "fa-solid fa-wallet",
    title: "Provide Best courses",
    subtitle:"We provide courses that help our students learn in the best possible way."
    
    } ,
    {
    iconUrl: "fa-solid fa-money-bill",
    title: "Learn projects",
    subtitle:"We provide hands on project building experience."
    
    }   ,
    {
    iconUrl: "fa-brands fa-linkedin",
    title: "Get jobs",
    subtitle:"We prepare you for GD/PIs and aptitude as well"
    
    },
    {
        iconUrl: "fa-solid fa-bullseye",
        title: "Learn to code",
        subtitle:"We provide the best coding courses in python,C,Java,C++ and even courses on DSA"
        
    }

)*/




/*slider.create(
    {
    title: "Learn Java with ease",
    subTitle:"Java is one of the most popular programming languages",
    imageUrl: "/static/images/s1.jpeg"
    } ,
    {
    title: "What is Django in python",
    subTitle:"Django is the most famous nweb framewrok ofn python programming",
    imageUrl: "/static/images/s2.jpeg"
    }   ,
    {
    title: "What about node js",
    subTitle:"Best language for backend developement",
    imageUrl: "/static/images/s3.jpeg"
    }     
)*/

/*details.create({
    brandName: "sustainEvoInternship",
    brandIconUrl: "/Users/shounakchoudhury/Desktop/WEBSITE_Internship/public/images/pic.jpeg",
    links:[
        {
            label:"home",
            url:"/"
        },
        {
            label:"Service",
            url:"/services"
        },
        {
            label:"Gallery",
            url:"/gallery"
        },
        {
            label:"About",
            url:"/about"
        },
        {
            label:"Contact us",
            url:"/contact-us"
        }

    ]
})*/


app.use(express.json());
const routes= require('../routes/main');
app.use('/static',express.static("public"));
app.use('',routes);

hbs.registerPartials("views/partials");

//template engine
app.set('view engine', 'hbs');
app.set("views","views");

app.listen(3000,()=>{console.log('Listening on port 3000');});



