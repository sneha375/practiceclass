class Ball{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
       
        this.r=r
    }

    display(){
    circle(this.x,this.y,this.r)
    }
}