const express = require("express")
const path = require("path")
const hbs = require("hbs")


const app = express()
const router = express.Router()
const port = process.env.PORT || 8000

// to read a static file
 const static_path = path.join(__dirname, "../public") 
 app.use(express.static(static_path)) 


const template_path=path.join(__dirname, "/templates/views")
const partials_path = path.join(__dirname, "/templates/partials")



//setting view engine
app.set('view engine', 'hbs');
app.set('views', template_path)

//to use partials
hbs.registerPartials(partials_path)


app.get("/", (req,res)=>{
    //res.send("this is home page")
    res.render("index")
})

app.get("/weather", (req,res)=>{
    res.render("weather")
})

app.get("/about", (req, res)=>{
    res.render("about")
})

 app.get("*", (req,res)=>{
    res.render("error404", {
        error_message:"Oops! Page Not Found"
    })

}) 



app.listen(`${port}`,()=>{
    console.log(`Listening to port ${port}`)
})