
var editingMode = { rect: 0, line: 1 };

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);

function modeRect(){
    pencil.currEditingMode = editingMode.rect;
    console.log("rect");
}

function modeLine() {
    pencil.currEditingMode = editingMode.line;
    console.log("line");
}

function setColor() {
    pencil.currColour = colour.value;
    console.log("color : " + colour.value);
}

function setWidth() {
    pencil.currLineWidth = spinnerWidth.value;
    console.log("width : " + spinnerWidth.value);
}

drawing.paint(ctx, canvas);
var dragDrop = new DnD(canvas, pencil);
canvas.addEventListener("mousedown", function (event) { // <---- "event" parameter here
    dragDrop.onTouchStart(event);
});
canvas.addEventListener("mouseup", function (event) { // <---- "event" parameter here
    dragDrop.onTouchEnd(event);
});
canvas.addEventListener("mousemove", function (event) { // <---- "event" parameter here
    dragDrop.onMove(event);
});
// Code temporaire pour tester le DnD
new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
rec.paint(ctx);
var ligne = new Line(10, 20, 50, 80, 100, 5, '#00CCC0');
ligne.paint(ctx);
//var dessin = new Drawing();
//dessin.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
//var drawing = new Drawing();
//var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

var butRect = document.getElementById('butRect');
var bubLine = document.getElementById('butLine');
var spinnerWidth = document.getElementById('spinnerWidth');
var colour = document.getElementById('colour');

colour.addEventListener("input", setColor, false);

