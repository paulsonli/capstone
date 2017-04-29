/*global $*/
$(document).ready(function (){
    $("#paddle").css("left", "50%");
    
    
    


    
});    

//wall collision   
function wallBlock() {
    var paddleLeft = $("#paddle").offset().left;
    var paddleRight = paddleLeft + $("#paddle").width();
    var wallLeft = $("#container").offset().left;
    var wallRight = wallLeft + $("#container").width();
    if (paddleLeft <= wallLeft || paddleRight >= wallRight) {
        alert ("hi");
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


