/* 인터페이스: 변수나 함수의 선언까지만 가능한 약속, 규격 */
interface Action {
    speed: number;
    run(): string;
    setSpeed(speed:number):void;
}

//인터페이스 구현
class Robot implements Action {
    speed: number = 30;
    
    run(){
        return '로봇이' + this.speed + '정도로 뛴다.';
    }
    
    /* 타입스크립트는 함수의 리턴 타입 명시할 수 있다. */
    setSpeed(speed:number):void {
        this.speed = speed;
    }
}

/* 하나의 변수(speed)와 두가지 기능(run(), setSpeed())이 존재한는 클래스 */
//인터페이스 구현
class Person implements Action {
    speed: number = 30;
    
    run(){
        return this.speed + '정도로 뛴다.';
    }

    /* 타입스크립트는 함수의 리턴 타입 명시할 수 있다. */
    setSpeed(speed:number):void {
        this.speed = speed;
    }
}

function call(v:Action) {
    console.log(v.run());
}

let p:Action = new Person(); //p의 타입은 Action이다.
// let p = new Person(); //p의 타입은 Person이다.
// let p:Person = new Person();
p.setSpeed(50);
call(p);
// let str4: string = p.run();
// console.log(str4); 

let r:Action = new Robot();
r.setSpeed(1000);
call(r);
// str4 = r.run();
// console.log(str4); 
