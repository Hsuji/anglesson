/* 숫자타입 변수 선언 */
let n1:number = 3;
let n2:number = 5;

/* 문자타입 변수 선언 */
let s1:string = "String";
let s2:string = "test";

/* 배열타입으로 변수 선언 */
let numArr:Array<number> = [3,5,6];

/* 출력 */
console.log(n1);
console.log(numArr);


let tp:[string, number];
tp = ['1', 2];

/* any: 어떤 타입도 가능 */
let anyTest: any = 'any';
anyTest = 3;
anyTest = true;
anyTest = new Number(3);

let anyArr: any[] = [1, 2, 3];

/* 리턴형이 문자인 함수 */
function setUser():string {
    return "test";
}


function test() {
    return 'abc';
}
/* strTest라는 변수에는 test함수의 리턴값이 할당된다. */
var strTest = test();

/* 인덱스가 1인 b 출력 */
console.log(strTest.charAt(1));
/* 길이(3) 출력 */
console.log(strTest.length);
/* 인덱스가 1인 값부터(bc) 출력 */
console.log(strTest.substr(1));
/* 앞의 내용들이 저장되는 것은 아님 */
console.log(strTest);


function testFunc(str:string, num:number):void {
    console.log("str = " + str);
    console.log("num = " + num);
}
testFunc('문자열', 330);


/* 자바스크립트의 예외처리 */
function throwError(): never {
    throw new Error('nonono');
}


/* 인터페이스 선언 */
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

var test1 = {str:'홍길동', num: 35};
var au = new AjaxUtit(test1);
au.print();

/* 클래스 선언 */
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