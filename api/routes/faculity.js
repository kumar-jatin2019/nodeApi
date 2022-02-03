const express = require('express');

const router = express.Router();


router.get('/',(req,res,next) =>{
    res.status(200).json({
        message:'I am Faculity '
    })
})




module.exports = router
