import mongoose from "mongoose";
const {Schema} = mongoose;

const scheduleSchema = new Schema({
    uid:{
        type:String,
        trim:true,
        required:'Name is required'
    },
    name:{
        type:String,
        trim:true,
        required:'Name is required'
    },
    monday:[{
        type:String,
        unique:true,
    }],
    tuesday:[{
        type:String,
        unique:true
    }],
    wednesday:[{
        type:String,
        unique:true,
    }],
    thrusday:[{
        type:String,
        unique:true,
    }],
    friday:[{
        type:String,
        unique:true,

    }], 
    saturday:[{
        type:String,
        unique:true,

    }],
    sunday:[{
        type:String,
        unique:true,
    }]
},{timestamps:true})
export default mongoose.model('ScheduleSchema',scheduleSchema); 