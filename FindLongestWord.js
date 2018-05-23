function findLongestWord(str) {
  var newArr= str.split(' ');
  var i=0;
  var longest;
  var lg=0;
 newArr.sort(function(a,b){
  return a.length - b.length; 
  });
 return newArr[newArr.length-1].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
