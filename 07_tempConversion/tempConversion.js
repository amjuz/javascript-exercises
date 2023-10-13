const convertToCelsius = function(F) {
	let C = ((F - 32)*5)/9;
	
	if (Math.floor(C*100) == C * 100){
	return C
	}
	
	else {
	return parseFloat(C.toFixed(1));
	}
};

const convertToFahrenheit = function(C) {
	let F = ((C*9)/5)+32;
	if (Math.floor(F*100) == F *100){
	return F;
	}
	else {
	return parseFloat(F.toFixed(1));
	}
	return y;
	
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
