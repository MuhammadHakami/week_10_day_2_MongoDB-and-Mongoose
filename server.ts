require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const PORT=process.env.PORT
const Company=require('./models/company')
const app=express()
const ejs = require('ejs');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
.then(() => console.log("mongo is running"),
(err) => console.log(err))

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.get('/company/new',(req,res)=>{
    res.render('new')
})

app.get('/company/:id',(req,res) => {
    Company.findById(req.params.id)
    .then((company) => res.render('show',{company}))
    .catch((err)=> res.redirect('/company'))
})

app.get('/company',(req,res)=>{
    Company.find()
    .then((companies) =>res.render('index',{companies}))
    .catch((err)=> console.log(err))
})


app.post('/company',(req,res)=>{
    let data={
        name: req.body.name,
        logo: req.body.logo,
        address: req.body.address,
        city: req.body.city,
        telephone: req.body.telephone,
        // driver: [{name: String,age: Number,image: String}],
        // car: [{name: String, model: Number, year: Number,image: String}]
    }
    let companies=new Company(data)
    companies.save()
    .then(() => res.redirect('/company'))
    .catch((err)=> console.log(err))
})

app.listen(PORT,()=> console.log("Server is working at port 7000"))