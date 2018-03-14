
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Line.prototype.paint = function (ctx) {
    //TODO Manager color

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.epaisseur;
    ctx.moveTo(this.coordXBegin, this.coordYBegin);
    ctx.lineTo(this.coordXEnd, this.coordYEnd);
    ctx.stroke();

};

Rectangle.prototype.paint = function (ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.epaisseur;
    ctx.rect(this.coordX, this.coordY, this.largeur, this.hauteur);
    ctx.stroke();
};


Drawing.prototype.paint = function (ctx) {
    console.log(this.getForme());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForme().forEach(function (forme) {
        forme.paint(ctx);
    });
};



function updateShapeList(drawing){

    var shapeList = document.getElementById('shapeList');



    while (shapeList.firstChild) {
        shapeList.removeChild(shapeList.firstChild);
    }
    drawing.getForme().forEach(function (forme) {
        var butt = document.createElement("button");
        butt.setAttribute("class", "btn btn-default");
        butt.setAttribute("type", "button");

        var span = document.createElement("span");
        span.setAttribute("class", "glyphicon glyphicon - remove - sign");
        butt.appendChild(span);
        if(forme.type == 1){
            var line = document.createElement("li");
            line.appendChild(butt);
            line.appendChild(document.createTextNode("LINE -  id : " + forme.id + "/" + "color : " + forme.color ));
            line.setAttribute("id", forme.id); 
            shapeList.appendChild(line);
        }
        else if(forme.type == 0){
            var rect = document.createElement("li");
            rect.appendChild(butt);
            rect.appendChild(document.createTextNode("RECT - id : " + forme.id + "/" + "color : " + forme.color));
            rect.setAttribute("id", forme.id);
            shapeList.appendChild(rect);
        }
        
    });
}
