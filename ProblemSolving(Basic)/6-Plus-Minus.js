//配列にプラス、マイナス、ゼロが入っている。それぞれの割合を計算する。
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    //正か負かを表す
    let check = Math.sign(arr[i]);

    if (check === 1) {
      positive += 1;
    } else if (check === -1) {
      negative += 1;
    } else {
      zero += 1;
    }
  }

  const rPositive = (positive / n).toFixed(n);
  const rNegative = (negative / n).toFixed(n);
  const rZero = (zero / n).toFixed(n);
  return console.log(rPositive + '\n' + rNegative + '\n' + rZero);
}