// 일등 함수: 함수와 변수를 구분하지 않음

let f = function(a,b){return a+b}
f = function(a,b){return a-b}

//f는 변수이므로 a-b형태의 함수 표현식을 사용할 수 있다.