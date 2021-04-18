class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB= pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pos1 = this.sling.bodyA.position
        var pos2 = this.pointB;
        strokeWeight(4);
        line(pos1.x,pos1.y, pos2.x,pos2.y);
        }
        
    }
}