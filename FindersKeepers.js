function findElement(arr, func) {
  var num = 0;
  var need=[];
  need=arr.filter(func);
  num=need[0];
    return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
