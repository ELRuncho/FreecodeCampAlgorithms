function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var choped=arr.slice(howMany,arr.length);
  return choped;
}

slasher([1, 2, 3], 2);
