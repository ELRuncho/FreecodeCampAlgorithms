
function whatIsInAName(collection, source) {
  // What's in a name?

  var comp=Object.keys(source);
  // Only change code below this line
    
  return collection.filter(function (obj){
    return comp.every(function(key){
      return obj.hasOwnProperty(key)&&obj[key]===source[key];
    });
  });
  // Only change code above this line
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
