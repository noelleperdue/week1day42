// var arr = [3,5,7,8];

function myFun(anything) {
return anything.map(Math.sqrt);
}
console.log(myFun([1,4,9]));


// console.log(map(["ground", "control", "to", "major", "tom"]));


// const myFun = map(["ground", "control", "to", "major", "tom"], (elm) => { console.log(elm.length) });

// console.log(myFun);
var data = [1,2,3,4];
var doubler = function(n) {
  return n*2;
}
var doubled_vals = data.map(doubler) {
  return num * 2;
}

//SAME AS

var doubled_vals = data.map(function(num) {
  return num * 2;
})