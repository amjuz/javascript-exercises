const sumAll = function(first,last) {
 let sum = 0;
if(typeof first != 'number' || typeof last != 'number' || first < 0 || last <0 ){
  return "ERROR";
}
  
 else {
   
  if (first < last){
    for(let i=first;i<= last;i++){
      sum += i;
    } return sum;
  }

  else if (first > last){
    for(let i = first;i>=last;i--){
      sum += i;
    }return sum;
  }
 }  
};

// Do not edit below this line
module.exports = sumAll;
