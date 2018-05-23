function convertHTML(str) {
  // &colon;&rpar;
  var repl;
  var entities=str;
  
  
  
  for(var i=0;i<str.length;i++){
      switch (str.charAt(i)){
        case '&':
          repl=/&/gi;
          entities=entities.replace(repl, '&amp;');
            break;
        case '<':
          repl=/</gi;
          entities=entities.replace(repl, '&lt;');
          break;
        case '>':
          repl=/>/gi;
          entities=entities.replace(repl, '&gt;');
          break;
        case '"':
          repl=/"/gi;
          entities=entities.replace(repl, '&quot;');
          break;
        case "'":
          repl=/'/gi;
          entities=entities.replace(repl, '&apos;');
          break;
      }
    
  }
  return entities;
}

convertHTML('Stuff in "quotation marks"');
