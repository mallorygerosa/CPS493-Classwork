const express = require("express");
const model = require("../models/users");

const app = express.Router();

app
    .get("/async", (req, res, next)=>{
        console.log("Outer function: 1");
        model.Async();
        res.send("Done!");
        console.log("Outer function: 2");

    })  
    .get("/", (req, res, next) => {
model.GetAll()
.then(user=>{
    res.send(user);
})
.catch(next)
    })
    .get("/:user_id", (req, res, next) => {
        res.send(model.Get(req.params.user_id));
        model.Get(req.params.user_id)
        .then(user => {
            res.send(user);
        })
        .catch(next)
    })
    .patch("/:user_id", (req, res, next) =>{
        model   .Update(req.params.user_id, req.body)
                .then( user=> res.send(user) )
                .catch(next) 

    })
    .delete("/:user_id", (req, res, next) =>{

        model   .Delete(req.params.user_id)
                .then( user=> res.send({ deleted: user }) )
                .catch(next) 

    })
    .post("/login", (req, res, next) => {

        model.Login(req.body.handle, req.body.password)
            .then(user => {
                res.send(user);
            })
            .catch(next)

    })
    .post("/register", async (req, res, next) => {
        model.Add(req.body)
            .then(user => {
                res.status(201).send(user);
            })
            .catch(next)
    })

module.exports = app;