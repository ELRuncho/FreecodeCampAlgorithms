
function pairwise(arr, arg) {
  var sum=0;
  var found={};
  var results = arr.slice();
 
  
    /*for(var i in arr) {
        if (found[arg - i] === true) {
            // pair found
            results.push(
                 arr.indexOf(Number(i)),
                 arr.indexOf(arg - i)
            );
          arr.splice(arr.indexOf(Number(i)),1,NaN);
          arr.splice(arr.indexOf(arg-i),1,NaN);
        }

        found[i] = true;
    }*/
    return results.reduce(function(acum,current,index){
               var completeMe=arg-current,total=0;
               if(results.indexOf(completeMe)!=-1&&results.indexOf(completeMe)!=index){ 
                    total=index+results.indexOf(completeMe);
                    results.splice(index,1,NaN);
                    results.splice(results.indexOf(completeMe),1,NaN);
                    return acum+total;
                }
                return acum;
              },0);

   
      
  
}

pairwise([1, 4, 2, 3, 0, 5], 7);

