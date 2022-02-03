const express = require('express');
const Student = require('../model/student');
const mongoose = require('mongoose');

const router = express.Router();

// router.get('/',(req,res,next) =>{
//     res.status(200).json({
//         message:'I am student request take m'
//     })
// })

router.post('/',(req,res,next) =>{
    // res.status(200).json({
    //     message:'I am student request take m'
    // })

    // console.log(req.body);

    const student  = new Student({
        id:new mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        

    })

    student.save()
    .then(result=>{
         console.log(result)
         res.status(200).json({
             newStudent:result
         })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})




module.exports = router