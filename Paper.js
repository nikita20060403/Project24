class Paper{
constructor(x,y,radius){
    var options={

       
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius=radius;
      World.add(world, this.body);

    
}
    display(){
        var pos = this.body.position;
        push();
        //translate(pos.x,pos.y);
        rectMode(CENTER);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
        




    }

}