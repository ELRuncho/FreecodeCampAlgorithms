unction rot13(str) { // LBH QVQ VG!
  var test=str.charCodeAt(10);
  var nwarr=[];
  var control=0;
  
  for(var i=0;i<str.length;i++){
     if(str.charCodeAt(i)<65||str.charCodeAt(i)>90){
       control=str.charCodeAt(i);
       control=String.fromCharCode(control);
       nwarr[i]=control;
     }else if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=77){
       control=str.charCodeAt(i);
       control+=13;
       control=String.fromCharCode(control);
       nwarr[i]=control;
     }else if(str.charCodeAt(i)>=78&&str.charCodeAt(i)<=90){
        control=str.charCodeAt(i);
       control-=13;
       control=String.fromCharCode(control);
       nwarr[i]=control;
     }
  }
  nwarr=nwarr.join("");
  
  return nwarr;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
