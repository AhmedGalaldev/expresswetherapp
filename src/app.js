const path=require('path')
const express = require('express')
const hbs = require('hbs')
const foreCast = require('./utils/forecast')
const geoCode = require('./utils/geocode')

const app = express()
// express config 
// static assets
const publicDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

// hbs 
//default view
app.set('view engine', 'hbs')

// custimize to template
const viewsPath =path.join(__dirname,'../templates/views')
const parialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(parialsPath)
app.set('views',viewsPath)


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
        msg:"Can We Help You",
        title:"Help",
        name:"Ahmed Galal"
    })
})
app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"no address"
        })
    }
    geoCode(req.query.address,(error,{location,longitude,lititude}={})=>{
        if(error){
            return res.send({error})
        }
        foreCast(longitude,lititude,(error,forCasteData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forCasteData,
                location,
                address:req.query
            })
        })
    })

    // res.send(
    //     {
    //         forcecast:"it is hot",
    //         location:"Egypt",
    //         address:req.query.address
    //     }
    // )
})

app.get("/products",(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:"there is no search in request"
        })
    }
    res.send({
        "products":[]
    })
})
app.get('/help/*',(req,res)=>{
    res.render('error',{
        error:"help article is not found",
        title:"404",
        name:"Ahmed Galal"
    }
    )
})
app.get('*',(req,res)=>{
    res.render('error',{
        error:"Page NOt Found",
        title:"404",
        name:"Ahmed Galal"
    }
    )
})
app.listen(3000,()=>{
    console.log("Server is up on port 3000.");
    
})