const express = require('express');

const app = express();

const mongoose = require('mongoose');

require ('dotenv/config');





//Routes
app.get('/',(req,res)=>{

    res.send('home');
})


app.get('/posts',(req,res)=>{

    res.send('posts');
})

//port
app.listen(3000);

//connect to DB
mongoose.connect('mongodb+srv://udara:udara@cluster0.8hhon.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true } ,()=>{
    console.log('connected to Db')
})