class Chain{
    constructor(bodyA1,bodyB1){
        var options = {
            bodyA:bodyA1,
            bodyB:bodyB1,
            stiffness:0.04,
            length:50
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position

    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}