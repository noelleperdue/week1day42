var loadedDie = function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = -1;


  return function() {
    i++;
    return list[i];
  }

  //return innerFun;
}();



console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6