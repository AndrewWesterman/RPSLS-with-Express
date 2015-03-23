var main = function (){
    "use strict";

    $(".rock").on("click", function(){
        $.post("play/rock",{}, function(){
            console.log("We picked rock");
        });
    });

    var postOutcome = function(outcome){
        $("#outcomes").append($("<p>").text(outcome));
    };

    setInterval(function(){
        $.getJSON("/game.json",postOutcome);
    },500);

    $.getJSON("/game.json",postOutcome);
};

$(document).ready(main);