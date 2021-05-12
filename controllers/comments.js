const comments = require('../data/comments');

const list =  function(req, res)  {
  console.log("Inside GET comments");
  res.json(comments)
}

const show = function(req, res)  {
  console.log("Inside GET comments");
  let id = req.params.id;
  let foundComment = comments.find(comment => comment._id == id);
  if(!foundComment){
    res.status(400).json({ msg: `No comment: ${id}`})
  }
  res.json(foundComment)
}

const create = (req, res) => {
  console.log("inside POST comments");
  let counter = comments.length + 1;

  let newComment = {
    _id : counter,
    body : req.body.body,
    postId : 1,
  }

  contacts.push(newComment);
  counter++;
  res.json({ msg: `Comment Added`, newComment})
}

module.exports = { list, show, create }