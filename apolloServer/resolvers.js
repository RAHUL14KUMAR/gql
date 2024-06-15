const Bank=require('../models/bankSchema');
const Branch=require('../models/branchSchema');

const resolvers={
    Query:{
        async bank(_,args){
            console.log(args);
            return await Bank.find({})
        },
        async bankBranch(_,args){
            return await Branch.find({bank_id:args.BANK_ID})
        },
        async branchInfo(_,args){
            return await Branch.findOne({ifsc:args.IFSC})
        },
        async bankWithBranch(_,args){
            const bank=await Bank.findOne({name:args.BANK_NAME})

            if(bank){
                const branch= await Branch.find({bank_id:bank.id});

                if(branch){
                    return branch;
                }else{
                    throw new Error("bank doest have any branch right now!!!")
                }
            }else{
                throw new Error("no bank with this name found please register it");
            }
        }
    }
}

module.exports=resolvers