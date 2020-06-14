class Slingshot{
    constructor(bA, pB){
        var options = {
            bodyA: bA,
            pointB:pB,
            stiffness: 0.04,
            length: 12
            
        }
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        this.point=pB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
    imageMode(CENTER)
    image(this.sling1,200,120)
    image(this.sling2,175,75)
    
        if (this.chain.bodyA!==null){
        var ob1 = this.chain.bodyA.position;
        var ob2 = this.point;
        push()
       
        stroke(56,26,9)
        if (ob1.x<210){
            strokeWeight(7);
            line(ob1.x-20, ob1.y, ob2.x+10, ob2.y);
            line(ob1.x-20,ob1.y,ob2.x-30,ob2.y)
            image(this.sling3,ob1.x-25,ob1.y,12,30)
        }
        else{
            strokeWeight(4);
            line(ob1.x+30, ob1.y, ob2.x, ob2.y);
            line(ob1.x+30,ob1.y,ob2.x-30,ob2.y)
            image(this.sling3,ob1.x+25,ob1.y,12,30)

        }
       
        pop()
        }
    }
fly(){
 this.chain.bodyA=null;   
}    
}
