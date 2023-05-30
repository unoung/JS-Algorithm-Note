/*
탐욕법 알고리즘

1. 그리디 알고리즘 

- 현재 상황에서 당장 가장 좋아보이는 상황만을 선택하는 알고리즘
- 최적의 해를 구하기 위한 근사적인 방법으로 사용될 때가 많다.
- 매 상황에서 단순히 가장 큰 노드를 선택한다. 
- “근사 해”를 구하는 목적으로 사용되곤 한다.
- 일반적으로 탐욕알고리즘 유형에선, 최적의 해가 보장되는 문제가 출제된다.

2. 접근 방법
- 방법 고안하기 : 현재 상황에서 어떤 것을 선택할 지 알고리즘을 고안
- 정당성 확인하기: 자신이 고안한 알고리즘이 항상 최적의 해를 보장하는지

3.  거스름 돈 문제 (탐욕 알고리즘) 
*/

//11047

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let n = Number(input[0].split(" ")[0]);
// let k = Number(input[0].split(" ")[1]);

// let arr = [];

// for (let i = 1; i < n + 1; i++) {
//   arr.push(Number(input[i]));
// }

// let answer = 0;

// for (let i = n - 1; i >= 0; i--) {
//   answer += parseInt(k / arr[i]);

//   k = k % arr[i];
// }

// console.log(answer);

//11399

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let n = Number(input[0]);

// let arr = [];

// for (let i = 0; i < n; i++) {
//   arr.push(Number(input[1].split(" ")[i]));
// }

// arr.sort(function (a, b) {
//   return a - b;
// });

// let sum = 0;
// let answer = 0;
// for (let j = 0; j < n; j++) {
//   sum += arr[j];
//   answer += sum;
// }

// console.log(answer);

//2839

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let count = 0;
while (true) {
  if (n % 5 === 0) {
    console.log(n / 5 + count);
    break;
  }

  if (0 > n) {
    console.log(-1);
    break;
  }

  count++;
  n -= 3;
}
