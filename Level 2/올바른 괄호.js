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

//풀이 2
function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}


/* 
return stack.length === 0;은 스택이 비어있는지를 확인하여 올바른 괄호인지를 판별하는 부분입니다.
만약 올바른 괄호라면, 모든 '('는 짝지어서 스택에서 제거되어 최종적으로 스택이 비어있게 됩니다. 
따라서 stack.length === 0이 참이 되어야 합니다. 이 경우에는 true를 반환합니다.
하지만 올바르지 않은 괄호라면, 여는 괄호인 '('와 닫는 괄호인 ')'의 개수가 맞지 않거나, 올바른 짝지어진 괄호가 아니기 때문에 일부 '('가 스택에 남아있을 것입니다. 
이 경우에는 stack.length === 0이 거짓이 되어야 합니다. 따라서 false를 반환합니다.

즉, return stack.length === 0;는 스택이 비어있는지를 확인하여 올바른 괄호인지를 판별하는 조건문입니다.
스택이 비어있다면 true를 반환하고, 그렇지 않다면 false를 반환합니다.
*/