//스택-큐

/* 
- 문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 
예를 들어
"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

- 제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

- 입출력 예
s	            answer
"()()"	        true
"(())()"	    true
")()("	        false
"(()("	        false 
*/

//풀이
// '(' 열린 괄호를 만나면 stack 에 이를 추가하고, 닫힌 괄호를 만나면 stack에서 제거한다.
function solution(s){
    let openBracket = 0

    for (const char of s) {
        // 열린 괄호를 만났다면 수량을 1개 추가하고 다음 반복을 진행.
        if (char == '(') {
            openBracket += 1;
            continue
        }
        // 만약 열린 괄호가 없는데 닫힌 괄호가 들어왔다면 false.
        if (!openBracket) {
            return false
        }
        openBracket -= 1;
    }
    // 괄호가 완전히 열리고 닫혀 stack 내부가 비었다면 true, 아니라면 false
    return openBracket === 0;
}

