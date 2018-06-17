const Sequelize=require('sequelize')
const dt=Sequelize.DataTypes

const dbconfig=require('../config').DB

const db=new Sequelize(dbconfig.NAME,dbconfig.USER,dbconfig.PASSWORD,{
    dialect:'mysql'
})
//define models here




db.sync({
    // alter:true
    //force:true
}).then(()=>console.log("db is synced"))

module.exports={db}