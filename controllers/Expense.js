const ExpenseSchema = require("../modules/ExpenseModel")




exports.addExpense =async (req,res)=>{
   const {title, amount, date, category, description}=req.body
   const expense = ExpenseSchema({
    title,
    amount,
    date,
    category,
    description
   })
   

   try {
    if(!title || !category || !description ||!date)
       return res.status(400).json({message:"All fields are required"})

       if(amount <=0 || !amount === 'number' ){
        return res.status(400).json({message :'Amount must be a positive Number'})
       }
       await expense.save()
       res.status(200).json({message :'Expense added'})
   } catch (error) {
       res.status(500).json({message:"server Error"})
    
   }
   console.log(expense)
}
exports.getExpense =async(req,res)=>{
    try {
        const expense = await ExpenseSchema.find().sort({createdAt : -1})
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message:"server Error!!"})
        
    }
}
exports.deleteExpense =async(req,res)=>{

const {id}=req.params;

ExpenseSchema.findByIdAndDelete(id)
.then((expense)=>{
    res.status(200).json({message:"Expense Deleted"})
})
.catch ((error)=>{
    res.status(500).json({message:"server Error!!"})
})
    




}
