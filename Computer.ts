//enum: 열거형 
enum Computer {Desktop, Laptop, Netbook};

let cp:Computer = Computer.Laptop;
console.log(cp);

//any : 어떤 데이터타입도 가능함
let cp2:any;
cp2 = "aaa";
cp2 = 123;
cp2 = true;

class EE {
    name:string = "suji";
    pc: Computer;

    constructor(pc:Computer) {
        this.pc = pc;
    }

    printInf():void {
        console.log(`${this.name}님이 가지고 계신 PC는 ${this.pc} 입니다.`);
        
    }
}
let ee:EE = new EE(Computer.Laptop);
ee.printInf();

let str1: string = "str";
let str2: string = "str";
let str3: String = new String("str");
let str4: String = new String("str");

//자바스크립트에는 equals가 없어서 prototype으로 강제적으로 만들어줌
String.prototype.equals = function(str) {
    if(typeof str == "object") {
        //값을 비교
        //오브젝트를 디폴트로 상속받기 때문에 toString()을 호출할 수 있음
        //str3.equals(str4)에서 str3은 this.toString()의 값, str4는 str.toString()의 값
        return str.toString() == this.toString();
    }
}

console.log("str1==str2 : "+ (str1 == str2));
console.log("str1==str3 : "+ (str1 == str3)); 
console.log("str4==str3 : "+ (str4 == str3));//(==JAVA) 객체 비교는 값의 비교가 아니라 메모리 주소 비교?
console.log("str1===str2 : "+ (str1 === str2));
console.log("str1===str3 : "+ (str1 === str3));
console.log("str4===str3 : "+ (str4 === str3));
console.log("str3 equals str3 : "+ (str3.equals(str4));
console.log("str3 toString equals str3 : "+ (str3.toString() == str4.toString()));
console.log(str4.toString());
console.log(str3.toString());



function examReturn(): string {
    console.log("examReturn함수 호출");
    return "examReturn함수 호출";
}

function examVoid(): void {
    console.log("examVoid함수 호출");
}

let rt:string;
rt = examReturn();
console.log("1 "+rt);
examVoid();
