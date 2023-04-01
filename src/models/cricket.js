const mongoose = require('mongoose')
const cricketSchema = new mongoose.Schema({
   ranking: {
      type: Number,
      trim: true,
      unique: true,
      default:1
   },
   name: {
      type: String,
      trim: true,
      unique: true,
      default:'2'

   },
   runs: {
      type: Number,
      trim: true,
      unique: true,
      default:3

   },
   balls: {
      type: Number,
      trim: true,
      unique: true,
      default:4

   },

   fours: {
      type: Number,
      trim: true,
      unique: true,
      default:5
   },
   sixes: {
      type:Number,
      trim: true,
      unique: true,
      default:6
   },
   year: {
      type: Number
   }
})


//const MensRanking = new mongoose.model('MensRanking', cricketSchema)
module.exports = new mongoose.model('MensRanking', cricketSchema)
//module.exports = MensRanking