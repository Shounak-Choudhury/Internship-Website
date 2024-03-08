const express= require('express');

const mongoose=require('mongoose');
const routes=express.Router();

const Detail= require('../src/models/details');
const slider = require('../src/models/slider');
const cards = require('../src/models/cards');
const Contact=require('../src/models/contact');

//app.listen(3000,()=>{console.log('Listening on port 3000');});



routes.get('/',async (req,res)=>
    {
        console.log("get rq success");
        const details= await Detail.findOne();
        const slides =await slider.find();
        const Cards= await cards.find();

       // console.log(Cards);

        res.render("index",{details:details , slides:slides, Cards:Cards});
    
    })

routes.get('/gallery',async (req,res)=>
    {   console.log("get rq success");
         const details= await Detail.findOne();
        res.render("gallery",{details:details});
    })
routes.post('/process-contact-form', async(req,res)=>
    {
        

        try {
            const data= await Contact.create(req.body);
            
            res.redirect("/");
        } catch (error) {
            console.log(error);
            res.send("Error redirecting to home page");
            res.redirect("/");
        }

        console.log("Query recieved");
        console.log(req.body);

    }
)
module.exports=routes;
