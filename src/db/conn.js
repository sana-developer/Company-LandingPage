const mongoose = require("mongoose");
//creating a db
mongoose.connect("mongodb://127.0.0.1:27017/website",{
    useNewUrlParser: true,
   useUnifiedTopology: true 
}).then(()=>{
    console.log("Connection Successfull");
}).catch((error) => {
    console.log(error);
})