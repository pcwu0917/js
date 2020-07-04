var obj1=new Object();

obj1.info="i am an obj";

obj1.showInfo=function(){
    console.log(this.info);
}

obj1.showInfo();