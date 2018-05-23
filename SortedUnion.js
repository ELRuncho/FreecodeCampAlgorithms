function uniteUnique(arrs) {
  var big=arguments;
  var arr=[];
  
  for (var i=0;i<big.length;i++){
    for(var j=0;j<big[i].length;j++){
      arr.push(big[i][j]);
    }
  }
  
 var unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
