const express = require('express')
const app = express()
const port = 3400
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))
//require('./db/conn')



const {MensRanking} = require('./models/cricket')
app.use(express.json())


mongoose.connect('mongodb+srv://sunil7023:sunilp7023@mongodbcluster.01jfd9i.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log("connection is established");})
.catch((e)=>{console.log("connection Lost!",e);})


app.get('/', async (req, res) => {
    res.send("hello guys");
});

app.post("/mens", async (req, res) => {
    console.log("3000",req.body)
    try {
        const addingMensRecords = new MensRankings(req.body)
        console.log(addingMensRecords)
        const var1=await addingMensRecords.save()
        console.log(var1)
        res.send("successfull")
    }
    catch (e) {
        res.send(e)
    }
}
)

app.listen(port, () => {
    console.log("server started");
})

