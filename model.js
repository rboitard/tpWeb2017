
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.listForme = new Array();
    
    this.addForme = function (forme) {
        this.listForme.push(forme);
    }.bind(this);

    this.getForme = function (){
        return this.listForme;
    }
};

function Forme(color, epaisseur, id) {
    this.id = id;
    this.color = color;
    this.epaisseur = epaisseur;
};

function Line(coordXBegin, coordYBegin, coordXEnd, coordYEnd, color, epaisseur, id) {
    this.type = 1;
    this.coordXBegin = coordXBegin;
    this.coordYBegin = coordYBegin;
    this.coordXEnd = coordXEnd;
    this.coordYEnd = coordYEnd;
    Forme.call(this, color, epaisseur, id);
};

function Rectangle(coordX, coordY, largeur, hauteur, color, epaisseur, id) {
    this.type = 0;
    this.coordX = coordX;
    this.coordY = coordY;
    this.largeur = largeur;
    this.hauteur = hauteur;
    Forme.call(this, color, epaisseur, id);
};
