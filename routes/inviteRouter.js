const router = require('express').Router()
const uid=require('../controllers/randomURL')
const getCardDetails=require('../controllers/getCardDetails')
cardStore=require('../db/model').cardStore


router.post("/createCard",(r,s)=>{
    let url=uid()
    cardStore.create({
        url:url,
        title:r.body.title,
        details:r.body.details,
        oDetails:r.body.oDetails
    })
        .then((data)=>{
            //s.send(data)
            s.render('inviteCard',{title:data.title,details:data.details,oDetails:data.oDetails,url:data.url,isTemp:true,createdOn:data.createdAt.toDateString()})
        })
})

router.get("/cards/:eventId",(r,s)=>{
    getCardDetails(r,s)
})



module.exports=router
