function sumFibs(num) {
  var a=1, b=0,res=0;
  while(a<=num){
    if(a%2!==0){
      res+=a;
    }
    a+=b;
    b=a-b;
  }
  return res;
}

sumFibs(1000);
