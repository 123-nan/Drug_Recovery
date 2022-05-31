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
        
        time:String,
        avail:Boolean,
        
    }],
    tuesday:[{
        
        time:String,
        avail:Boolean,
        
    }],
    wednesday:[{
        
        time:String,
        avail:Boolean,
        
    }],
    thrusday:[{
        
        time:String,
        avail:Boolean,
        
    }],
    friday:[{
        
        time:String,
        avail:Boolean,
        
    }], 
    saturday:[{
        
        time:String,
        avail:Boolean,
        
    }],
    sunday:[{
        
        time:String,
        avail:Boolean,
        
    }]
},{timestamps:true})
export default mongoose.model('ScheduleSchema',scheduleSchema); 