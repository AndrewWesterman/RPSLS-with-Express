var main = function (){
    "use strict";

    $("button").on("click", function(){
        var choice = $(this).attr("class");
        $.post("play/"+choice,function(res){
            postOutcome(res);
        });

        $.post("tally", function(res){
            updateTally(res);
        });
    });

    var postOutcome = function(game){
        $("#outcomes").prepend($("<p>").text(game.gametext));
    };

    var updateTally = function(tally){
        $("#wins").text(tally.wins);
        $("#losses").text(tally.losses);
        $("#ties").text(tally.ties);
    };

    //Initial post of the tally so data is not lost on refresh
    $.post("tally", function(res){
        updateTally(res);
    });
};

$(document).ready(main);