let part1 = {name: 'jane'}, part2 = {age: 22}, part3 = {city: 'Seoul', country:'Kr'}
let merged = {...part1,  ...part2, ...part3}//1열을 모두 통합한 새로운 객체를 만듦
console.log(merged) 