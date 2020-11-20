var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
roverw = 90;
roverh = 100;
roverx = 10;
rovery = 10;
marsimage = "racing.jpg";
roverimage = "car1.png";
function add() {
    backgroundimgtag = new Image();
    backgroundimgtag.onload = set_background_image;
    backgroundimgtag.src = marsimage;

    roverimgtag = new Image();
    roverimgtag.onload = set_rover_image;
    roverimgtag.src = roverimage;
}
function set_background_image() {
    ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height)
}
function set_rover_image() {
    ctx.drawImage(roverimgtag, roverx, rovery, roverw, roverh)
    rovery=100;
    ctx.drawImage(roverimgtag, roverx, rovery, roverw, roverh)
}
window.addEventListener("keydown", keypressed)
function keypressed(e) {
    keyclicked = e.keyCode;
    if (keyclicked == '40') {
      
        console.log("down");
    }
    if (keyclicked == '39') {
       
        console.log("right");
    }
    if (keyclicked == '38') {
       
        console.log("up");
    }
    if (keyclicked == '37') {
        
        console.log("left");
    }
    if (keyclicked == '83') {
      
        console.log("down");
    }
    if (keyclicked == '68') {
       
        console.log("right");
    }
    if (keyclicked == '87') {
       
        console.log("up");
    }
    if (keyclicked == '65') {
        
        console.log("left");
    }
    
}
