const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const contacts = require("./routes/contacts");
const vehicles = require("./routes/vehicles");
const comments = require("./routes/comments");
const products = require("./routes/products");

const port = process.env.PORT || 4001;

// Middleware
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);



app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))


  app.get("/testdb", function(req,res){
    console.log("in GET /testdb rout");
    
  })

  //GET res
  app.get("/contacts", function(req, res){
    console.log('inside GET /contacts');
    res.json(contacts)
  });

  app.get("/vehicles", function(req, res){
    console.log('inside GET /vehicles');
    res.json(vehicles)
  });

  app.get("/comments", function(req, res){
    console.log('inside GET /comments');
    res.json(comments)
  });

  app.get("/products", function(req, res){
    console.log('inside GET /products');
    res.json(products)
  });

  //GET res id
  app.get("/contacts/:id", function(req, res){
    console.log('inside GET /contacts');
    let id = req.params.id;
    let foundContact = contacts.find(contact => contact._id == id);
    if(!foundContact){
      res.status(400).json({ msg: `no contact ${id}`})
    } res.json(foundContact)
  });

  app.get("/vehicle/:id", function(req, res){
    console.log('inside GET /vehicles');
    let id = req.params.id;
    let foundVehicle = vehicles.find(vehicle => vehicle._id == id);
    if(!foundVehicle){
      res.status(400).json({ msg: `no vehicle ${id}`})
    } res.json(foundVehicle)
  });

  app.get("/comments/:id", function(req, res){
    console.log('inside GET /comments');
    let id = req.params.id;
    let foundComment = comments.find(comment => comment._id == id);
    if(!foundComment){
      res.status(400).json({ msg: `no comments ${id}`})
    } res.json(foundComment)
  });

  app.get("/products/:id", function(req, res){
    console.log('inside GET /products');
    let id = req.params.id;
    let foundProduct = products.find(products => products._id == id);
    if(!foundProduct){
      res.status(400).json({ msg: `no products ${id}`})
    } res.json(foundProduct)
  });


  //POST
app.post("/contacts", function(req, res){
  console.log('inside POST contacts');
  let counter = contacts.lenght + 1;

  let newContact = {
    _id : counter ,
    name : req.body.name,
    occupation : req.body.occupation,
    avatar : req.body.avatar
  }

  contacts.push(newContact);
  counter++;
  res.json({msg: `contact added`, newContact})
});

app.post("/vehicles", function(req, res){
     console.log("inside post vehicles");
     let counter = vehicles.length + 1;
  
     let newVehicle = {
       _id: counter,
       imgUrl: req.body.imgUrl,
       year: req.body.year,
       make: req.body.make,
       model: req.body.model,
       price: req.body.price,
       km: req.body.km,
       miles: req.body.miles,
       fuel: req.body.fuel,
       city: req.body.city,
       isNew: req.body.isNew
     }
  
     vehicles.push(newVehicle);
     counter++;
    res.json({ msg: `vehicle added`, newVehicle})
   });

   add.post("/comments",function(res,req){
     console.log('inside post comments');
     let counter = comments.lenght + 1;

     let newComment = {
         _id : counter,
          body : req.body.body,
           postId : 1,
         }

         comments.push(newComment);
         counter++;
         res.json({msg: `comment added`, newComment})
   });

   app.post("/contacts", function(req,res){
     console.log('inside post contacts', req.body);

     let nextId = contacts.lenght + 1;
     req.body._id = nextId;

     contacts.push(req.body);
     res.json('good job')
   })