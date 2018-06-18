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
        .then(()=>{
            s.redirect(`/invite/card/`+url)
        })
})
router.get('/card/:url',(req,res)=>{
    console.log("params"+req.params.url)
     cardStore.find({
        where:{url:req.params.url}
    })  .then((data)=>{
        console.log("data is")
        console.log(data)
            res.render('inviteCard',{details:data.details,oDetails:data.oDetails,url:data.url})
        })
})

router.get("/cards/:eventId",(r,s)=>{
    getCardDetails(r,s)
})



module.exports=router
