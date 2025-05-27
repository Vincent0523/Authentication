
//importing libraies that we installed using npm
const express = require("express")
const app = express()
const bcrypt = require("bcrypt")//importing  bcrypt parckage

const users = []

app.use(express.urlencoded({extended: false}))


app.post("/register",async(req,res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
        }) 
        res.redirect("/login")
    } catch (e) {
        console.log(e);
        res.redirect("/register")
    }
})
//route
app.get('/',(req,res) =>{
    res.render("index.ejs")
})
app.get('/login',(req,res) =>{
    res.render("login.ejs")
})
app.get('/register',(req,res) =>{
    res.render("register.ejs")
})
//end of route

console.log(users);//Diisplay newly registgered in the console
app.listen(3000)