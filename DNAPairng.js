function pairElement(str) {
  str = str.split('');
  var complete=[];
  var test=["a","d"];
  var test2=["r","t"];
 
  function pushArray(arr, arr1){
    arr.push.apply(arr,arr1);
    return arr;
  }
  for(var i=0;i<str.length;i++){
    complete.push([]);
  }
  //pushArray(complete,test);
  //pushArray(complete[1],test2);
  for(i=0;i<str.length;i++){
    var val=str[i];
    switch(val){
      case "A":
        pushArray(complete[i], ["A","T"]);
        break;
      case "T":
        pushArray(complete[i], ["T","A"]);
        break;
      case "C":
        pushArray(complete[i], ["C","G"]);
        break;
      case "G":
        pushArray(complete[i], ["G","C"]);
        break;
    }
    
  }
      
  return complete;
  
}

pairElement("ACG");
