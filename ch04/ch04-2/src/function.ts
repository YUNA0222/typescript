// 함수는 객체다 #1
let add = new Function('a','b','return a + b')
let result = add(1,2)
console.log(result) // 3

//자바스크립트에서 함수는 Function클래스의 인스턴스이다. 이는 add가 함수로 동작한다.
//원래라면 funtion add(a,b){return a+b}