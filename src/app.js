const express = require('express')

const app = express()

app.get('',(req,res)=>{
    res.send('<h1>hello express</h1>')
})

app.get('/help',(req,res)=>{
    res.send([
        {
            name:"Ahmed"
        },
        {
            name:"Ali"
        }
    ])
})

app.get('/about',(req,res)=>{
    res.send("<h3>about page</h3>")
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