/* 
- 문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

- 제한 조건
n은 길이 10,000이하인 자연수입니다.

- 입출력 예
n	return
3	"수박수"
4	"수박수박" 
*/

//내 풀이
function solution(n) {
    var answer = '';
    let str = '수박';
   
   if(n % 2 == 0){
       answer = str.repeat(parseInt(n / 2));
   }else{
       let oddNum = parseInt(n / 2);
       answer = str.repeat(oddNum) + '수';
   }
    return answer;
}

//다른 사람 풀이
const waterMelon = n => "수박".repeat(n).slice(0,n);


//참고하면 좋은 함수들
// let n = 5;
// str.repeat(n) === 'aaaaa' // str n번 반복.
// str.padStart(n, 'b') === 'bbbba' // str length가 n까지 앞부분을 'b'로 채움.
// str.padEnd(n, 'b') === 'abbbb' // str length가 n까지 뒷부분을 'b'로 채움.

// str.padStart(1, 'b') ===  'a' // n이 str lenth보다 작거나 같다면 동작x.