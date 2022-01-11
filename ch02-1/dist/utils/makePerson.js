"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testmakePerson = exports.makePerson = void 0;
function makePerson(name, age) {
    return { name: name, age: age };
}
exports.makePerson = makePerson;
function testmakePerson() {
    console.log(makePerson("Jane", 22), makePerson("Jack", 33));
}
exports.testmakePerson = testmakePerson;
//# sourceMappingURL=makePerson.js.map