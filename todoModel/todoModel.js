const Mongoose=require("mongoose")

let todoSchema=Mongoose.Schema(

    {
        title:String,
        description:String,
        category:String
        
    }
)

let todoModel=Mongoose.model("todo",todoSchema)
module.exports=todoModel