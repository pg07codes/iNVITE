const router = require('express').Router()

router.get("/:eventId",(r,s)=>{
    s.render("custom iNVITE card to be posted to user")
})

module.exports=router
