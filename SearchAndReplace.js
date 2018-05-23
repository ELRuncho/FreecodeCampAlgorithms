function myReplace(str, before, after) {
  var replace="";
  var char='';
  
  
   function keepCase(match, offset, string) {
     var char=match.charAt(0);
    if(char===char.toUpperCase()){
     return  after.charAt(0).toUpperCase() + after.substr(1);
    }else{
     return after;
    }
  }
  
  return str.replace(before,keepCase);
}

myReplace("A quick brown fox JUMPED over the lazy dog", "JUMPED", "leaped");
