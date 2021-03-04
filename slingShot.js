class SlingShot{
    constructor(bodyA,pointB){
        var Options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:2
        }
        this.sling=Constraint.create(Options);
        this.pointB=pointB;
        World.add(world,this.sling)
    }
    attach(body){
        this.sling.bodyA= body
    }
    fly(){
        this.sling.bodyA= null
    }
    display(){
        if(this.sling.bodyA){
            var pointA= this.sling.bodyA.position;
            var pointB= this.pointB;
            strokeWeight(3);
            stroke("orange")
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}