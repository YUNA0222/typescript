//import {IPerson, makePerson} from './person/Person'
import IPerson from "./person/IPerson"
import Person, { makePerson } from "./person/Person"
import Chance from "chance"//기능1개만 제공
import * as R from "ramda"//기능 여러개 제공하므로 as 사용

const chance = new Chance()
let persons: IPerson[] = R.range(0,2)
    .map((n: number)=> new Person(chance.name(), chance.age()))
console.log(persons)

// const testMakePerson = (): void => {
//     let jane: IPerson = makePerson('Jane')
//     let jack: IPerson = makePerson('Jack')
//     console.log(jane, jack)
// }

// testMakePerson()

//외부패키지 사용할 때 import문
//chance 패키지는 가짜 데이터 만들어줌
//ramda는 함수형 유틸리티 패키지