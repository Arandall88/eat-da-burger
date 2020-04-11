const burger = require("../model/burger.js");
const express = require("express");

var router = express.Router();

// Handlebars object
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hdbrsObj = {
        burgers: data
      };
      console.log(hdbrsObj);
      res.render("index", hdbrsObj);
    });
});