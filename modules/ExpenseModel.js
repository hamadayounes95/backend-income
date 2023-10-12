const mongoose =require('mongoose')


const ExpenseSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true,
        trime : true,
        maxLength : 50
    },
    amount : {
        type : Number,
        required : true,
        trim : true,
        maxLength :20

    },
    type : {
        type : String,
        default : "Expense"
    },
    date : {
        type : Date,
        required :true,
        trim : true,
    },
    category : {
        type : String,
        required : true,
        trime : true,
    },
    description : {
        type : String,
        required : true,
        trime : true,
        maxLength : 50
    },
},

{timestamps :true}
)
module.exports=mongoose.model('Expense', ExpenseSchema )
