//Dependencies
const express = require('express');
const path = require('path'); 

//SET UP EXPRESS APP
const app = express(); 
var PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//API / Data 
// Tables (DATA)
// =============================================================
var tables = [
  {
    name: 'Alex',
    number: "",
    email: 'alex@gmail.com',
    id: 1,
  },
]
// WaitList (DATA)
// =============================================================
var waitList = [
  {
    Name: 'Alex',
    Number: "",
    Email: 'alex@gmail.com',
    ID: 1,
  },
]


//API-ROUTES 
//======================================================
//Return Tables 
app.get('/api/tables', function(req, res){
  return res.json(tables);
})

//Return WaitList 
app.get('/api/waitList', function(req, res){
  return res.json(waitList);
})

//Post-Tables
app.post("/api/tables", function(req, res) {
  const newTable = req.body; 
    if(tables.length <= 4){
      tables.push(newTable);
    }else {
      waitList.push(newTable);
    }
    res.json(newTable);
  })

//DELETE Tables
 //=================================================
//  app.delete("/api/notes/:id", function(req, res) {
//   //GET AN ID FROM THE NOTE IN THE DB
//   //IF ID MATCHES DELETE



//HTML ROUTES
//==================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html" ));
});

app.get("/make-res", function(req, res) {
  res.sendFile(path.join(__dirname, "make-res.html" ));
});

app.get("/view-tables", function(req, res) {
  res.sendFile(path.join(__dirname, "view-tables.html" ));
});


// Starts the server to begin listening
// =====================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
