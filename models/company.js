const mongoose=require('mongoose')
const Schema= mongoose.Schema
const companySchema=new Schema({
    name: {type: String, required: true},
    logo: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    telephone: {type: Number, required: true},
    drivers: [{name: String,age: Number,image: String}],
    cars: [{name: String, model: Number, year: Number,image: String}]
}, {timestamps: true})

const Company=mongoose.model('company',companySchema)
module.exports= Company
