function translatePigLatin(str) {
  
  function isVowel(char){
    var result;
    result = char=="a"||char=="e"||char=="i"||char=="o"||char=="u";
    return result;
  }
  
  var vault1='';
  var vault2='';
  
  if(isVowel(str.charAt(0))){
    return str+"way";
  }else if(!isVowel(str.charAt(0))&&!isVowel(str.charAt(1))){
    vault1=str.charAt(0);
    vault2=str.charAt(1);
    return str.substr(2)+vault1+vault2+"ay";
  }else{
    vault1=str.charAt(0);
    return str.substr(1)+vault1+"ay";
  }
  
  //return str;
}

translatePigLatin("consonant");
