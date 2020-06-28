const express = require("express");
const burger = require("../models/burger");
const { end } = require("../config/connection");
const router = express.Router();

// Route to get all records from the db and render them on the home page (/)
router.get("/", async (req, res) => {
    try {
        const data = await burger.all();
        const newBurger = { burger: data };
        res.render("index", newBurger);
    } catch (err) {
        console.error("ERROR - burger_controller.js - router.get(/): ", err);
    }
});

// Route to post a new burger record to db
router.post("/api/burger", async (req, res) => {
    try {
        const burger = req.body.burgerName;
        const data = await burger.create(burger);
    
    // If no records updates, send 404 error, if a record has been updated send successful 200 status
        if (data.affectedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    } catch (err) {
        console.error("ERROR - burger_controller.js - router.post(/api/burger): ", err);
    }
});

// Route to update an existing record in db using req.params.id to identify correct record to update
router.put("/api/burger/:id", async (req, res) => {
    try {
        const burgerId = req.params.id;
        const data = await burger.update(1, burgerId);       

    // If no records updates, send 404 error, if a record has been updated send successful 200 status
        if (data.changedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }    
    } catch (err) {
        console.error("ERROR - burger_controller.js - router.put(/api/burger/:id): ", err);
}
});

// Route to update an existing record in db using req.params.id to identify correct record to delete
router.delete("/api/burger/:id", async (req, res) => {
    try {
        const burgerId = req.params.id;
        const data = await burger.delete(burgerId);
    
    // If no records updates, send 404 error, if a record has been updated send successful 200 status
        if (data.affectedRows == 0) {            
            return res.status(404).end();
          } else {
            res.status(200).end();
          }      
    } catch (err) {
        console.error("ERROR - burger_controller.js - router.delete(/api/burger/:id): ", err);
    }
});

module.exports = router;
