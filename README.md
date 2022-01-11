# Do it! 타입스크립트 프로그래밍
타입스크립트 개발은 nodejs project를 만들고 개발언어를 타입스크립트로 설정한다. 

## 02-1
1. 폴더 생성 (mkdir 폴더명) > (cd 폴더명)으로 이동 후
2. pakage.json 파일 생성(npm init --y)
- pakage.json: nodejs가 관리하는 패키지 관리파일, 프로젝트 정보와 관련패키지가 기록됨
- @types/가 붙는 타입라이브러리들은 항상 index.d.ts라는 파일이름을 가지고 있음.
- 타입스크립트 컴파일러는 이 파일의 내용을 바탕으로 chance나 ramda와 같은 라이브러리가 제공하는 함수들이 올바른지 검증한다.
- 타입스크립트는 웹브라우저나 노드제이에스 가 제공하는 기본 타입들을 알지 못하므로 Promise와 같은 타입을 이용하려면 @types/node 패키지를 설치해야한다(npm i -D @types/node)
- 다른 사람들에게 공유할 때 모듈 디렉터리의 용량이 너무 커서 못 보내면 pakage.json파일이 있는 곳에서 npm i 입력해서 모듈 설치
3. tsconfig.json 파일 만들기 (tsc --init)
- tsconfig.json: 타입스크립트 컴파일러의 설정파일
4. src폴더와 소스파일 만들기(mkdir -p src/utils, touch src/index.ts)
5. pakage.json에 dev와 bulid 추가
- npm run dev, npm run bulid

## 02-2
타입스크립트에서는 index.ts와 같은 소스파일을 모듈이라 함.
코드관리와 유지보수를 편리하게 하기위해 모듈마다 고유한 기능을 구현하여 분할하는 것을 모듈화라한다.
> 이때 사용하는 것이 import와 export

export키워드는 interface, class, type, let, const 키워드 앞에도 붙일 수 있다.

> import { 심벌 목록 } form '파일의 상대 경로'

> import * as 심벌 form '파일 상대 경로'
 
```typescript
import * as U from '../utils/makeRandomNumber'
age:number = U.makeRandomNumber()
```

export default키워드: 타입스크립트는 자바스크립트와 호환하기 위함. export default키워드는 한 모듈이 내보내는 기능 중 오직 하나만 붙일 수 있다. export default키워드가 붙은 기능은 import할 때 {}없이 사용할 수 있다.

## 02-3
```typescript
"compilerOptions": {//tsc명령형식에서 옵션을 나타냄 
    "module": "commonjs", //동작대상 플랫폼이 웹인지 노드인지 구분해서 컴파일 한다.웹은:AMD 노드:commonjs

    "esModuleInterop": true,//오픈소스 라이브러리 중에는 웹에서 동작한다는 가정으로 만들어진 것이있음. 때문에 commonjs에서 동작하는 타임스크립트코드에 혼란을 일으킨다. 2-2의 chance도 amd방식이다. 따라서 true로 해야한다.
    
    "target": "es5",//트랜스파일할 대상 자바스크립트의 버전 설정
    
    "moduleResolution": "node", //모듈이 commonjs니까 node, 웹이라면 amd-classic
    
    "outDir": "dist",//baseUrl를 기준으로 하위 디스크의 이름, 빌드된 결과가 dist에 저장
    
    "baseUrl": ".",//js파일 저장하는 폴더 설정, tsc는 tsconfig.json파일이 있는 곳에서 실행> 따라서 .을 현재폴더를 의미하는 .을 사용
    
    "sourceMap": true,//sourceMap이 true이면 트랜스퍼일 폴더에도 .js말고도 .js.map이 만들어진다. 이 소스맵 파일은 변환된 코드가 스크립트코드의 어디에 해당하는지 알려준다. 주로 디버깅에 이용
    
    "downlevelIteration": true,//생성기 할 때 필요(?), 반드시 true
    
    "noImplicitAny": false,//타입스크립트는 기본적으로 타입을 지정할 때 (a, b)로 주면 (a:any, b:any)로 된다, 이걸 경고로 알려주는 데 이 기능을 끄는 것
    
    "paths": {"*":["node_modules/*"]}//import문에서 from을 해석할 때 찾아야하는 디렉터리 설정, import문이 찾아야하는소스가 외부 패키지이면 node_moules이므로 키값에 node_modules/*포함
}
```
## 03-1 타입스크립트 변수 선언문
### let과 const 키워드
let: 코드에서 값이 수시로 변경 가능
> let 변수 이름 [= 초깃값]

const: const로 변수를 선언할 때는 반드시 초깃값을 명시해야한다. const 변수는 코드에서 변숫값이 절대로 변하지 않는 다는 것을 의미
> const 변수 이름 = 초깃값

### 타입 주석
> let 변수 이름: 타입 [= 초깃값]

> const 변수 이름: 타입 = 초깃값

let n : number = 1
let으로 선언한 변숫값은 타입 주석으로 명시한 타입에 해당하는 값으로만 바꿀 수 있다. n='a' < 얘는 타입 불일치 오류 발생

### 타입 추론
타입주석을 생략할 수도 있다. let n = 1
즉, 변수 선언문에는 타입 주석을 명시하지 않았지만, 컴파일러가 초깃값에 따라 타입을 추론하므로 각 변수는 초깃값에 해당하는 타입으로 지정된다. 따라서 이후에는 각 변수에는 해당 타입의 값만 저장 가능하다.

### any 타입
a는 타입이 any이므로 값의 타입과 무관하게 어떤 종류의 값도 저장 할 수 있다.
```typescript
    let a: any = 0
    a = 'hello'
    a = true
    a = {}
```
### undefined 타입
자바스크립트에서 undefined는 값이다. 변수를 초기화 하지 않으면 undefined값을 가진다. 그러나 타입스크립트에서는 undefined는 타입이기도 하고 값이기도하다.
```typescript
    let u: undefined = sundefined

    u = 1 // type undefined 오류 발생
```

첫 번째 변수 u는 undefined타입이므로 undefined값만 가질 수 있고, 두 번째는 undefined의 상위 타입인 number타입 1을 저장하려고 했으므로 오류가 발생한다.

타입의 상속관계로 보면 any는 모든 타입의 루트타입이고, undefined는 모든 타입의 최하위 타입이다.

### 템플릿 문자열
변수에 담긴 값을 조합해 문자열을 만들 수 있게 한다.
> `${변수 이름}` //역따옴표로 문자열을 감싸고 변수를 ${}가호로 감싸는 형태
```typescript
    let count = 10, message = 'your count'
    let result = `${message} is ${count}`
    console.log(result) //your count is 10
```

## 03-2 객체와 인터페이스
object(객체)타입은 입터페이스 클래스의 상위타입이다. object로 선언된 변수는 number, string, boolean 타입의 값을 가질 수 없다
```typescript
    let o: object = {name: 'Jack', age:32}
    o = {first: 1, second: 2} //오류 발생
```
이 코드에서 object 타입은 마치 객체를 대상을 하는 any타입처럼 동작한다. 타입스크립트의 인터페이스 구문은 이렇게 동작하지 않게 하기 위해 고안되었다. 변수 o에는 항상 name과 age 속성으로 구성된 객체만 가질 수 있게 해서 두 번째 줄은 오류 발생
### 인터페이스 선언문
interface: 객체의 타입을 정의할 수 있게한다. 
> interface 인터페이스 이름{
    속성이름[?]: 속성타입[,...]
}
```typescript
    interface IPerson{
    name: string,
    age: number
}
```
IPerson의 목적은 name과 age라는 이름의 속성이 둘 다 있는 객체만 유효하도록 객체의 타입범위를 좁히는 데에 있다. 따라서 다음 코드는 오류난다.
```typescript
    interface IPerson{
    name: string,
    age: number
}

let good: IPerson= {name: 'Jack', age: 32}

let bad1: IPerson = {name: 'Jack'} //age속성이 없으므로 오류
let bad2: IPerson = {age: 32} //name속성이 없으므로 오류
let bad3: IPerson = {} //name속성과 age속성이 없으므로 오류
let bad4: IPerson = {name: 'Jack', age: 32, etc: true} //etc속성이 있어서 오류
```
### 선택 속성 구문
어떤 속성은 없어도 됨. 속성 이름 뒤에 물음표 기호를 붙여서 만든다.
```typescript
    interface IPerson2{
    name: string,
    age: number,
    etc?: boolean
}

let good1: IPerson2= {name: 'Jack', age: 32}
let good2: IPerson2 = {name: 'Jack', age: 32, etc: true}
```
### 익명 인터페이스


## 03-3 객체와 클래스
