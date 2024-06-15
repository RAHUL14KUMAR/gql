const typeDefs=`#graphql
    type Bank{
        id:ID!
        name:String!
    }

    type Branch{
        ifsc:String!
        bank_id:ID!
        branch:String!
        address:String!
        city:String!
        district:String!
        state:String!
    }

    type Query{
        bank:[Bank!]!
        bankBranch(BANK_ID:ID!):[Branch!]!
        branchInfo(IFSC:String!):Branch!
        bankWithBranch(BANK_NAME:String!):[Branch!]!
    }
`
module.exports=typeDefs