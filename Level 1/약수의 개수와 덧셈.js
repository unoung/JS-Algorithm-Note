/* 
- 문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

- 제한사항
1 ≤ left ≤ right ≤ 1,000

- 입출력 예
left	    right	    result
13	        17	        43
24	        27	        52

- 입출력 예 설명
입출력 예 #1
다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
수	    약수	            약수의 개수
13	    1, 13	            2
14	    1, 2, 7, 14	        4
15	    1, 3, 5, 15	        4
16	    1, 2, 4, 8, 16	    5
17	    1, 17	            2

따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.
*/

//내 풀이
function solution(left, right) {
    var answer = 0;
    var numArr = [];
    
    for(let i = left; i <= right; i ++){
        for (let j = 1; j <= i; j++){
            let remainder = i % j;
            if(remainder == 0){
                numArr.push(j);
            }
        }
        
        if(numArr.length % 2 == 0){
            answer += numArr[numArr.length - 1];
        }else{
            answer -= numArr[numArr.length - 1];
        }
        numArr.length = 0;
    }
    

    return answer;
}

// 다른 사람 풀이 1
function solution(left, right) {
    let answer = 0;
  
    for (let i = left; i <= right; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
        //카운트를 사용해서 나눴을 때 나머지가 0이면 카운트를 증가시켜준다
        if (i % j === 0) count++;
      }
      // 그다음 카운트가 홀수이면 빼주고 아니면 더해준다.. 깔끔하다 코드
      if (count % 2) answer -= i;
      else answer += i;
    }
  
    return answer;
}

//다른 사람 풀이 2
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        
        //Number.isInteger(value) : value 값이 정수인지 아닌지 반환해준다.
        if (Number.isInteger(Math.sqrt(i))) {
            //제곱근이 정수면 약수의 개수가 홀수다..대박
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
