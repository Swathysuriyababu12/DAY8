class Circle{
constructor(){
    let radius:number;
    let color:string;
    this.radius=1;
    this.color="red";
   console.log(this.radius);
    }
    circle(){
        console.log("Hey circle");
    }
    circle(radius:number){
         this.radius=radius;
    }
    circle(radius:number,color:string){
this.radius=radius;
this.color=color;
    }
    getRadius():number{
    let rad:number=this.radius;
    console.log(rad);
    return rad;
   
    }
    setRadius(radius:number):void{
this.radius=radius;
    }
     getColor():string{
        console.log(' color of the circle is '+this.color)
    }
    setColor(color:string):void{
        this.color=color;
        console.log(' color of the circle is '+this.color)
    }
   
    getArea():number{
let area:number=3.14*this.radius*this.radius();
return area;
    }
   
    getCircumference():number{
 let circum:number;
 circum=2*Math.PI*this.radius;
 console.log(circum);
 return circum;
 
    }
}


var cir=new Circle();
cir.setRadius(4);
cir.getColor();
cir.setColor("pink");
cir.getCircumference();

/* OUTPUT
1
circle.js:28  color of the circle is red
circle.js:32  color of the circle is pink
circle.js:41 25.132741228718345
*/