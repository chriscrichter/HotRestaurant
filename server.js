//Dependencies
const express = require('express');
const path = require('path'); 

//SET UP EXPRESS APP
const app = express(); 
var PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



//API-ROUTES 
//======================================================



//HTML ROUTES
//==================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html" ));
});






// Starts the server to begin listening
// =====================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
