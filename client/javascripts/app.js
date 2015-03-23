var main = function (){
    "use strict";

    $(".rock").on("click", function(){
        $.post("play/rock",function(res){
            postOutcome(res);
        });
    });

    var postOutcome = function(game){
        console.log("Attempting to post outcome");
        $("#outcomes").append($("<p>").text(game.gametext));
    };
};

$(document).ready(main);