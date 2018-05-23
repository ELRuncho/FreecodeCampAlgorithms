// noprotect
function dropElements(arr, func) {
  // Drop them elements.
  var drop = arr.length;
  for (var i = 0; i < drop; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n >5; });
