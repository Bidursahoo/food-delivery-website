const express = require("express");
const router = express.Router(); 
const Orders = require("../Models/Orders");


router.post('/orderData',(req,res)=>{
    let orderData = req.body.orderData;
    let date = req.body.OrderDate;
    let data = {orderData , date}
    // console.log(req.body.email);
    // console.log(req.body.OrderDate);
    // data.splice(0,0 , {OrderDate: req.body.orderDate})
    Orders.findOne({'Email': req.body.email}).then((eId)=>{
        // console.log(eId);
        if(eId === null){
            Orders.create({"Email": req.body.email,
                OrderData:[[date ,orderData]]}).then(()=>{
                    res.json({success:true})
                })
        }else{
            Orders.findOneAndUpdate({"Email":req.body.email},{
                $push:{OrderData :[date , orderData]}}).then(()=>{
                    res.json({success:true})
                })
        }
        
    }).catch((error)=>{
        res.json({success:"Problem \n"+error})
    })
})



router.post('/getOrderData',(req,res)=>{
        Orders.findOne({"Email":req.body.email}).then((result)=>{
            res.json({data :result.OrderData})
        })
})

module.exports = router;