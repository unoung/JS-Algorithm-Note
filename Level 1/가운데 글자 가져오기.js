/* 
- 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

- 제한사항
s는 길이가 1 이상, 100이하인 스트링입니다.

- 입출력 예
s	        return
"abcde"	    "c"
"qwer"	    "we" 
*/

//내 풀이
function solution(s) {
    var answer = '';
    
    if(s.length % 2 == 0){
        let middle_num = s.length / 2;
        answer = s.substring(middle_num - 1,middle_num + 1);
    }else{
        let middle_num = parseInt(s.length / 2);
        answer  = s.charAt(middle_num);
    }
    return answer;
}

//다른 사람 풀이
function solution(s) {
    //Math.ceil() 올림 함수
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
