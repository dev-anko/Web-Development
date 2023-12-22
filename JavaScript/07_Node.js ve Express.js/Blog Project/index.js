import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

// middlewares
app.set('view engine', 'ejs'); // bunu vscode'da EJS extension kullanıyorsanız yazmak zorunda değilsiniz.
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req,res)=>
{
    res.render("home.ejs");
})
app.get("/about", (req,res)=>
{
    res.render("about.ejs");
})
app.get("/alies", (req,res)=>
{
    res.render("alies.ejs");
})
app.get("/enemies", (req,res)=>
{
    res.render("enemies.ejs");
})
app.get("/fights", (req,res)=>
{
    res.render("fights.ejs");
})

app.listen(port,()=>
{
    console.log(`Server running on port ${port}`);
})