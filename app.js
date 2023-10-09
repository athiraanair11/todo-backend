const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const todoModel = require("./todoModel/todoModel")

var app= Express()

app.use(Cors())
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))



Mongoose.connect("mongodb+srv://athiraanil:athira@cluster0.akmt4eq.mongodb.net/tododb?retryWrites=true&w=majority",{useNewUrlParser:true})


app.get("/",(req,res)=>{

    res.send("welcome to todo app")
})

app.post("/add",async(req,res)=>{

    let data=new todoModel(req.body)
    console.log(data)
    await data.save()
   


    res.send(data)
})

app.post("/delete",async(req,res)=>{
    let data=await todoModel.find(req.body)

    res.send("data")
})

app.get("/viewall",async(req,res)=>{
    let data=await todoModel.find()

    res.send(data)
})

app.listen(3000)