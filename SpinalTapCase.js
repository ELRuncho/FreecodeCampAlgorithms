
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
 if(/\s/.test(str)){
    str=str.replace(/ /gi,'-');
    str=str.replace(/([A-Z])/g, '$1');
    str=str.replace(/_/g,'');
   if(/The/.test(str)){
     str=str.replace(/The/g, '-The');
   }
   if(str.charAt(0)=='-'){
     str=str.substr(1);
    }
  }else{
    str=str.replace(/_/g,'');
    str=str.replace(/([A-Z]+)/g, '-$1');
    if(str.charAt(0)=='-'){
     str=str.substr(1);
    }
  }  

  str=str.toLowerCase();
  return str;
}

spinalCase("AllThe-small Things");
