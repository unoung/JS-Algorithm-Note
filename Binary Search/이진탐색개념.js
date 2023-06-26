// 각 단계마다 탐색범위를 2로 나누는 것으로 이해 할 수 있다.
// 이상적인 경우 매 단계마다 범위가 반으로 감소하므로, 로그복잡도를 가진다.

/*
- 이진 탐색 사례
1. 매우 넓은(억 단위 이상) 탐색 범위에서 최적의 해를 찾아야 하는 경우
2. 데이터를 정렬한 뒤 다수의 쿼리를 날려야 하는 경우
*/

//이진탐색 소스코드 구현(반복문)
function binarySearch(arr,target,start,end){
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        //찾은 경우 중간점 인덱스 반환
        if (arr[mid] == target) return mid;
        //중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
        else if (arr[mid] > target) end = mid - 1;
        //중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
        else start = mid + 1;
    }
    return -1;
}


//정렬된 배열에서 특정 원소의 개수 구하기
/*
[값이 특정 범위에 속하는 원소의 개수 구하기]
1. 코테에서 정렬된 배열에서 값이 특정 범위에 해당하는 원소의 개수를 계산하는 것을 요구하는 경우가 있다.
2. 이러한 문제를 해결하기 위해 lowerBound(), upperBound() 함수를 사용할 수 있다.

- lowerBound(arr , x): 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 가장 왼쪽 인덱스를 반환
- upperBound(arr , x): 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 가장 오른쪽 인덱스를 반환
*/

function lowerBound(arr, target, start, end){
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid; //최대한 왼쪽으로 이동
        else start = mid + 1;
    }
    return end;
}

function upperBound(arr, target, start, end){
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] > target) end = mid; //최대한 오른쪽으로 이동
        else start = mid + 1;
    }
    return end;
}

