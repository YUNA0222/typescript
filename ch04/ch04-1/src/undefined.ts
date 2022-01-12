//undefined 관련 주의 사항 #1
interface INameable{
    name: string
}

function getname(o: INameable){
    return o != undefined ? o.name : 'unknown name'
}

let n = getname(undefined)
console.log(n) // unknown name
console.log(getname({name: 'Jack'})) // Jack