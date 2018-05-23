
function addTogether() {
 //checking for valid input
  var checkMe=function(num){
    if(typeof num!=="number"){
    return undefined;
    }else{
      return num;
    }
  };
 
  if(arguments.length>1){
    var first=checkMe(arguments[0]), second=checkMe(arguments[1]);
    if(first===undefined||second===undefined){
      return undefined;
    }else{
      return first+second;
    }
   }else{
    var neo=arguments[0];
    if(checkMe(neo)!==undefined){
      return function (argb){
        if(checkMe(neo)===undefined||checkMe(argb)===undefined){
          return undefined;
        }else{
          return argb+neo;
        }
      };
    }
   }
  
  //return typeof arguments[0];
}

addTogether(2)(3);
