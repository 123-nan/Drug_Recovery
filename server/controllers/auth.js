import User from '../models/user'
import Therapist from '../models/therapist';
import jsonwebtoken, { JsonWebTokenError } from 'jsonwebtoken';

export const register = async (req,res) =>{
    console.log(req.headers);
    const {name,email,password,age,gender} = req.headers;
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
  console.log(req.headers);
  const {email,password} = req.headers;
  try{
   let user = await User.findOne({email}).exec();
   console.log("USER EXIST",user);
   if(!user)
   res.status(400).send("Email not found");

   user.comparePassword(password,(err,match) =>{
     console.log(err);
     if(!match || err)
     return res.status(400).send("Wrong password");

     let token = jsonwebtoken.sign({_id:user._id},process.env.JWT_SECRET,{
       expiresIn:'7d'
     });
     res.json({token,user:{
       name:user.name,
       email:user.email,
       _id:user._id,
     }});
  
   })
  }
  catch(err){
    console.log("LOGIN ERROR FAILED",err);
    res.status(400).send("Signin failed");
  }
};

export const therapist = async(req,res) =>{
      const data = await Therapist.find().exec();
      res.send(data);
}