function getNoRepPerms(array,start,output){
  var length=2,count=0;
  if(start>=array.length){
    var arr=array.slice(0);
    output.push(arr.join(''));
  }else {
    var i;
    for(i=start;i<array.length;i++){
      swap(array,start,i);
      getNoRepPerms(array,start+1,output);
      swap(array,start,i);
    }
  }
  return output;
}
function getAllPosiblePerms(array,output){
  return getNoRepPerms(array,0,output);
}
function swap(array,from,to){
  var tmp=array[from];
  array[from]=array[to];
  array[to]=tmp;
}

function permAlone(str) {
  //permutar evaluar agregar a arreglo o acumulador
  var n=0, array=str.split(''),output=[],noRepeats=0;
  
  if(str==''){
    return 0;
  }else if(str.length===1){
    return 1;
  }else{
    getAllPosiblePerms(array,output);
    for(var i=0;i<output.length;i++){
      for(var j=0;j<output[i].length;j++){
        var char=output[i].charAt(j);
        if(char==output[i].charAt(j+1)){
          n++;
        }
      }
      if(n===0){
        noRepeats++;
      }
      n=0;
    }
    return noRepeats;
  }
  
}

permAlone('aab');
