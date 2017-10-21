interface Work {
    goForWork(): void;
    doWorking(): void;
    goOut(): void;
}

//공통적인 로직 모아서 클래스를 만듬
class CmmWorker implements Work {
    name: string;

    //생성자
    constructor(name: string) {
        this.name = name;
    }

    goForWork() {
        console.log('출근 중');
    }

    doWorking() {
        console.log('일하는 중');
    }
    
    goOut(){
        console.log('퇴근 중');
    }
}

class Developer extends CmmWorker {
    doWorking():void {
        console.log("개발 중");
    }
}

class Coder extends CmmWorker {
    doWorking():void {
        console.log("코딩 중");
    }
}

function workFlow(w:Work) {
    w.goForWork();
    w.doWorking();
    w.goOut();
}

let dev:Work = new Developer();
workFlow(dev);

let code:Work = new Coder();
workFlow(code);
