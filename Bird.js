class Bird extends BaseClass {
    constructor(x, y) {
      
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
     
    };

    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      super.display();
    };
  };


  //parent class/ base class
  //child class/ sub-class
  //child classes inherit properties and function from parent class
  //bird, pig, log,  box -> BaseClass
  