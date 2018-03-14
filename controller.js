
var editingMode = { rect: 0, line: 1 };


function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.idAdd = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		if(this.currEditingMode == 0){
			this.currentShape = new Rectangle(dnd.initCoordX, dnd.initCoordY, 0, 0, this.currColour, this.currLineWidth, this.idAdd);
			this.idAdd ++;
		}
		else{
			this.currentShape = new Line(dnd.initCoordX, dnd.initCoordY, dnd.finCoordX, dnd.finCoordY, this.currColour, this.currLineWidth, this.idAdd);
			this.idAdd++;
		}
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		if (this.currEditingMode == 0) {
			this.currentShape.largeur = dnd.finCoordX - dnd.initCoordX;
			this.currentShape.hauteur = dnd.finCoordY - dnd.initCoordY;
			this.currentShape.epaisseur = this.currLineWidth;
			this.currentShape.color = this.currColour;
		}
		else {
			this.currentShape.coordXEnd = dnd.finCoordX;
			this.currentShape.coordYEnd = dnd.finCoordY;
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		drawing.addForme(this.currentShape);
		drawing.paint(ctx);
		updateShapeList(drawing);
	}.bind(this);

};


