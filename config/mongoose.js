const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/online_payment")
.then(() =>{
    console.log("connection success")
}).catch((e) =>{
    console.log("no connction")
});


module.exports = {mongoose}