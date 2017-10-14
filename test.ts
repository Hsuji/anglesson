var str = "String123";
var str2 = "test2";
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