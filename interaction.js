
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    this.initCoordX = 0;
    this.initCoordY = 0;
    this.finCoordX = 0;
    this.finCoordY = 0;
    this.pression = false;

    this.onTouchStart = function(evt) {
      this.initCoordX = evt.x;
      this.initCoordY = evt.y;
      this.pression = true;
    }.bind(this) ;

    this.onTouchEnd = function(evt) {
      if(pression == true){
        this.initCoordX = evt.x;
        this.initCoordY = evt.y;
        this.finCoordX = evt.x;
        this.finCoordY = evt.y;
        this.pression = false;
      }
    }.bind(this) ;

    this.onMove = function(evt) {
      if(pression == true){
        this.finCoordX = evt.x;
        this.finCoordY = evt.y;
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



