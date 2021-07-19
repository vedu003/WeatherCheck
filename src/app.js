const express = require("express");
const app= express();
const path= require("path");
const hbs=require("hbs");
const port = process.env.PORT || 1001;

const static_path= path.join(__dirname,"../public");
const temp_path = path.join(__dirname,"../temp/template");
const partial_path = path.join(__dirname,"../temp/partials");

app.set('view engine', 'hbs');
app.set("views",temp_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));


//routing
app.get("", (req,res)=> {

    res.render('index')
})

app.get("/about", (req,res)=> {

    res.render('about')
})


app.get("/weather", (req,res)=> {

    res.render('weather')
})


app.get("*", (req,res)=> {

    res.render('404error', {
        errorMsg: 'Oops! Page not Found.'
    })
})


app.listen(port, ()=> {
    console.log("Welcome VM")
})  