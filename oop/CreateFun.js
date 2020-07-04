function Car(){
    this.color="";

    this.setColor=function (color) {
        this.color=color;
    }
    this.getColor=function(){
        return this.color;
    }
}
const car = new Car();
car.setColor("red");
console.log("car color:"+car.getColor());

//------使用prototype来实现继承
function BMW(){
    this.brand="";

    this.setBrand=function(brand){
        this.brand=brand;
    }
    this.getBrand=function(){
        return this.brand;
    }
}
BMW.prototype=new Car();

const bmw=new BMW();
bmw.setColor("white")
console.log(bmw.getColor())