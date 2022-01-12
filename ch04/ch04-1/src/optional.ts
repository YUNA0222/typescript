//undefined 관련 주의 사항 #2
interface IAgeable{
    age?: number
}

function getAge(o: IAgeable){
    return o != undefined  && o.age ? o.age : 0
}

console.log(getAge(undefined)) // 0
console.log(getAge(null)) // 0
console.log(getAge({age: 32})) // 32