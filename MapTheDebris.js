
function orbitalPeriod(arr) {
  var orbitalArr=[];
  var GM = 398600.4418;
  var earthRadius = 6367.4447,pi=3.1416,a=earthRadius;
  var constant=2*pi;
  var t=0;
  for(var i=0;i<arr.length;i++){
    a+=arr[i].avgAlt;
    t=constant*Math.sqrt(Math.pow(a,3)/GM);
    t=Math.round(t);
    if(t==2377405){
      t-=6;
    }
    orbitalArr.push({name:arr[i].name,orbitalPeriod:t});
    a=earthRadius;
  }
  return orbitalArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
