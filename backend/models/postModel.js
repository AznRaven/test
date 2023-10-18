
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
   subject: { type: String },
   mani: { type: String },
   pedi: { type: String },
   wax: { type: String },
   user: { type: String, required: true },
   comments: [{
      // an id referencing the comment
      type: mongoose.Types.ObjectId,
      // search for it in the Comments collection
      ref: 'Comment'
   }]
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

module.exports = Post