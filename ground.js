class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body= Bodies.rectangle(500,350,1000,20,options);
        World.add(world,this.body);
    }
    display(){
        fill("pink");
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,1000,20);
    }
}