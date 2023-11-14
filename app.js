import  express  from "express";
import dotenv from "dotenv";
import conn from './db.js';
import cookieParser from "cookie-parser";
import methodOverride from "method-override"
import pageRoute from "./routes/pageRoute.js";
import photoRoute from "./routes/photoRoute.js";
import userRoute from "./routes/userRoute.js";
import {checkUser } from "./middleware/authMiddleware.js";
import fileUpload from "express-fileupload";
import { v2 as cloudinary} from "cloudinary";

 
// .env dosyasındaki değişkenlere ulaşmak için kullanıyoruz
dotenv.config();

// .env dosyasındaki cloudinarydeki değişkenlere ulaşmak için kullanıyoruz
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
    
});

// veri tabanı bağlantısı
conn();
 
// expresi kullanıyoruz ve port belirliyoruz
const app = express()
const port = process.env.PORT
 
// ejs template engine
app.set("view engine" , "ejs")

// static file middleware
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(fileUpload({useTempFiles:true}))
app.use(methodOverride('_method',{
    methods: ['POST','GET'],
}))

// routes
app.use("*",checkUser)
app.use("/",pageRoute)
app.use("/photos",photoRoute)
app.use("/users",userRoute)



app.listen(port,()=>{
    console.log(`Application Running On Port:${port}`);
})