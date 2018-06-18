const router = require('express').Router()
const uid=require('../controllers/randomURL')
const getCardDetails=require('../controllers/getCardDetails')

router.post("/createCard",(r,s)=>{
    let url=uid()
    s.render("inviteCard",{title:r.body.title,details:r.body.details,oDetails:r.body.oDetails,url:url})
})

router.get("/cards/:eventId",(r,s)=>{
    getCardDetails(r,s)
})



module.exports=router
