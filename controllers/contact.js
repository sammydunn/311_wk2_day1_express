const contacts = require('../data/contacts');

const list = function (req, res) {
  console.log("Inside GET /contacts");
  res.json(contacts)
};

const show = function(req, res) {
  console.log("Inside GET /contacts");
  let id = req.params.id;
  let foundContact = contacts.find(contact => contact._id == id);
  if(!foundContact){
    res.status(400).json({ msg: `No contact: ${id}`})
  }
  res.json(foundContact)
};

const create = function(req, res)  {
  console.log("inside POST /contacts ");
  let counter = contacts.length + 1;

  let newContact = {
    _id : counter,
    name : req.body.name,
    occupation : req.body.occupation,
    avatar: req.body.avatar
  }

  contacts.push(newContact);
  counter++;
  res.json({ msg: `Contact Added`, newContact})
};

module.exports = { list, show, create }