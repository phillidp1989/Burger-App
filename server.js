const express = require("express");
const exphbs = require("express-handlebars"); 
const routes = require("./controllers/burgers_controller");

// Setup Express app and enable Heroku deployment
const PORT = process.env.PORT || 8080;
const app = express();

// Setup of static directory
app.use(express.static("public")); 

// Setup of Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route handling with Express
app.use(routes);

// Setup of Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start our server to begin listening to client requests
app.listen(PORT, () => {
// Log (server-side) when our server has started
    console.log("Server listening on http://localhost:" + PORT);    
})