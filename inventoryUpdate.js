function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var current={}, Updated=[];
  function morfosis(object){//turn updated object into array
    var morfed=[];
    var keys=Object.keys(object);
    for(var key in object){morfed.push([object[key],key]);}
    return morfed;
  }
  function alphabetical(a,b){
    var A=a[1];
    var B=b[1];
    A=A.toLowerCase();
    B=B.toLowerCase();
    if(A<B) return -1;
    if(A>B) return 1;
    return 0;
  }
  
  if(arr1!=[]&&arr2!=[]){
      for(var i=0;i<arr1.length;i++){      //turns arr1 into an object
        current[arr1[i][1]]=arr1[i][0];
      }
      for(i=0;i<arr2.length;i++){  
        if (current.hasOwnProperty(arr2[i][1])) {
          current[arr2[i][1]]=current[arr2[i][1]]+arr2[i][0];
        }else{
          current[arr2[i][1]]=arr2[i][0];
        }
      } 
     Updated=morfosis(current);
     Updated=Updated.sort(alphabetical);
     return Updated;
  }else if(arr1==[]&&arr2!=[]){
    return arr2;
  }
  return Updated/*.sort(function(a,b){
    return a[1]-b[1];
  });*/;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
