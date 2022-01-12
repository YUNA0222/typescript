// type 키워드로 타입 별칭 만들기
type stringNumberfunc = (string, number) => void

let h: stringNumberfunc = function(a:string, b:number): void{}
let g: stringNumberfunc = function(c:string, d:number): void{}