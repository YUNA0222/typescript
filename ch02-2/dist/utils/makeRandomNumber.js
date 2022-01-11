"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomNumber = void 0;
var MAX_AGE = 100;
function makeRandomNumber(max) {
    if (max === void 0) { max = MAX_AGE; }
    return Math.ceil((Math.random() * max));
}
exports.makeRandomNumber = makeRandomNumber;
//파일 만들기: touch 파일경로/파일명
//# sourceMappingURL=makeRandomNumber.js.map