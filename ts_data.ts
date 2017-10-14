let n1:number = 3;
let n2:number = 5;

let s1:string = "String";
let s2:string = "test";

let numArr:Array<number> = [3,5,6];

console.log(n1);
console.log(numArr);

let tp:[string, number];
tp = ['1', 2];

let anyTest: any = 'any';
anyTest = 3;
anyTest = true;
anyTest = new Number(3);

let anyArr: any[] = [1, 2, 3];

function setUser():string {
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

function testFunc(str:string, num:number):void {
    console.log("str = " + str);
    console.log("num = " + num);
}

testFunc('문자열', 330);

function throwError(): never {
    throw new Error('nonono');
}

interface testIter {
    str:string,
    num:number;
}

let AjaxUtit = function(ti:testIter) {
    this.print = function():void{
        console.log(ti.str);
        console.log(ti.num);
    }
}

var test1 = {str:'홍길동', num: 31};
var au = new AjaxUtit(test1);
au.print();

class Car {
    carName: string;
    constructor(public pCarName:string) {
        this.carName = pCarName;
    }
}

let hyundai = new Car('sonata');
let pStr:string = 'hyundai 자동차 중 제 차는 : ';
pStr += hyundai.carName;
console.log(pStr);