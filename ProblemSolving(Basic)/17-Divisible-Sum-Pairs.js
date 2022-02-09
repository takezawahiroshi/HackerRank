function divisibleSumPairs(n, k, ar) {
  var counter = 0;
	var newArray = ar.sort(function(a, b){return a - b});
	for (let i = 0; i < newArray.length; i++) {
			for(let j = i+1; j <= newArray.length; j++) {
					if(i < j && ((newArray[i] + newArray[j]) % k == 0) ) {
							counter++;
					}
			}
	}
	return counter;
}