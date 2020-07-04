const num1=-12.5,num2=12,num3=13;
console.log(Math.ceil(num1));
console.log(Math.floor(num1))
console.log(Math.round(num1))
console.log(Math.max(num1,num2,num3));
console.log(Math.min(num1,num2,num3))

for(var j=0;j<10;j++){
    let sum=0;
    for(var i=0;i<10000;i++){
        let rand=Math.round(Math.random()*100);
        sum+=rand;
    }
    console.log(sum/10000);
}

