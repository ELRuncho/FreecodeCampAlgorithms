function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flat=[].concat.apply([], arr);
  for(var i=0;i<arr.length;i++){
   if(Array.isArray(arr[i])){
     flat=[].concat.apply([], flat);
   } 
  }
  for(i=0;i<arr.length;i++){
   if(Array.isArray(arr[i])){
     flat=[].concat.apply([], flat);
   } 
  }
  return flat;
}

steamrollArray([1, {}, [3, [[4]]]]);
