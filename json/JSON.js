const student = {
    name: "wpc",
    age: 23,
};
console.log(student.name);

const stu = '{"name":"wpc","age":23}';
const stuJson = JSON.parse(stu);
//两种获取json数据的方式均可
console.log(stuJson.name);
console.log(stuJson["age"])
console.log(JSON.stringify(stuJson))
