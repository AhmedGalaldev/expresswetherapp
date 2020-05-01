const path=require('path')
const express = require('express')

const app = express()
app.set('view engine', 'hbs')

const publicDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))
app.get('',(req,res)=>{
    res.render('index',{
        title:"home page",
        name:"Ahmed Galal"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About",
        name:"Ahmed Galal"
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        msg:"Can We Help You"
    })
})
app.get("/weather",(req,res)=>{
    res.send(
        {
            forcecast:"it is hot",
            location:"Egypt"
        }
    )
})
app.listen(3000,()=>{
    console.log("Server is up on port 3000.");
    
})