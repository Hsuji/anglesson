var n1 = 3;
var n2 = 5;
var s1 = "String";
var s2 = "test";
var numArr = [3, 5, 6];
console.log(n1);
console.log(numArr);
var tp;
tp = ['1', 2];
var anyTest = 'any';
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
var anyArr = [1, 2, 3];
function setUser() {
    return "test";
}
function test() {
    return 'abc';
}
var strTest = test();
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
console.log(strTest);
function testFunc(str, num) {
    console.log("str = " + str);
    console.log("num = " + num);
}
testFunc('문자열', 330);
function throwError() {
    throw new Error('nonono');
}
var AjaxUtit = function (ti) {
    this.print = function () {
        console.log(ti.str);
        console.log(ti.num);
    };
};
var test1 = { str: '홍길동', num: 31 };
var au = new AjaxUtit(test1);
au.print();
var Car = /** @class */ (function () {
    function Car(pCarName) {
        this.pCarName = pCarName;
        this.carName = pCarName;
    }
    return Car;
}());
var hyundai = new Car('sonata');
var pStr = 'hyundai 자동차 중 제 차는 : ';
pStr += hyundai.carName;
console.log(pStr);
//# sourceMappingURL=ts_data.js.map