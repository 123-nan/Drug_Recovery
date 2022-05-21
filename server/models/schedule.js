import mongoose from "mongoose";
const {Schema} = mongoose;

const scheduleSchema = new Schema({
    uid:{
        type:String,
        trim:true,
        required:'Name is required'
    },
    monday:[{
        type:String
    }],
    tuesday:[{
        type:String
    }],
    wednesday:[{
        type:String
    }],
    thrusday:[{
        type:String
    }],
    friday:[{
        type:String
    }]
    , 
    saturday:[{
        type:String
    }],
    sunday:[{
        type:String
    }]

},{timestamps:true})

export default mongoose.model('ScheduleSchema',scheduleSchema); 