


const express = require('express');
 const app = express();

 const studentRoute = require('./api/routes/student');
 const facultyRoute = require('./api/routes/faculity');

 const mongoose = require('mongoose')

 const bodyparser = require('body-parser');


 mongoose.connect('mongodb+srv://veer1234:STc207eASCc1nKph@cluster0.0ebpw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 




 mongoose.connection.on('connected', connected =>{
    console.log("connection with database....................");
    
})

 mongoose.connection.on('error', err =>{
     console.log("connection failed");

 })


//  app.use((req,res,next) =>{
//     res.status(200).json({
//         message:'app is running'
//     })
// })



app.use(bodyparser.urlencoded({extended:false}));


app.use(bodyparser.json());


 app.use('/student', studentRoute) ;
 app.use('/faculity', facultyRoute) ;

 app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});




 


//  app.use((req,res,next) =>{
//     res.status(404).json({
//         error:'bad request'
//     })
// })


 module.exports = app