import User from '../models/user'
import Therapist from '../models/therapist';
import jsonwebtoken, { JsonWebTokenError } from 'jsonwebtoken';
import ScheduleSchema from '../models/schedule';
import BookingSchedule from '../models/bookingSchedule';
import Report from '../models/report';


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


  const data = await ScheduleSchema.find(req.body).exec();
  console.log(data);
  res.send(data);
}


export const insertscheduleTherapist = async(req,res) =>{
  console.log(req.body)

  const user = new ScheduleSchema(req.body);

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


export const editScheduleTherapist = async(req,res) =>{
 
  const {uid,monday,val} = req.body;



    const daylist = ["monday","tuesday","wednesday","thrusday","friday","saturday","sunday"];



  try{

     var schedule;

      
      schedule = await ScheduleSchema.findOneAndUpdate({uid},{$pull: {monday : {$elemMatch:{val}}}}).exec();
     console.log(schedule);
    return res.json({ok:true});
  }
  catch(err){
    console.log("Failed",err);
    return res.status(400).send("Error! Try Again");
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


export const bookingschedule = async(req,res) =>{
    console.log(req.body);
    const {time,uuid,puid,status,pname,tname} = req.body;
    const detail = new BookingSchedule({time,uuid,puid,status,pname,tname})
    try{
      detail.save();
      console.log("Booking Saved");
      res.json({ok:true});
    }
    catch(err)
    {
      console.log(err);
      res.status(400).send({ok:false});
    }
}


export const appointmentcheduleforpatient = async(req,res) =>{
  console.log(req.body);
  const {puid} = req.body;
        const data = await  BookingSchedule.find({puid}).exec();
  try{
   
    console.log(data);
    res.json(data);
  }
  catch(err)
  {
    console.log(err);
    res.status(400).send({ok:false});
  }
}


export const appointmentcancel = async(req,res) =>{
  console.log(req.body);
  const {_id} = req.body;
        const data = await  BookingSchedule.findOneAndUpdate({_id},{status:true}).exec();
  try{
    console.log(data);
    res.json(data);
  }
  catch(err)
  {
    console.log(err);
    res.status(400).send({ok:false});
  }
}


export const appointmentchedulefortherapist = async(req,res) =>{
  console.log(req.body);
  const {uuid} = req.body;
        const data = await  BookingSchedule.find({uuid}).exec();
  try{
   
    console.log(data);
    res.json(data);
  }
  catch(err)
  {
    console.log(err);
    res.status(400).send({ok:false});
  }
}


export const reportInsert = async(req,res) =>{

  console.log(req.body);
  
  const {uuid,puid,report,reportname,tname,time} = req.body;
  const detail = new Report({uuid,puid,report,reportname,tname,time})
  try{
    detail.save();
    console.log("PDF Saved");
    res.json({pdf : "Uploaded"});
  }
  catch(err)
  {
    console.log(err);
    res.status(400).send({ok:false});
  }
}

export const getReport = async(req,res) =>{
 
  const {uuid} = req.body;
  console.log(uuid);
  const detail = await Report.find({uuid}).exec();
  try{
    console.log(detail);
    res.json(detail);
  }
  catch(err)
  {
    console.log(err);
    res.status(400).send({ok:false});
  }
}