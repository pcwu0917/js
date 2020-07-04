var mydate=new Date();

var year=mydate.getFullYear();
var month=mydate.getMonth();
var date=mydate.getDate();
var hours=mydate.getHours();
var minutes=mydate.getMinutes();
var second=mydate.getSeconds();
console.log("system current time:"+year+"/"+month+"/"+date+" "+hours+":"+minutes+":"+second);

console.log("date string:"+mydate.toLocaleString())