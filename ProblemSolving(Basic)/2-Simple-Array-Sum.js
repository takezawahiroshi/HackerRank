//配列の中身を足し算する
function simpleArraySum(ar) {
	let sum = 0;
	for(let i = 0; i < ar.length; i++){
		sum += ar[i];
	}
	return sum;
}