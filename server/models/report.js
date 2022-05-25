import mongoose from "mongoose";
const {Schema} = mongoose;

const reportSchema = new Schema({
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
    reportname:{
        type:String,
        required:'Report is required'
    },
    report:{
        type:String,
        required:'Report is required'
    },
    tname:{
        type:String,
        required:'Therapist Name is required'
    },
    time:{
        type:String,
        required:'Time is required'
    },
},{timestamps:true})
export default mongoose.model('Report',reportSchema); 