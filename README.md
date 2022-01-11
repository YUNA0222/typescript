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
 
ex)  import * as U from '../utils/makeRandomNumber'

age:number = U.makeRandomNumber()

export default키워드: 타입스크립트는 자바스크립트와 호환하기 위함. export default키워드는 한 모듈이 내보내는 기능 중 오직 하나만 붙일 수 있다. export default키워드가 붙은 기능은 import할 때 {}없이 사용할 수 있다.

## 02-3
"compilerOptions": {//tsc명령형식에서 옵션을 나타냄 
    "module": "commonjs", //동작대상 플랫폼이 웹인지 노드인지 구분해서 컴파일 한다.웹은:AMD 노드:commonjs

    "esModuleInterop": true,//오픈소스 라이브러리 중에는 웹에서 동작한다는 가정으로 만들어진 것이있음. 때문에 commonjs에서 동작하는 타임스크립트코드에 혼란을 일으킨다. 2-2의 chance도 amd방식이다. 따라서 true로 해야한다.
    
    "target": "es5",//트랜스파일할 대상 자바스크립트의 버전 설정
    
    "moduleResolution": "node", //모듈이 commonjs니까 node, 웹이라면 amd-classic
    
    "outDir": "dist",//baseUrl를 기준으로 하위 디스크의 이름, 빌드된 결과가 dist에 저장
    
    "baseUrl": ".",//js파일 저장하는 폴더 설정, tsc는 tsconfig.json파일이 있는 곳에서 실행> 따라서 .을 현재폴더를 의미하는 .을 사용
    
    "sourceMap": true,//sourceMap이 true이면 트랜스퍼일 폴더에도 .js말고도 .js.map이 만들어진다. 이 소스맵 파일은 변환된 코드가 스크립트코드의 어디에 해당하는지 알려준다. 주로 디버깅에 이용
    
    "downlevelIteration": true,//생성기할때 필요 , 반드시 true
    
    "noImplicitAny": false,//타입스크립트는 기본적으로 타입을 지정할 때 (a, b)로 주면 (a:any, b:any)로 된다, 이걸 경고로 알려주는 데 이 기능을 끄는 것
    
    "paths": {"*":["node_modules/*"]}//import문에서 from을 해석할 때 찾아야하는 디렉터리 설정, import문이 찾아야하는소스가 외부 패키지이면 node_moules이므로 키값에 node_modules/*포함
}