const removeFromArray = function(array , ...pop) {
	                      
	                        
	  for(let i = 0; i <= pop.length ; i++){
            for(let j = 0;j <= array.length ; j++){ 
             if(array[j]=== pop[i]){
                 array.splice(j,1);
             }    
            }
           }
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
