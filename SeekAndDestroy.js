function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  var nwarr=[];
  args.splice(0,1);
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<args.length;j++){
      if(arr[i]===args[j]){
        delete arr[i];
      }
    }
  }
  nwarr=arr;
  nwarr=nwarr.filter(function(val){
    return val!== null;
  });
  return nwarr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
