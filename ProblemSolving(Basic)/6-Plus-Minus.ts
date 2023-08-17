//整数の配列が与えられたとき、その要素が正、負、ゼロである比率を計算しなさい。
//それぞれの比率を小数点以下6桁までの数値として改行しなさい。
//注意：この課題は精度の問題を含んでいます。テスト・ケースは小数点以下6桁で表示されるが、絶対誤差は6桁まで許容される。
function plusMinus(arr: number[]): void {
  const DECIMAL_PLACES: number = 6;
  let positive: number = 0;
  let negative: number = 0;
  let zero: number = 0;
  const n: number = arr.length;

  for (let i = 0; i < n; i++) {
    let check: number = Math.sign(arr[i]);

    if (check === 1) {
      positive += 1;
    } else if (check === -1) {
      negative += 1;
    } else {
      zero += 1;
    }
  }

  const rPositive: string = (positive / n).toFixed(DECIMAL_PLACES);
  const rNegative: string = (negative / n).toFixed(DECIMAL_PLACES);
  const rZero: string = (zero / n).toFixed(DECIMAL_PLACES);

  console.log(rPositive + '\n' + rNegative + '\n' + rZero);
}
