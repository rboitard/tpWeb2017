
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    this.canvas = canvas;
    this.interactor = interactor;
    this.initCoordX = 0;
    this.initCoordY = 0;
    this.finCoordX = 0;
    this.finCoordY = 0;
    this.pression = false;

    this.onTouchStart = function(evt) {
      this.initCoordX = getMousePosition(this.canvas, evt).x;
      this.initCoordY = getMousePosition(this.canvas, evt).y;
      this.finCoordX = this.initCoordX
      this.finCoordY = this.initCoordY
      this.pression = true;
      this.interactor.onInteractionStart(this);
      console.log("initX : " + this.initCoordX + " / initY : " + this.initCoordY);
    }.bind(this) ;

    this.onTouchEnd = function(evt) {
      if(this.pression == true){
        this.interactor.onInteractionEnd(this);
        this.pression = false;
        console.log("finX : " + this.finCoordX + " / finY : " + this.finCoordY);
      }
    }.bind(this) ;

    this.onMove = function(evt) {
      if(this.pression == true){
        this.finCoordX = getMousePosition(this.canvas, evt).x;
        this.finCoordY = getMousePosition(this.canvas, evt).y;
        this.interactor.onInteractionUpdate(this);
        console.log("finX : " + this.finCoordX + " / finY : " + this.finCoordY);
      }
    }.bind(this) ;
  
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



