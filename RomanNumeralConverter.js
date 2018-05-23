function convertToRoman(num) {
  var arr = num.toString().split('').map(Number);
  var roman="";
  function one(dig){
    switch(dig){
      case 1:
        roman+="I";
        break;
      case 2:
        roman+="II";
        break;
      case 3:
        roman+="III";
        break;
      case 4:
        roman+="IV";
        break;
      case 5:
        roman+="V";
        break;
      case 6:
        roman+="VI";
        break;
      case 7:
        roman+="VII";
        break;
      case 8:
        roman+="VIII";
        break;
      case 9:
        roman+="IX";
        break;
    }
    return roman;
  }
  function two(digX){
    switch(digX){
      case 0:
        roman+="";
        break;
      case 1:
        roman+="X";
        break;
      case 2:
        roman+="XX";
        break;
      case 3:
        roman+="XXX";
        break;
      case 4:
        roman+="XL";
        break;
      case 5:
        roman+="L";
        break;
      case 6:
        roman+="LX";
        break;
      case 7:
        roman+="LXX";
        break;
      case 8:
        roman+="LXXX";
        break;
      case 9:
        roman+="XC";
        break;
    }
  }
  function three(digC){
    switch(digC){
      case 0:
        roman+="";
        break;
      case 1:
        roman+="C";
        break;
      case 2:
        roman+="CC";
        break;
      case 3:
        roman+="CCC";
        break;
      case 4:
        roman+="CD";
        break;
      case 5:
        roman+="D";
        break;
      case 6:
        roman+="DC";
        break;
      case 7:
        roman+="DCC";
        break;
      case 8:
        roman+="DCCC";
        break;
      case 9:
        roman+="CM";
        break;
    }
  }
  function four(digM){
    switch(digM){
      case 1:
        roman+="M";
        break;
      case 2:
        roman+="MM";
        break;
      case 3:
        roman+="MMM";
        break;
      case 4:
        roman+="MMMM";
        break;
      case 5:
        roman+="MMMMM";
        break;
      case 6:
        roman+="MMMMM";
        break;
      case 7:
        roman+="MMMMMMM";
        break;
      case 8:
        roman+="MMMMMMMM";
        break;
      case 9:
        roman+="MMMMMMMMM";
        break;
    }
  }
  switch(arr.length){
    case 1:
      one(arr[0]);
      return roman;
    case 2:
      two(arr[0]);
      one(arr[1]);
      return roman;
    case 3:
      three(arr[0]);
      two(arr[1]);
      one(arr[2]);
      return roman;
    case 4:
      four(arr[0]);
      three(arr[1]);
      two(arr[2]);
      one(arr[3]);
      return roman;
 
}
}

convertToRoman(2014);
