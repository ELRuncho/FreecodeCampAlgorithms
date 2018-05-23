function sym(args) {
  var  result=[];
  var comp=Array.prototype.slice.call(arguments,0);
  
  function usingReduce(){
  
  result=comp.reduce(function(acum,current){
      var test=[];
      acum.filter(function(item){
        if(!current.includes(item)){
          test.push(item);
        }
      });
      current.filter(function(item){
        if(!acum.includes(item)){
          test.push(item);
        }
      });
      return test;  
    });
  }

  usingReduce();
  result=result.filter(function(item,pos){
    return result.indexOf(item)==pos;
  });
  return result;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
