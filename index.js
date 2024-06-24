const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRoute)


mongoose.connect('mongodb+srv://gsivaprasad69:hr1splChRVj3o9Tm@backenddb.ieoehwa.mongodb.net/?retryWrites=true&w=majority&appName=backendDB')
  .then(() => {
    console.log('Connected!')
    app.listen(3000,()=>{
        console.log("Server is running in 3000")
    })
  });