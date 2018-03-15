//On définit le context de notre canvas (en 2d en l'occurence)
var canvas = document.getElementById("moncanvas");
var context = canvas.getContext("2d");
//Les variables de position 
var x; //Horizontal
var y; //Vertical
x=0;
y=0;
//On initialise l'image
var soleil = new Image();
soleil.src = "soleil.jpg";
//On la dessine
context.drawImage(soleil, x,y);
