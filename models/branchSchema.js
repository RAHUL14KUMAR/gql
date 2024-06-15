const { isRequiredInputField } = require('graphql');
const mongoose=require('mongoose');

const schema=mongoose.Schema;

const branchSchema=new schema({
    ifsc:{
        type:String,
        required:true,
        unique:true
    },
    bank_id:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("branches",branchSchema);