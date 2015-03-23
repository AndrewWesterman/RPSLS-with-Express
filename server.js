#!/usr/bin/env node

var express = require("express"),
    http = require("http"),
    game = require("./game.js"),
    app = express();

//Create Express server
http.createServer(app).listen(3000);

//Setup static file sharing
app.use(express.static(__dirname + "/client"));

app.get("/outcome.json", function(req,res){
    res.json(game);
});

app.get("/play/rock", function(req,res){
    console.log("Player picked rock");
});


/*
    //route template
    app.get("", function(req,res){

    });
*/

/*
server = http.createServer(function (req,res){
    res.writeHead(200, {"Content-Type": "app/json"});

    if(req.method === "POST"){
        if (req.url === "/play/rock"){
            res.end(JSON.stringify(game("rock")));
        } else if (req.url === "/play/paper"){
            res.end(JSON.stringify(game("paper")));
        } else if (req.url === "/play/scissors"){
            res.end(JSON.stringify(game("scissors")));
        } else if (req.url === "/play/lizard"){
            res.end(JSON.stringify(game("lizard")));
        } else if (req.url === "/play/spock"){
            res.end(JSON.stringify(game("spock")));
        }
    }    
});

server.listen(3000);
*/

console.log("Server listening on http://localhost:3000");
