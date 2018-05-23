
function diffArray(arr1, arr2) {
  var newArr = [];
  var index=0;
  for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr2.length;j++){
      if(arr1[i]!=arr2[j]){
        index++;
      }
    }
    if(index===arr2.length){
      newArr.push(arr1[i]);
    }
    index=0;
  }
  for(i=0;i<arr2.length;i++){
    for(var h=0;h<arr1.length;h++){
      if(arr2[i]!=arr1[h]){
        index++;
      }
    }
    if(index===arr1.length){
      newArr.push(arr2[i]);
    }
    index=0;
  }
  // Same, same; but different.
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
