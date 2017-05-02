/*global $*/
$(document).ready(function (){
    var width = $("#container").width();
    var RNGspawn = window.innerWidth * 0.25 + Math.floor((Math.random() * width) + 1);
    $("#missile").css("left", RNGspawn);
    $("#paddle").css("left", "50%");
    //spawn bombs
    var interval = setInterval(function() {
        var picTop = $("#missile").offset().top;
        var picBottom = picTop + $("#missile").height();
        var paddleTop = $("#paddle").offset().top;
        if (picBottom >= paddleTop) {
            $("#missile").hide();
            clearInterval(interval);
        }
        console.log("picTop:" + picTop);
        console.log("picBottom:"  + picBottom);
        console.log("paddleTop " + paddleTop);
        console.log("width " + width);
        console.log("spawn " + RNGspawn);
        $("#missile").css("top", $("#missile").offset().top + 10);
    // if missile touches container bottom, delete it delete.pic or something like that

    },50);
    
    


    
});    

//wall collision   
function wallBlock() {
    var paddleLeft = $("#paddle").offset().left;
    var paddleRight = paddleLeft + $("#paddle").width();
    var wallLeft = $("#container").offset().left;
    var wallRight = wallLeft + $("#container").width();
    if (paddleLeft <= wallLeft || paddleRight >= wallRight) {
        alert ("hi"); //change
    }
    console.log(wallRight);
}    
    

//paddle movement    
$("body").keydown(function(event) {

    if (event.which === 37) {
        $("#paddle").css("left", $("#paddle").offset().left - 9);
    } else if (event.which === 39) {
        $("#paddle").css("left", $("#paddle").offset().left + 9);
    } else {
        return;
    }
    wallBlock();
    console.log(event);
    
});


