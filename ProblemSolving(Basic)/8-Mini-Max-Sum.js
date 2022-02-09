//5つの正の整数が与えられる。
//5つの整数のうち4つを合計することによって計算できる最小値と最大値を見つける
//次に、それぞれの最小値と最大値を、スペースで区切られた2つの整数の1行として出力します。

function miniMaxSum(arr) {
	var max = arr[0];
	var min = arr[0];
	var sum = 0;
	var sum1 = 0;
	var sum2 = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	
		if (max < arr[i]) {
			max = arr[i];
		}
		
		if(min > arr[i]) {
			min = arr[i];
		}
	}

	sum1 = sum - max;
	sum2 = sum - min;
	console.log(sum1, sum2);
}
