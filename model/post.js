const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postsSchema = new Schema({
  content: Object,
  timeStamp: Number
});

const Post = mongoose.model("Posts", postsSchema);
module.exports = Post;
