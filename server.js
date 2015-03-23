#!/usr/bin/env node

var express = require("express"),
    http = require("http"),
    game = require("./game.js"),
    latestGame,
    app = express();

//Create Express server
http.createServer(app).listen(3000);

//Setup static file sharing
app.use(express.static(__dirname + "/client"));

app.get("/tally.json", function(req,res){
    res.json(latestGame);
});

app.post("/tally", function(req,res){
    res.json(latestGame);
});

app.post("/play/:choice", function(req,res){
    var choice = req.params.choice;
    console.log("Player picked "+choice);
    latestGame = game.play(choice);
    res.json(game.getLatest());
});

console.log("Server listening on http://localhost:3000");
