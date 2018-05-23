
function telephoneCheck(str) {
  // Good luck!
  var test=str.replace(/[- ()]/g,''),test2=str.replace(/ /g,'');
  var reg1=/\(/, reg2=/\)/;
  
  switch(test.length){
    case 11:
      if(test.charAt(0)!='1'||test2.charAt(0)!='1'){
      return false;
      }else if(test.charAt(0)=='1'&&test2.charAt(0)=='1'){
          if(reg1.test(test2)&&reg2.test(test2)){
               return true;
           }else if(!reg1.test(test2)&& !reg2.test(test2)){
               return true;
           }else{
               return false;
           }
      }
      break;
      
    case 10:
      if(test.charAt(0)!='5'||test2.charAt(0)!='5'&&test2.charAt(0)!='('){
      return false;
      }else if(test.charAt(0)=='5'&&test2.charAt(0)=='5'||test2.charAt(0)=='('){
        if(reg1.test(test2)&&reg2.test(test2)){
               return true;
           }else if(!reg1.test(test2)&& !reg2.test(test2)){
               return true;
           }else{
               return false;
           }
      }
      break;
      
    default:
      return false;
  }
  //return test;
}



telephoneCheck("2 (757) 622-7382");
