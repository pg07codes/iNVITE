cardStore=require('../db/model').cardStore

module.exports=function getCardDetails(r,s){
cardStore.find({
    where:{
        url:r.params.eventId
    }
}).then((d)=>{
    s.send(d)
})
}