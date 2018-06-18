cardStore=require('../db/model').cardStore
module.export=function getCardDetails(r,s){
cardStore.find({
    where:{
        url:r.params.eventId
    }
}).then((d)=>{
    s.send(d)
})
}