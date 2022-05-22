import User from '../models/user'
import Therapist from '../models/therapist';
import jsonwebtoken, { JsonWebTokenError } from 'jsonwebtoken';
import ScheduleSchema from '../models/schedule';

export const register = async (req,res) =>{
    console.log(req.body);
    const {name,email,password,age,gender} = req.body;
    // validation
    if(!name)
    return res.status(400).send("Name is required");
    if(!password ||password.length < 6 )
    return res.status(400).send("Password is required");
    if(!age || age.length > 2)
    return res.status(400).send("Age is required");
    if(!gender || gender.length > 1)
    return res.status(400).send("Gender is required");
    

    let userExist = await User.findOne({email}).exec();
    if(userExist) return res.status(400).send("Email is taken");

    const user = new User({name,email,password,age,gender});

    try{
      await user.save();
      console.log("USER CREATED",user);
      return res.json({ok:true});
    }
    catch(err){
      console.log("Create USER FAILED",err);
      return res.status(400).send("Error! Try Again");
    }
}

export const login = async (req,res) => {
  console.log(req.body);
  const {email,password} = req.body;
  try{
   let user = await User.findOne({email}).exec();
   console.log("USER EXIST",user);
   if(!user)
   res.status(400).send("Email not found");
   else{
   user.comparePassword(password,(err,match) =>{
     console.log(err);
     if(!match || err)
     return res.status(400).send("Wrong password");

     let token = jsonwebtoken.sign({_id:user._id},process.env.JWT_SECRET,{
       expiresIn:'7d'
     });
     const u = "patient"
     res.json({token,u,user:{
       name:user.name,
       email:user.email,
       _id:user._id,
     }});
   })
  }
}
  catch(err){
    console.log("LOGIN ERROR FAILED",err);
    res.status(400).send("Signin failed");
  }
};

export const therapist = async(req,res) =>{
      const data = await Therapist.find().exec();
      console.log(data);
      res.send(data);
}

export const scheduleTherapist = async(req,res) =>{
  const data = await ScheduleSchema.find().exec();
  console.log(data);
  res.send(data);
}


export const editScheduleTherapist = async(req,res) =>{
  console.log(req.headers);
  const {uid,monday,tuesday,wednesday,thrusday,friday,saturday,sunday} = req.headers;

  const therap = await ScheduleSchema.findOne({uid}).exec();

  if(!therap)
  {
     const therap = new ScheduleSchema({uid,monday,tuesday,wednesday,thrusday,friday,saturday,sunday});
     try{
       await therap.save();
       res.json({ok:true});
     }
     catch(err)
     {
       res.json(err);
     }
  }
  else{
  try{
    const schedule = await ScheduleSchema.findOneAndUpdate({uid},{monday,tuesday,wednesday,thrusday,friday,saturday,sunday}).exec();
    return res.json({ok:true});
  }
  catch(err){
    console.log("Failed",err);
    return res.status(400).send("Error! Try Again");
  }
}
}


export const therapistregister = async (req,res) =>{
  console.log(req.headers);
  
  const {name,email,password,age,gender,experience,qualification} = req.headers;
  // validation
  if(!name)
  return res.status(400).send("Name is required");
  if(!password ||password.length < 6 )
  return res.status(400).send("Password is required");
  if(!age || age.length > 2)
  return res.status(400).send("Age is required");
  if(!gender || gender.length > 1)
  return res.status(400).send("Gender is required");
  

  if(!experience)
  return res.status(400).send("Experience is required");
  
  if(!qualification)
  return res.status(400).send("Qualification is required");
  

  let userExist = await Therapist.findOne({email}).exec();
  if(userExist) return res.status(400).send("Email is taken");

  const user = new Therapist({name,email,password,age,gender,experience,qualification});

  try{
    await user.save();
    console.log("USER CREATED",user);
    return res.json({ok:true});
  }
  catch(err){
    console.log("Create USER FAILED",err);
    return res.status(400).send("Error! Try Again");
  }
}

export const therapistlogin = async (req,res) => {
console.log(req.body);
const {email,password} = req.body;
try{
 let user = await Therapist.findOne({email}).exec();
 console.log("USER EXIST",user);
 if(!user)
 res.status(400).send("Email not found");
 else{
 user.comparePassword(password,(err,match) =>{
   console.log(err);
   if(!match || err)
   return res.status(400).send("Wrong password");

   let token = jsonwebtoken.sign({_id:user._id},process.env.JWT_SECRET,{
     expiresIn:'7d'
   });
   const u = "therapist";
   res.json({token,u,user:{
     name:user.name,
     email:user.email,
     _id:user._id,
   }});
 })
}
}
catch(err){
  console.log("LOGIN ERROR FAILED",err);
  res.status(400).send("Signin failed");
}
};