//配列の数字を全て足す
function aVeryBigSum(ar) {
	let sum = 0;
	for (let i = 0; i < ar.length; i++) {
		sum = sum + ar[i];
	}
	return sum;
}