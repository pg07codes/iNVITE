const Sequelize=require('sequelize')
const dt=Sequelize.DataTypes

const dbconfig=require('../config').DB

const db=new Sequelize(dbconfig.NAME,dbconfig.USER,dbconfig.PASSWORD,{
    dialect:'mysql'
})
//define models here

const cardStore=db.define("cardStore",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
    url:{
        unique:true,
        type:dt.STRING
    },
    title:{
        type:dt.STRING
    },
    details:{
        type:dt.TEXT
    },
    oDetails:{
        type:dt.STRING
    }
})



db.sync({
    // alter:true
    //force:true
}).then(()=>console.log("db is synced"))

module.exports={db,cardStore}