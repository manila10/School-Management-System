const mongoose= require('mongoose')

const MarklistSchema = new mongoose.Schema({
    
    regno: Number,
    stname: String,
    std:String,
    english: Number,
    malayalam: Number,
     maths: Number

})
const MarklistModel= mongoose.model("marks",MarklistSchema)
module.exports = MarklistModel;
