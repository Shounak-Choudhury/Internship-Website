const mongoose=require('mongoose');
const Cards=mongoose.Schema(
    {   
        iconUrl:String,
        title:String,
        subtitle:String,

    }
)
module.exports=mongoose.model('cards',Cards);