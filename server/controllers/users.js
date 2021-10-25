const express = require("express");
const model = require("../models/users");

const app = express.Router();

app
.get("/", (req, res, next) =>{
    res.send( model.GetAll() );
})
.get("/:id", (req, res, next) =>{
    res.send( model.Get(req.params.id) );
})
.get("/:search", (req, res, next) =>{
    res.send( model.Search(req.query.id) );
})

module.exports = app;