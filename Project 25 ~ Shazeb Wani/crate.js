class crate{
    constructor(x,y,width, height) {
        var options = {
            isStatic: true
        }
    
    this.body= Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.body)
    }
    display()
{
   var pos =this.body.position;

   push()
   imageMode(CENTER)
   image(this.image,625,600,150,180)
   pop()
}
};