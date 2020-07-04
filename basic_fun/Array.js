//--------数组定义----------------------
const arr1 = new Array();
arr1.push("hello");
arr1.push("world");
console.log(arr1);

const arr2 = ["hello", "world"];
console.log(arr2);

const arr3 = [];
arr3[0]="hello";
arr3[1]="world";
console.log(arr3);

//-------数组方法----------------
const arr4=arr1.concat(arr2,arr3);
console.log(arr4)
console.log(arr4.toString())
//把数组的全部元素加入join中的字符串作为分隔符形成一个字符串
console.log(arr4.join("--"))
//取出数组中指定索引值的元素，下标从0开始
console.log(arr4.slice(1,4));
//将数组进行排序
console.log(arr4.sort());

for(const i in arr4)
    console.log(arr4[i])

