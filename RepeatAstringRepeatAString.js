
function repeatStringNumTimes(str, num) {
  var neg='';
  var pos='';
  // repeat after me
  if (num<0){
    return neg;
  }else{
    for(var i=1;i<=num;i++){
      pos=pos+str;
    }
  }
  
  return pos;
}

repeatStringNumTimes("abc", 3);
