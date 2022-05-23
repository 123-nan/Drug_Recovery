import mongoose from "mongoose";
const {Schema} = mongoose;

const bookingScheduleSchema = new Schema({
    uuid:{
        type:String,
        trim:true,
        required:'Therapist is required'
    },
    puid:{
        type:String,
        trim:true,
        required:'Patient is required'
    },
    time:{
        type:String,
        trim:true,
        required:'Time is required'
    },
    status:{
        type:Boolean,
        trim:true,
        required:'Status required'
    },
    pname:{
        type:String,
        trim:true,
        required:'patient name is required'
    },
    tname:{
        type:String,
        trim:true,
        required:'Therapist name is required'
    },
},{timestamps:true})
export default mongoose.model('BookingScheduleSchema',bookingScheduleSchema); 