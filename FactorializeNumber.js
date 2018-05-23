
function factorialize(num) {
  var i;
  var factor=1;
  for (i=2;i<=num;i++){
    factor=factor*i;
  }
  
  return factor;
}

factorialize(5);
