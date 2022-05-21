import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:'Name is required'
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:'Email is required'
    },
    password:{
        type:String,
        trim:true,
        min:6,
        max:64,
        required:'Name is required'
    },
    age:{
        type:Number,
        trim:true,
        min:1,
        max:100,
        required:'Age is Required',
    },
    gender:{
        type:String,
        trim:true,
        min:1,
        max:1,
        required:'Gender is required'
    },
    experience:{
        type:Number,
        trim:true,
        max:100,
        required:"Experience Required"
    },
    qualification:{
        type:String,
        trime:true,
        required:"Qualification Needed"
    }

},{timestamps:true})



export default mongoose.model('Therapists',userSchema);