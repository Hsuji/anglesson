interface Animal {
    // ? : 선언해도 되고 안해도 된다.
    name?: string;
    age?: number;
    height?: number;
    printInfo():void;
}

//start class cat
//인터페이스 구현
class Cat implements Animal {
    name: string;
    age: number;
    height: number;
    
    //생성자: 호출할때 생성자 파라메터를 전달해줘야한다.
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    
    printInfo():void {
        console.log(`이름 : ${this.name}`);
        console.log(`나이 : ${this.age}`);
    }
    
    printName():void {
        console.log(`이름 : ${this.name}`);
    }
}
//end class cat

function printSomething(a:Animal) {
    a.printInfo();
}

//생성자 파라메터 전달
let dd:Cat = new Cat('희망', 2);
dd.printInfo();
dd.printName();

//Animal이 상위의 개념이기 때문에 Cat타입의 오브젝트를 전달할 수 있다.
printSomething(dd);

let d2:Animal = new Cat('나비', 1);
d2.printInfo();
/* 
에러 발생 : Animal인터페이스에 printName()이 없기 때문에
d2.printName(); 
*/



//start class Bird
//인터페이스 구현
class Bird implements Animal {
    name: string;
    age: number;
    height: number;
    kind: string;
    
    //생성자: 호출할때 생성자 파라메터를 전달해줘야한다.
    constructor(kind:string) {
        this.kind = kind;
    }
    
    printInfo():void {
        console.log(`이 새의 종류는 ${this.kind}`);
    }
}
//end class Bird

//start class Chicken
//Bird class 상속 
class Chicken extends Bird {
    constructor() {
        //부모 생성자 호출
        super('닭');
    }
    
    //오버라이딩: 재정의, 덮어쓴다고 생각
    printInfo():void {
        //부모 함수 호출할 때 super사용
        super.printInfo();
        console.log(`이 새의 종류는 닭이다 닭닭`);
        console.log('테스트');
    }
}
//end class Chicken

//Chicken클래스의 상위는 Bird 클래스이기 때문에 printInfo()함수를 호출할 수 있다.
// let c1:Bird = new Chicken("닭");
// c1.printInfo();

//Chicken클래스는 Bird 클래스를 상속받았기 때문에 printInfo()함수를 호출할 수 있다.
// let c2:Chicken = new Chicken("닭");
// c2.printInfo();

//Chicken클래스의 상위는 Bird 클래스의 상위는 Animal인터페이스이기 때문에 printInfo()함수를 호출할 수 있다.
let c3:Animal = new Chicken();
c3.printInfo();


//start Egg class
class Egg extends Chicken {
    //내용없음
}

let egg:Animal = new Chicken();
egg.printInfo();
egg = new Egg();
egg.printInfo();