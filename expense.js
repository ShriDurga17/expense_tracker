const mongoose=require('mongoose');
const expenseSchema = new mongoose.Schema({
    amount:Number,
    desc:String,
    title:String,
});
const Expense=mongoose.model('Expense',expenseSchema);
module.exports=Expense;