var str = "String123";
var num = 3;
/* object */
var num2 = new Number(3);
var num3 = new Number(3);

/* typeof : tpye 확인 */
console.log('1', typeof str);
console.log('2', num);
console.log('3', num2);
console.log('4', num == num2); //true
console.log('5', num === num2); //fasle; 타입이 다르니까

console.log('6', typeof num);
console.log('7', typeof num2);

console.log('8', num2 == num3); //false


//generic : 배열의 타입 지정?
//generic 배열 변수 선언
let userList:Array<number> = new Array();

for(let i:number=0; i<5; i++) {
    addUserList(userList, i);
}

function addUserList(userList:Array<number>, num:number) {
    //배열 변수에 추가
    userList.push(num);
}

//출력
console.log(userList);

//일반 배열
let ta1 = new Array();
ta1.push(1);
ta1.push('1');
ta1.push(true);

//제너릭 Generic 배열
let ta2:Array<boolean> = new Array();
ta2.push(true);


//상수 타입 변수 선언 및 초기화
//초기화가 안될 경우 에러 발생
const con:number = 1;

//'|'을 사용하면 여러타입으로 변수를 선언할 수 있다.
//any보다는 명시적으로 사용할 타입들을 선언하는게 더 좋은 방법
let tt:number|string = 4;
console.log(typeof tt);
tt = "문자도 가능해?";
console.log(typeof tt);

let add = function(n1:number|string, n2:number|string):number|string {
    if(typeof n1 != "number") {
        return "n1 은 숫자가 아닙니다.";
    }
    if(typeof n2 != "number") {
        return "n2 은 숫자가 아닙니다.";
    }
    return n1+n2;
}

console.log(add(4, 3));


class Exam {
    public name:string;
}

let examList:Array<Exam> = new Array<Exam>();

let e:Exam = new Exam();
e.name = "e1";
examList.push(e);

//e 초기화
e = new Exam();
e.name = "e2";
examList.push(e);

console.log(examList);

//로또 실습
interface makeNumbers {

}

class Lotto implements makeNumbers{
    private numbers:Array<number>;

    constructor() {
        //메모리를 읽은 다음 초기화된다.
        this.numbers = new Array<number>();
        this.makeNumbers();
    }

    private makeNumbers():void {
        while(this.numbers.length < 6) {
            let num:number = Math.floor(Math.random()*20)+1;
            if(this.valiNumbers(num)) {
                continue;
            }
            this.numbers.push(num);
        }
    }
    
    private valiNumbers(num:number):boolean {
        return this.numbers.indexOf(num) != -1;
    }

    public getNumbers():Array<number> {
        return this.numbers;
    }
}

let lot:Lotto = new Lotto();
console.log(lot.getNumbers());

//배열!
let arrs1:number[] = [1, 2, 3];
let arrs2:makeNumbers[] = [new Lotto(), new Lotto(), new Lotto()];
let arrs3:Array<makeNumbers> = new Array<makeNumbers>();
arrs3.push(new Lotto());

for(let arr in arrs2) {
    console.log(arrs2[arr]);
}
//위 for문과 동일
for(let i:number=1, max:number=arrs2.length; i<max; i++) {
    console.log(arrs2[i]);
}

let mn:makeNumbers = new Lotto();
let lot1:Lotto = new Lotto();
mn = lot1; //makeNumbers가 Lotto보다 상위이기 때문에 가능함
