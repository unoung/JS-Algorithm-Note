// BFS 메서드 정의
function bfs(graph, start, visited) {
  queue = new Queue();
  queue.enqueue(start);
  //현재 노드를 방문 처리
  visited[start] = true;
  //큐가 빌 때까지 반복
  while (queue.getLength() != 0) {
    //큐에서 하나의 원소 뽑아 출력하기
    v = queue.dequeue();
    console.log(v);
    //아직 방문하지 않은 인접한 원소들을 큐에 삽입
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
}

// 각 노드가 연결된 정보를 표현

graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

// 각 노드가 방문된 정보를 표현

visited = Array(9).fill(false);

//정의된 bfs 함수 호출
bfs(graph, 1, visited);

// 백준 1697- 숨바꼭질

let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");
const MAX = 100001;
let [n, k] = input[0].split(" ").map(Number); // 초기 위치(N)와 동생의 위치(K)
let visited = Array(MAX).fill(0); // 각 위치까지의 최단 시간

function bfs() {
  let queue = []; // Queue로 사용할 배열
  queue.push(n);

  while (queue.length !== 0) {
    let cur = queue.shift();

    if (cur === k) {
      return visited[cur];
    }

    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      if (nxt < 0 || nxt >= MAX) continue;

      if (visited[nxt] === 0) {
        visited[nxt] = visited[cur] + 1;
        queue.push(nxt);
      }
    }
  }
}

console.log(bfs());
