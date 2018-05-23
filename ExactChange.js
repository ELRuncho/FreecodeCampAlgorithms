
function checkCashRegister(price, cash, cid) {
  var change = cash-price,billsCoins=[],cidtotal=0,token;
  var register= {};
  // Here is your change, ma'am.
  for(var i=0;i<cid.length;i++){      //turns the cid array into an object
    register[cid[i][0]]=cid[i][1];
  }
  for(i=0;i<cid.length;i++){
    cidtotal+=cid[i][1];
  }
  
  register.howMany=function(amount,den){
    var number;
    if(den>=1){
      number= Math.trunc(amount/den);
      return number;
    }else{
      number= Math.floor(amount/den);
      return number.toFixed(2);
    }
    
  };  
  
  if(change>cidtotal){
    return "Insufficient Funds";
  }else if(change===cidtotal){
    return "Closed";
  }
 
   if(register.howMany(change,100)>0){
     token= register.howMany(change,100);
     token=token*100;
     if(token<=register["ONE HUNDRED"]){
         change-=token;
         register["ONE HUNDRED"]=register["ONE HUNDRED"]-token;
         billsCoins.push(["ONE HUNDRED",token]);
     }else{
         change-=register["ONE HUNDRED"];
         billsCoins.push(["ONE HUNDRED",register["ONE HUNDRED"]]);
     }
   }
   if(register.howMany(change,20)>0){
     token= register.howMany(change,20);
     token=token*20;
     if(token<=register.TWENTY){
         change-=token;
         register.TWENTY=register.TWENTY-token;
         billsCoins.push(["TWENTY",token]);
     }else{
         change-=register.TWENTY;
         billsCoins.push(["TWENTY",register.TWENTY]);
     }
   }
   if(register.howMany(change,10)>0){
     token= register.howMany(change,10);
     token=token*10;
     if(token<=register.TEN){
         change-=token;
         register.TEN=register.TEN-token;
         billsCoins.push(["TEN",token]);
     }else{
         change-=register.TEN;
         billsCoins.push(["TEN",register.TEN]);
     }
   }
   if(register.howMany(change,5)>0){
     token= register.howMany(change,5);
     token=token*5;
     if(token<=register.FIVE){
         change-=token;
         register.FIVE=register.FIVE-token;
         billsCoins.push(["FIVE",token]);
     }else{
         change-=register.FIVE;
         billsCoins.push(["FIVE",register.FIVE]);
     }
   }
  change=Math.round(change*100)/100;
  
   if(register.howMany(change,1)>0){
     token= register.howMany(change,1);
     if(token<=register.ONE){
         change-=token;
         register.ONE=register.ONE-token;
         billsCoins.push(["ONE",token]);
     }else{
         change-=register.ONE;
         billsCoins.push(["ONE",register.ONE]);
     }
   }
   if(register.howMany(change,0.25)>0){
     token= register.howMany(change,0.25);
     token=token*0.25;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.QUARTER){
         change-=token;
         register.QUARTER=register.QUARTER-token;
         billsCoins.push(["QUARTER",token]);
     }else{
         change-=register.QUARTER;
         billsCoins.push(["QUARTER",register.QUARTER]);
     }
   }
    
   if(register.howMany(change,0.10)>0){
     token= register.howMany(change,0.10);
     token=token*0.10;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.DIME){
         change-=token;
         register.DIME=register.DIME-token;
         billsCoins.push(["DIME",token]);
     }else{
         change-=register.DIME;
         billsCoins.push(["DIME",register.DIME]);
     }
   }
  change=Math.round(change*100)/100;

   if(register.howMany(change,0.05)>0){
     token= register.howMany(change,0.05);
     token=token*0.05;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.NICKEL){
         change-=token;
         register.NICKEL=register.NICKEL-token;
         billsCoins.push(["NICKEL",token]);
     }else{
         change-=register.NICKEL;
         billsCoins.push(["NICKEL",register.NICKEL]);
     }
   }
  
   if(register.howMany(change,0.01)>0){
     token= register.howMany(change,0.01);
     token=token*0.01;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.PENNY){
         change-=token;
         register.PENNY=register.PENNY-token;
         billsCoins.push(["PENNY",token]);
     }else{
         change-=register.PENNY;
         billsCoins.push(["PENNY",register.PENNY]);
     }
   }
  
  if(change>0){
    return "Insufficient Funds"; 
  }else{
    return billsCoins;
  }
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
function checkCashRegister(price, cash, cid) {
  var change = cash-price,billsCoins=[],cidtotal=0,token;
  var register= {};
  // Here is your change, ma'am.
  for(var i=0;i<cid.length;i++){      //turns the cid array into an object
    register[cid[i][0]]=cid[i][1];
  }
  for(i=0;i<cid.length;i++){
    cidtotal+=cid[i][1];
  }
  
  register.howMany=function(amount,den){
    var number;
    if(den>=1){
      number= Math.trunc(amount/den);
      return number;
    }else{
      number= Math.floor(amount/den);
      return number.toFixed(2);
    }
    
  };  
  
  if(change>cidtotal){
    return "Insufficient Funds";
  }else if(change===cidtotal){
    return "Closed";
  }
 
   if(register.howMany(change,100)>0){
     token= register.howMany(change,100);
     token=token*100;
     if(token<=register["ONE HUNDRED"]){
         change-=token;
         register["ONE HUNDRED"]=register["ONE HUNDRED"]-token;
         billsCoins.push(["ONE HUNDRED",token]);
     }else{
         change-=register["ONE HUNDRED"];
         billsCoins.push(["ONE HUNDRED",register["ONE HUNDRED"]]);
     }
   }
   if(register.howMany(change,20)>0){
     token= register.howMany(change,20);
     token=token*20;
     if(token<=register.TWENTY){
         change-=token;
         register.TWENTY=register.TWENTY-token;
         billsCoins.push(["TWENTY",token]);
     }else{
         change-=register.TWENTY;
         billsCoins.push(["TWENTY",register.TWENTY]);
     }
   }
   if(register.howMany(change,10)>0){
     token= register.howMany(change,10);
     token=token*10;
     if(token<=register.TEN){
         change-=token;
         register.TEN=register.TEN-token;
         billsCoins.push(["TEN",token]);
     }else{
         change-=register.TEN;
         billsCoins.push(["TEN",register.TEN]);
     }
   }
   if(register.howMany(change,5)>0){
     token= register.howMany(change,5);
     token=token*5;
     if(token<=register.FIVE){
         change-=token;
         register.FIVE=register.FIVE-token;
         billsCoins.push(["FIVE",token]);
     }else{
         change-=register.FIVE;
         billsCoins.push(["FIVE",register.FIVE]);
     }
   }
  change=Math.round(change*100)/100;
  
   if(register.howMany(change,1)>0){
     token= register.howMany(change,1);
     if(token<=register.ONE){
         change-=token;
         register.ONE=register.ONE-token;
         billsCoins.push(["ONE",token]);
     }else{
         change-=register.ONE;
         billsCoins.push(["ONE",register.ONE]);
     }
   }
   if(register.howMany(change,0.25)>0){
     token= register.howMany(change,0.25);
     token=token*0.25;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.QUARTER){
         change-=token;
         register.QUARTER=register.QUARTER-token;
         billsCoins.push(["QUARTER",token]);
     }else{
         change-=register.QUARTER;
         billsCoins.push(["QUARTER",register.QUARTER]);
     }
   }
    
   if(register.howMany(change,0.10)>0){
     token= register.howMany(change,0.10);
     token=token*0.10;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.DIME){
         change-=token;
         register.DIME=register.DIME-token;
         billsCoins.push(["DIME",token]);
     }else{
         change-=register.DIME;
         billsCoins.push(["DIME",register.DIME]);
     }
   }
  change=Math.round(change*100)/100;

   if(register.howMany(change,0.05)>0){
     token= register.howMany(change,0.05);
     token=token*0.05;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.NICKEL){
         change-=token;
         register.NICKEL=register.NICKEL-token;
         billsCoins.push(["NICKEL",token]);
     }else{
         change-=register.NICKEL;
         billsCoins.push(["NICKEL",register.NICKEL]);
     }
   }
  
   if(register.howMany(change,0.01)>0){
     token= register.howMany(change,0.01);
     token=token*0.01;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.PENNY){
         change-=token;
         register.PENNY=register.PENNY-token;
         billsCoins.push(["PENNY",token]);
     }else{
         change-=register.PENNY;
         billsCoins.push(["PENNY",register.PENNY]);
     }
   }
  
  if(change>0){
    return "Insufficient Funds"; 
  }else{
    return billsCoins;
  }
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
function checkCashRegister(price, cash, cid) {
  var change = cash-price,billsCoins=[],cidtotal=0,token;
  var register= {};
  // Here is your change, ma'am.
  for(var i=0;i<cid.length;i++){      //turns the cid array into an object
    register[cid[i][0]]=cid[i][1];
  }
  for(i=0;i<cid.length;i++){
    cidtotal+=cid[i][1];
  }
  
  register.howMany=function(amount,den){
    var number;
    if(den>=1){
      number= Math.trunc(amount/den);
      return number;
    }else{
      number= Math.floor(amount/den);
      return number.toFixed(2);
    }
    
  };  
  
  if(change>cidtotal){
    return "Insufficient Funds";
  }else if(change===cidtotal){
    return "Closed";
  }
 
   if(register.howMany(change,100)>0){
     token= register.howMany(change,100);
     token=token*100;
     if(token<=register["ONE HUNDRED"]){
         change-=token;
         register["ONE HUNDRED"]=register["ONE HUNDRED"]-token;
         billsCoins.push(["ONE HUNDRED",token]);
     }else{
         change-=register["ONE HUNDRED"];
         billsCoins.push(["ONE HUNDRED",register["ONE HUNDRED"]]);
     }
   }
   if(register.howMany(change,20)>0){
     token= register.howMany(change,20);
     token=token*20;
     if(token<=register.TWENTY){
         change-=token;
         register.TWENTY=register.TWENTY-token;
         billsCoins.push(["TWENTY",token]);
     }else{
         change-=register.TWENTY;
         billsCoins.push(["TWENTY",register.TWENTY]);
     }
   }
   if(register.howMany(change,10)>0){
     token= register.howMany(change,10);
     token=token*10;
     if(token<=register.TEN){
         change-=token;
         register.TEN=register.TEN-token;
         billsCoins.push(["TEN",token]);
     }else{
         change-=register.TEN;
         billsCoins.push(["TEN",register.TEN]);
     }
   }
   if(register.howMany(change,5)>0){
     token= register.howMany(change,5);
     token=token*5;
     if(token<=register.FIVE){
         change-=token;
         register.FIVE=register.FIVE-token;
         billsCoins.push(["FIVE",token]);
     }else{
         change-=register.FIVE;
         billsCoins.push(["FIVE",register.FIVE]);
     }
   }
  change=Math.round(change*100)/100;
  
   if(register.howMany(change,1)>0){
     token= register.howMany(change,1);
     if(token<=register.ONE){
         change-=token;
         register.ONE=register.ONE-token;
         billsCoins.push(["ONE",token]);
     }else{
         change-=register.ONE;
         billsCoins.push(["ONE",register.ONE]);
     }
   }
   if(register.howMany(change,0.25)>0){
     token= register.howMany(change,0.25);
     token=token*0.25;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.QUARTER){
         change-=token;
         register.QUARTER=register.QUARTER-token;
         billsCoins.push(["QUARTER",token]);
     }else{
         change-=register.QUARTER;
         billsCoins.push(["QUARTER",register.QUARTER]);
     }
   }
    
   if(register.howMany(change,0.10)>0){
     token= register.howMany(change,0.10);
     token=token*0.10;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.DIME){
         change-=token;
         register.DIME=register.DIME-token;
         billsCoins.push(["DIME",token]);
     }else{
         change-=register.DIME;
         billsCoins.push(["DIME",register.DIME]);
     }
   }
  change=Math.round(change*100)/100;

   if(register.howMany(change,0.05)>0){
     token= register.howMany(change,0.05);
     token=token*0.05;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.NICKEL){
         change-=token;
         register.NICKEL=register.NICKEL-token;
         billsCoins.push(["NICKEL",token]);
     }else{
         change-=register.NICKEL;
         billsCoins.push(["NICKEL",register.NICKEL]);
     }
   }
  
   if(register.howMany(change,0.01)>0){
     token= register.howMany(change,0.01);
     token=token*0.01;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.PENNY){
         change-=token;
         register.PENNY=register.PENNY-token;
         billsCoins.push(["PENNY",token]);
     }else{
         change-=register.PENNY;
         billsCoins.push(["PENNY",register.PENNY]);
     }
   }
  
  if(change>0){
    return "Insufficient Funds"; 
  }else{
    return billsCoins;
  }
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
function checkCashRegister(price, cash, cid) {
  var change = cash-price,billsCoins=[],cidtotal=0,token;
  var register= {};
  // Here is your change, ma'am.
  for(var i=0;i<cid.length;i++){      //turns the cid array into an object
    register[cid[i][0]]=cid[i][1];
  }
  for(i=0;i<cid.length;i++){
    cidtotal+=cid[i][1];
  }
  
  register.howMany=function(amount,den){
    var number;
    if(den>=1){
      number= Math.trunc(amount/den);
      return number;
    }else{
      number= Math.floor(amount/den);
      return number.toFixed(2);
    }
    
  };  
  
  if(change>cidtotal){
    return "Insufficient Funds";
  }else if(change===cidtotal){
    return "Closed";
  }
 
   if(register.howMany(change,100)>0){
     token= register.howMany(change,100);
     token=token*100;
     if(token<=register["ONE HUNDRED"]){
         change-=token;
         register["ONE HUNDRED"]=register["ONE HUNDRED"]-token;
         billsCoins.push(["ONE HUNDRED",token]);
     }else{
         change-=register["ONE HUNDRED"];
         billsCoins.push(["ONE HUNDRED",register["ONE HUNDRED"]]);
     }
   }
   if(register.howMany(change,20)>0){
     token= register.howMany(change,20);
     token=token*20;
     if(token<=register.TWENTY){
         change-=token;
         register.TWENTY=register.TWENTY-token;
         billsCoins.push(["TWENTY",token]);
     }else{
         change-=register.TWENTY;
         billsCoins.push(["TWENTY",register.TWENTY]);
     }
   }
   if(register.howMany(change,10)>0){
     token= register.howMany(change,10);
     token=token*10;
     if(token<=register.TEN){
         change-=token;
         register.TEN=register.TEN-token;
         billsCoins.push(["TEN",token]);
     }else{
         change-=register.TEN;
         billsCoins.push(["TEN",register.TEN]);
     }
   }
   if(register.howMany(change,5)>0){
     token= register.howMany(change,5);
     token=token*5;
     if(token<=register.FIVE){
         change-=token;
         register.FIVE=register.FIVE-token;
         billsCoins.push(["FIVE",token]);
     }else{
         change-=register.FIVE;
         billsCoins.push(["FIVE",register.FIVE]);
     }
   }
  change=Math.round(change*100)/100;
  
   if(register.howMany(change,1)>0){
     token= register.howMany(change,1);
     if(token<=register.ONE){
         change-=token;
         register.ONE=register.ONE-token;
         billsCoins.push(["ONE",token]);
     }else{
         change-=register.ONE;
         billsCoins.push(["ONE",register.ONE]);
     }
   }
   if(register.howMany(change,0.25)>0){
     token= register.howMany(change,0.25);
     token=token*0.25;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.QUARTER){
         change-=token;
         register.QUARTER=register.QUARTER-token;
         billsCoins.push(["QUARTER",token]);
     }else{
         change-=register.QUARTER;
         billsCoins.push(["QUARTER",register.QUARTER]);
     }
   }
    
   if(register.howMany(change,0.10)>0){
     token= register.howMany(change,0.10);
     token=token*0.10;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.DIME){
         change-=token;
         register.DIME=register.DIME-token;
         billsCoins.push(["DIME",token]);
     }else{
         change-=register.DIME;
         billsCoins.push(["DIME",register.DIME]);
     }
   }
  change=Math.round(change*100)/100;

   if(register.howMany(change,0.05)>0){
     token= register.howMany(change,0.05);
     token=token*0.05;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.NICKEL){
         change-=token;
         register.NICKEL=register.NICKEL-token;
         billsCoins.push(["NICKEL",token]);
     }else{
         change-=register.NICKEL;
         billsCoins.push(["NICKEL",register.NICKEL]);
     }
   }
  
   if(register.howMany(change,0.01)>0){
     token= register.howMany(change,0.01);
     token=token*0.01;
     token=token.toFixed(2);
     token=Number(token);
     if(token<=register.PENNY){
         change-=token;
         register.PENNY=register.PENNY-token;
         billsCoins.push(["PENNY",token]);
     }else{
         change-=register.PENNY;
         billsCoins.push(["PENNY",register.PENNY]);
     }
   }
  
  if(change>0){
    return "Insufficient Funds"; 
  }else{
    return billsCoins;
  }
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
