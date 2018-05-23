function chunkArrayInGroups(arr, size) {
  // Break it up.
 
  var matrix = [], i, k;

    for (i = 0, k = -1; i < arr.length; i++) {
        if (i % size === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(arr[i]);
    }
  
  
  return matrix;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
