const express = require("express");
const burger = require("../models/burger");
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

module.exports = router;
