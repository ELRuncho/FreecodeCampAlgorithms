
function truthCheck(collection, pre) {
  // Is everyone being true?
  var truty=0,props=Object.keys(pre);
  
 for(var i=0;i<collection.length;i++){
     if(collection[i].hasOwnProperty(pre)&&collection[i][pre]!=null&&collection[i][pre]!=0&&!Number.isNaN(collection[i][pre])){
        truty++;
      }
 }
  if(truty===collection.length){
    return true;
  }else{
    return false;
  }
  return truty;
}

truthCheck([{"single": "yes"}], "single");
