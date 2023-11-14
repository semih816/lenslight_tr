import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";
import validator from "validator";

// schemayı tanımlıyoruz
const { Schema } = mongoose

// user schemasını oluşturuyoruz //? schema verileri sakladığımız bir object diyebiliriz 
const userSchema = new Schema({
    username:{
        type : String,
        required : [true,"Username area is required"],
        lowercase : true,
        validate : [validator.isAlphanumeric,"Only alphanumeric characters"]
    },
    email:{
        type : String,
        required : [true,"Email area is required"],
        unique : true,
        validate : [validator.isEmail,"Valid email is requied"]
    },
    password:{
        type : String,
        required : [true,"Password area is required"],
        minLength : [4,"At Least 4 characters"]
    },
    followers : [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    followings : [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

},
{
    timestamps: true
})
userSchema.pre("save",function(next){
    const user = this
    bcrypt.hash(user.password,10,(err,hash)=>{
        user.password =hash;
        next();
    })
})
const User = mongoose.model("User", userSchema)

export default User;
