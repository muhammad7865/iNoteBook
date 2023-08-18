const mongoose=require('mongoose')
const mongoURI="mongodb://127.0.0.1:27017/iNoteBook?directConnection=true"

const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    console.log("Connected to mongodb")
}
module.exports=connectToMongo;