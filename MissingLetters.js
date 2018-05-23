function fearNotLetter(str) {
  var first=str.charCodeAt(0);
  var last=str.charCodeAt(str.length - 1), test=0;
  for(var i=0;i<=str.length; i++){
    test=str.charCodeAt(i);
 
    if(str.charCodeAt(i+1)>test+1){
      return String.fromCharCode(test+1);
    }
    
  }
  
  //return String.fromCharCode(65, 66, 67);
}

fearNotLetter("abce");
