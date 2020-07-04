function Car(){
    const color = this.color;

    this.setColor=function (color) {
        this.color=color;
    }
    this.getColor=function(){
        return this.color;
    }
}

var car=new Car();
car.setColor("red");
console.log(car.getColor());