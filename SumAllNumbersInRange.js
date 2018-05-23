function sumAll(arr) {
  arr.sort(function(a,b){return a-b;});
  var newarr=[];
  for(var i=arr[0];i<=arr[1];i++){
    newarr.push(i);
  }
  
  return newarr.reduce(function(acum,current){return acum+current;});
}

sumAll([55,32]);
