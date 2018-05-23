function sumPrimes(num) {
  var primo=[];
  function isPrime(candidate){
            var flag = true;
            for(var i=2; i<=Math.ceil(candidate/2); i++)
            {
                if((candidate%i)==0)
                {
                    flag = false;
                    break;
                }
            }
            return flag;    
        }
  for(var i=2;i<=num;i++){
    if(isPrime(i)){
      primo.push(i);
    }
  }
  
  return primo.reduce(function(a,b){return a+b;});
}

sumPrimes(10);
