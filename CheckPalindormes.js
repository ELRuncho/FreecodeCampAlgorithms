function palindrome(str) {
  // Good luck!
  str=str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g,'');
  var newStr=str.split('').reverse().join('');
  
  if(str==newStr){
    return true;
  }else{
    return false;
  }
    
 
}



palindrome("_eye");
