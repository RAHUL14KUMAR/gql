const mongoose=require('mongoose');

const schema=mongoose.Schema;

const bankSchema=new schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("banks",bankSchema);