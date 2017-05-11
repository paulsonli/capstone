/*global $*/
$(document).ready(function (){
   
   
    //var life = 5;
    var score = 0;
    var width = $("#container").width();
    $("#paddle").css("left", "50%");
    //spawn bombs
    loop();
    
    function loop() {
        $(".missile").position().top = $("#container").offset().top;
        var RNGspawn = window.innerWidth * 0.25 + Math.floor((Math.random() * width) - $(".missile").width() * 0.5);
        var speed = 50;
        console.log(speed);
        $(".missile").css("left", RNGspawn);
        $('.missile').css("top", "0");
        $(".missile").show();
        if (score >= 200){
            score -= 2;
        }
        if (score >= 300){
            score -= 3;
        }
        if (score >= 400){
            speed -= 4;
        }
        if (score >= 500){
            speed -= 5;
        }
        if (score >= 700){
            speed -= 7;
        }
        if (score >= 900){
            speed -= 9;
        }
        if (score >= 1100){
            speed -= 9.5;
        }
        if (score >= 1500){
            speed -= 10;
        }
        
        
              var interval = setInterval(function(){   
                var picTop = $(".missile").offset().top;
                var picBottom = picTop + $(".missile").height();
                var picLeft = $(".missile").offset().left;
                var picRight = picLeft + $(".missile").width();
                var paddleTop = $("#paddle").offset().top;
                var paddleLeft = $("#paddle").offset().left;
                var paddleRight = paddleLeft + $("#paddle").width();
                var containerTop = $("#container").offset().top;
                var containerBottom = containerTop + $("#container").height();
                if (picLeft <= paddleRight && picRight >= paddleLeft && picBottom >= paddleTop) {
                    $(".missile").delete;
                    $(".missile").hide();
                    score += Math.floor((Math.random() * 10) + 1) + 19;
                    $("#scoreNumber").html(score);
                    clearInterval(interval);
                    loop();
                
                
                }   else if (picBottom >= containerBottom) {
                        $(".missile").delete;
                        $(".missile").hide();
                        //life--;
                        //$("#liveNumber").html(life);
                        score -= Math.floor((Math.random() * 10) + 1) + 3;
                        $("#scoreNumber").html(score);
                        clearInterval(interval);
                        loop();
                    } 
                 
                
                //console.log("middle " + picMiddle);
                $(".missile").css("top", $(".missile").offset().top + 10);
             
            
            },speed);
            
            if (score >= 100){
                        $("#medalName").html("Bronze"); 
                        $("#medal").attr("src", "pics/Bronze1.png");
                    } else if (score <= 100){
                        $("#medalName").html("None");
                        $("#medal").attr("src", "");
                    }
                    if (score >= 200){
                        $("#medalName").html("Silver");
                        $("#medal").attr("src", "pics/Silver2.png"); 
                    }
                    if (score >= 300){
                        $("#medalName").html("Gold");
                        $("#medal").attr("src", "pics/Gold3.png"); 
                    }
                    if (score >= 400){
                        $("#medalName").html("Platinum");
                        $("#medal").attr("src", "pics/Platinum4.png");
                    }
                    if (score >= 500) {
                        $("#medalName").html("Diamond");
                        $("#medal").attr("src", "pics/Diamond5.png");
                    }
                    if (score >= 700) {
                        $("#medalName").html("Challenger");
                        $("#medal").attr("src", "pics/Challengers6.png"); 
                    }
                    if (score >= 900){
                        $("#medalName").html("Masters");
                        $("#medal").attr("src", "pics/Masters7.png");
                    }
                    if (score >= 1100){
                        $("#medalName").html("Heroes");
                        $("#medal").attr("src", "pics/Heroes8.png");
                    }
                    if (score >= 1600){
                        $("#medalName").html("Champions");
                        $("#medal").attr("src", "pics/Champions9.png"); 
                    }
    }
});    

//wall collision   
function wallBlockLeft() {
    var paddleLeft = $("#paddle").offset().left;
    var wallLeft = $("#container").offset().left;
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
        $("#paddle").css("left", $("#paddle").offset().left - 25);
    } else if (event.which === 39 && !wallBlockRight()) {
        $("#paddle").css("left", $("#paddle").offset().left + 25);
    } else {
        return;
    }
    console.log(event);
    
});

