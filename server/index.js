const linkPreview = require("sa-link-preview"); // helps with links-preview in the EditorJs App
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const Post = require("../model/post");

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/linkpreview/", (req, res) => {
  const { url } = req.query;
  linkPreview(url)
    .then(res_ => res.json(res_))
    .catch(err => {
      console.log(err.message);
    });
});

app.post("/postblog", async (req, res) => {
  const { time: timeStamp, blocks: content } = req.body.data;
  const doc = new Post({ content, timeStamp });
  await doc.save(err => {
    if (err) res.send(`an error : ${err}`);
    res.send("posted successfully");
  });
});

app.get("/", (req, res) => {
  res.send("Welcome ... ");
});

module.exports = app;
