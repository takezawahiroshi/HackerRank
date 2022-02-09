//配列で与えられた数の中で最も大きい数はいくつあるか
function birthdayCakeCandles(candles) {
	let max = candles[0];
	let counter = 0;

	//maxを求める
	for(let i = 0; i < candles.length; i++) {
		
		if(max < candles[i]) {
				max = candles[i];
		} 
	} 

	//maxと同じ数をカウントする
	for(let j = 0; j < candles.length; j++) { 
		if (max === candles[j]) {
				counter++;
		}
	}
  return counter;
}