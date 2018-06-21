cardStore=require('../db/model').cardStore

module.exports=function getCardDetails(r,s){
cardStore.find({
    where:{
        url:r.params.eventId
    }
}).then((d)=>{
    s.render('inviteCard',{title:d.title,details:d.details,oDetails:d.oDetails,createdOn:d.createdAt.toDateString()})
})
}