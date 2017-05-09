/*global $*/
$(document).ready(function (){
   
   
    var life = 5;
    var score = 0;
    var width = $("#container").width();
    $("#paddle").css("left", "50%");
    //spawn bombs
    loop();
function loop() {
    $(".missile").position().top = $("#container").offset().top;
    var RNGspawn = window.innerWidth * 0.25 + Math.floor((Math.random() * width) - $(".missile").width() * 0.5);
    $(".missile").css("left", RNGspawn);
    $('.missile').css("top", "0");
    $(".missile").show();

        var interval = setInterval(function(){   
            var picTop = $(".missile").offset().top;
            var picBottom = picTop + $(".missile").height();
            var picLeft = $(".missile").offset().left;
            var picRight = picLeft + $(".missile").width();
            //var picMiddle = picLeft + $(".missile").width() / 2;
            var paddleCoord = $("#paddle").position();
            var paddleTop = $("#paddle").offset().top;
            var paddleLeft = $("#paddle").offset().left;
            var paddleRight = paddleLeft + $("#paddle").width();
            var containerTop = $("#container").offset().top;
            var containerBottom = containerTop + $("#container").height();
           
         
               
            if (picLeft <= paddleRight && picRight >= paddleLeft && picBottom >= paddleTop) {
                $(".missile").delete;
                $(".missile").hide();
                score += 100;
                $("#scoreNumber").html(score);
                console.log("SCORE" + score);
                clearInterval(interval);
                loop();
                
                
            }   else if (picBottom >= containerBottom) {
                    $(".missile").delete;
                    $(".missile").hide(score);
                    life--;
                    $("#liveNumber").html(life);
                    
                    console.log("LIFE " + life);
                    clearInterval(interval);
                loop();
                } 
             
            
            //console.log("middle " + picMiddle);
            $(".missile").css("top", $(".missile").offset().top + 10);
         
        
        },50);
        
    } 
});    

//wall collision   
function wallBlockLeft() {
    var paddleLeft = $("#paddle").offset().left;
    var paddleRight = paddleLeft + $("#paddle").width();
    var wallLeft = $("#container").offset().left;
    var wallRight = wallLeft + $("#container").width();
    if (paddleLeft <= wallLeft) {
        return true;
    } else {
        return false;
    }
    //console.log(wallRight);
}    
function wallBlockRight() {
    var paddleLeft = $("#paddle").offset().left;
    var paddleRight = paddleLeft + $("#paddle").width();
    var wallLeft = $("#container").offset().left;
    var wallRight = wallLeft + $("#container").width();
    if  (paddleRight >= wallRight) {
        return true;
    } else {
        return false;
    } 
}
//paddle movement    
$("body").keydown(function(event) {
    if (event.which === 37 && !wallBlockLeft()) {
        $("#paddle").css("left", $("#paddle").offset().left - 9);
    } else if (event.which === 39 && !wallBlockRight()) {
        $("#paddle").css("left", $("#paddle").offset().left + 9);
    } else {
        return;
    }
    console.log(event);
    
});

