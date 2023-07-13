const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://username:password@cluster0.ypu0kwc.mongodb.net/foodcourtmern?retryWrites=true&w=majority'
const mongoDB =async() =>{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true},async(err,result)=>{
    if(err) console.log("---",err)
    else{
        console.log("connected");
         const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function( err, data){
            const foodcategory =  await mongoose.connection.db.collection("foodcategory");
            foodcategory.find({}).toArray(function(err,catData){
                if(err) console.log(err); 
                else {
                 global.food_items = data;
                 global.foodcategory = catData;
                }
            })
    
        })
       
    }
    });
}
module.exports = mongoDB;
