const incomeSchema = require("../modules/IncomeModel")




exports.addIncome =async (req,res)=>{
   const {title, amount, date, category, description}=req.body
   const income = incomeSchema({
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
       await income.save()
       res.status(200).json({message :'Income added'})
   } catch (error) {
       res.status(500).json({message:"server Error"})
    
   }
   console.log(income)
}
exports.getIncome =async(req,res)=>{
    try {
        const income = await incomeSchema.find().sort({createdAt : -1})
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json({message:"server Error!!"})
        
    }
}
exports.deleteIncome =async(req,res)=>{

const {id}=req.params;

incomeSchema.findByIdAndDelete(id)
.then((income)=>{
    res.status(200).json({message:"Income Deleted"})
})
.catch ((error)=>{
    res.status(500).json({message:"server Error!!"})
})
    




}
