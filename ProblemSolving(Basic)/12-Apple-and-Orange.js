function countApplesAndOranges(s, t, a, b, apples, oranges) {
	{
	var apples_count = apples.filter(value => value + a >= s && value + a <= t).length;
	var oranges_count = oranges.filter(value => value + b >= s && value + b <= t).length;
	}
	console.log(apples_count);
	console.log(oranges_count);
}