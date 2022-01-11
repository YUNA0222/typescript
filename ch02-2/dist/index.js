"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = __importDefault(require("./person/Person"));
var chance_1 = __importDefault(require("chance")); //기능1개만 제공
var R = __importStar(require("ramda")); //기능 여러개 제공하므로 as 사용
var chance = new chance_1.default();
var persons = R.range(0, 2)
    .map(function (n) { return new Person_1.default(chance.name(), chance.age()); });
console.log(persons);
// const testMakePerson = (): void => {
//     let jane: IPerson = makePerson('Jane')
//     let jack: IPerson = makePerson('Jack')
//     console.log(jane, jack)
// }
// testMakePerson()
//외부패키지 사용할 때 import문
//chance 패키지는 가짜 데이터 만들어줌
//ramda는 함수형 유틸리티 패키지
//# sourceMappingURL=index.js.map