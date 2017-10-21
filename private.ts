/* 
    [접근제어자]
    private: 해당 클래스, 함수에서만 사용할 수 있음
    protected: 해당 클래스, 함수, 상속받는 클래스에서 사용할 수 있음
    public: 모든 곳에서 사용할 수 있음
*/
class UserDTO {
    private name: string;
    private age: number;
    public address: string;

    setName(name:string):void {
        this.name = name;
    }
    getName():string {
        return this.name;
    }
    setAddress(address:string):void {
        this.address = address;
    }
    getAddress():string {
        return this.address;
    }
}

let hong: UserDTO = new UserDTO();
hong.address = "서울시 강남구";
hong.setName('홍길동');
let nm = hong.getName();
console.log(nm);
