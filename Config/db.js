const mongoose=require("mongoose")
require("dotenv").config()
const connect=async()=>{
    return mongoose.connect("mongodb+srv://karish:chauhan@cluster0.l0lov9u.mongodb.net/mock12?retryWrites=true&w=majority")
}
module.exports=connect