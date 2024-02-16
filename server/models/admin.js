const mongoose= require('mongoose')

const AdminSchema = new mongoose.Schema({
    name:String,
    id:Number,
    password:String
})
const AdminModel= mongoose.model("teachers",AdminSchema)
module.exports = AdminModel;