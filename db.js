import mongoose, { model } from "mongoose"

const conn = () =>{
    mongoose.connect(process.env.DB_URL,{
        dbName: "lenslight_tr",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Coonect to the DB succesully");
    }).catch((err)=>{
        console.log(`db connection err : ${err}`);
    })
}
export default conn;