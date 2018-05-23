function truncateString(str, num) {
  // Clear out that junk in your trunk
  var trunk;
  if(num<=3){
    trunk= str.slice(0,num);
    return trunk+'...';
  } 
  
  if(num>=str.length){
    trunk=str;
    return trunk;
  }else if(3<num<str.length){
    trunk=str.slice(0,num-3);
    return trunk+'...';
  }
  
  
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length );
