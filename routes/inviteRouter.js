const router = require('express').Router()
const uid=require('../controllers/randomURL')

router.post("/createCard",(r,s)=>{
    let url=uid()
    s.render("inviteCard",{title:r.body.title,details:r.body.details,oDetails:r.body.oDetails,url:url})
})

router.get("/cards/:eventId",(r,s)=>{
    s.send("custom iNVITE card to be posted to user")
})



module.exports=router
