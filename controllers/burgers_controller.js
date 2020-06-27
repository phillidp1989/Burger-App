const express = require("express");
const burger = require("../models/burger");
const { end } = require("../config/connection");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await burger.all();
        const burgerObject = { burger: data };
        res.render("index", burgerObject);
    } catch (err) {
        console.log("ERROR - burger_controller.js - router.get(/): ", err);
    }
});

router.post("/api/burger", async (req, res) => {
    try {
        const newBurger = req.body.burgerName;
        const data = await burger.create(newBurger);
        if (data.affectedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    } catch (err) {
        console.log("ERROR - burger_controller.js - router.post(/api/burger): ", err);
    }
});

router.put("/api/burger/:id", async (req, res) => {
    try {
        const burgerId = req.params.id;
        const data = await burger.update(1, burgerId);       
        
        if (data.changedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    
    } catch (err) {
        console.log("ERROR - burger_controller.js - router.put(/api/burger/:id): ", err);
}
});

router.delete("/api/burger/:id", async (req, res) => {
    try {
        const burgerId = req.params.id;
        const data = await burger.delete(burgerId);
        
        if (data.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
      
    } catch (err) {
        console.log("ERROR - burger_controller.js - router.delete(/api/burger/:id): ", err);
    }
});

module.exports = router;
