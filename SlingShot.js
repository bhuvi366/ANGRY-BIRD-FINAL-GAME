class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.5,
            length:10

        }
        this.sling = Matter.Constraint.create(options);
    this. pointB = pointB
        World.add(world,this.sling);
this.sling1 = loadImage("sprites/sling1.png");
this.sling2 = loadImage("sprites/sling2.png");
this.sling3 = loadImage("sprites/sling3.png");
    }
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        image (this.sling1,200,20);
        image (this.sling2,172,19);
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
       

        stroke (48,22,8);
if(pointA.x<=220){
    push();
    strokeWeight(7);
        line (pointA.x - 20,pointA.y,pointB.x -20 ,pointB.y);
        line (pointA.x + 20,pointA.y,pointB.x +20 ,pointB.y);
        image (this.sling3,pointA.x -25,pointA.y -10, 15,30 );
        pop();

}
else{
    push();
    strokeWeight(3);
        line (pointA.x + 20,pointA.y,pointB.x -20 ,pointB.y);
        line (pointA.x - 20,pointA.y,pointB.x +20 ,pointB.y);
        image (this.sling3,pointA.x +25,pointA.y -10, 15,30 );
        pop();
}
        }
        


    }

}
