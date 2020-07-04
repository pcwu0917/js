//将字符串解析为整数
const num=parseInt("12");
const num2=22+num;
//将字符串解析为浮点数
const num3=parseFloat("23.4");
console.log(num2+num3);

//-----------------------------------
const str1="Hello ";
const str2="world";
console.log(str1.concat(str2))
const str3=str1.concat(str2);
console.log(str3.substr(6,5));
console.log(str3.toUpperCase())
console.log(str3.replace("world","javaScript"))
const strs=str3.split(" ");
console.log(strs)

