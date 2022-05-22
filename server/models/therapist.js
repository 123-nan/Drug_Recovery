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
    },
    image:{
        type:String,
    }

},{timestamps:true})


userSchema.pre('save',function(next){ // regular function must
    let user = this // refer to schema
    if(user.isModified('password')){
        return bcrypt.hash(user.password,12,function(err,hash){
            if(err){
                console.log('BCRYPT HASH ERR',err);
                return next(err);
            }
            user.password = hash;
            return next();
        });
    }
    else
    return next();
    
});


userSchema.methods.comparePassword = function(password,next){
  bcrypt.compare(password,this.password,function(err,match){
      if(err){
          console.log("COMPARE PASSWORD ERR",err);
          return next(err,false);
      }
      console.log("MATCH PASSWORD",match);
      return next(null,match);
  })
}
export default mongoose.model('Therapists',userSchema);