/*global $*/
$(document).ready(function (){
   
    var lives = 5;

   // while (lives > 0) {
    var width = $("#container").width();
    var RNGspawn = window.innerWidth * 0.25 + Math.floor((Math.random() * width) - $(".missile").width() * 0.5);
    $(".missile").css("left", RNGspawn);
    $("#paddle").css("left", "50%");
    //spawn bombs
    var interval = setInterval(function() {
        var picTop = $(".missile").offset().top;
        var picBottom = picTop + $(".missile").height();
        var picLeft = $(".missile").offset().left;
        var picRight = picLeft + $(".missile").width();
        var paddleTop = $("#paddle").offset().top;
        var paddleLeft = $("#paddle").offset().left;
        var paddleRight = paddleLeft + $("#paddle").width();
        var containerTop = $("#container").offset().top;
        var containerBottom = containerTop + $("#container").height();
        if (picBottom >= paddleTop && picLeft >= paddleLeft && picRight <= paddleRight) {
            $(".missile").hide();
            
        }   else if (picBottom >= containerBottom) {
                $(".missile").hide();
                clearInterval(interval);
                lives--;
        
            } else if (lives === 0) {
            alert ("GG");
            }
        console.log("picTop:" + picTop);
        console.log("picBottom:"  + picBottom);
        console.log("paddleTop " + paddleTop);
        console.log("width " + width);
        console.log("spawn " + RNGspawn);
        $(".missile").css("top", $(".missile").offset().top + 10);
    // if missile touches container bottom, delete it delete.pic or something like that
    // lol. 
    
    },50);
    //}
    


    
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


