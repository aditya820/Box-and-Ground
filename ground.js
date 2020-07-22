class Ground {

constructor (x,y,width,height) {
var options_ground = {
isStatic : true
}

this.body = Bodies.rectangle(x,y,width,height,options_ground);
this.width = width;
this.height = height

World.add(world,this.body);

}

display(){
    var pos2 = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos2.x,pos2.y,this.width,this.height);
}

}