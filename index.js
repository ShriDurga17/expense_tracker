const express = require('express')
const mongoose=require('mongoose');

const app = express()
const port = process.env.PORT || 8000
const Expense=require('/expense');
mongoose.connect('mongodb+srv://shridurgavijiram:shri1704@cluster0.v29c686.mongodb.net/newDb?retryWrites=true&w=majority',{
  useUnifiedTopology: true
});
app.get('/', async(req, res) => {
  const expenses=await Expense.find();
  res.send(expenses);
})
app.get('/:id',async(req,res)=>{
try{
  const id=req.params.id;
  const result=await Expense.findById(id);
  if(result)
  res.send(result);
else
result.send("Enter Proper ID")
}catch(err)
{
  res.send(err)

}
})
app.delete('/:id',async(req,res)=>{
  try{
    const id=req.params.id;
    const result=await Expense.findByIdAndDelete(id);
    if(result)
    res.send(result);
  else
  result.send("Enter Proper ID")
  }catch(err)
  {
    res.send(err)
  
  }
  })
  app.use(express.json())

  app.post('/',async(req,res)=>
  {
    console.log(req.body);
    const newExpense=req.body;
    await Expense.create(newExpense);
    res.send("Post sent");
  })
  app.put('/:id',async(req,res)=>{
    try{
      const id=req.params.id;
      const updateObject=req.body;
      const result=await Expense.findByIdAndUpdate(id,{$set:updateObject},{new:true});
      if(result)
      res.send(result);
    else
    result.send("Enter Proper ID")
    }catch(err)
    {
      res.send(err)
    
    }
    })
      
  

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})