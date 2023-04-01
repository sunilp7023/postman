const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sunil7023:sunilp7023@mongodbcluster.01jfd9i.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log("connection is established");})
.catch((e)=>{console.log("connection Lost!",e);})

//module.exports=mongoose