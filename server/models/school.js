const mongoose= require('mongoose')

const SchoolSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const SchoolModel= mongoose.model("students",SchoolSchema)
module.exports = SchoolModel;