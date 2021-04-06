// 프로퍼티 : 객체가 갖는 데이터 
// 메서드 : 객체가 갖는 기능


//1. 객체생성 방법
const person = new Object();
console.log("person:",person);
person.name = "홍길동";
person.age = 32;
person.showInfo = function(){
    let message = `Name : ${this.name} , Age: ${this.age} `;
    console.log(message);
}
console.log("person:",person);
console.log("person:",person.name);
person.showInfo();
console.log("==========================JSON");
//2. 객체생성 방법 JSON
//{} 객체 표기, 속성들은 key: value 쌍으로 기술한다 .
person2 = { 
    name: "김길동",
    age: 33,
    showInfo: function(){
        console.log(`name : ${this.name}이고 age는 ${this.age}살 이다`);
    }
}
console.log(person2);
person2.showInfo();

//객체 생성 방법 3번째 : 함수를 생성자 처럼 사용하는 방법 
console.log("==========================prototype");
const Member = function(name,position){
    this.name=name;
    this.position=position;
};
console.log("Member:", Member);
let m1 = new Member("강백호","PF");
let m2 = new Member("서태웅","SF");
console.log("첫번째 멤버 :" , m1);
console.log("두번째 멤버 :" , m2);

//js는 동적으로 속성을 추가할 수 있다 .
//m1에 동적 메서드를 추가해보기 
m1.sayHi = function(){
    console.log(`${this.name},${this.position}`);

}
//동적으로 추가된 메서드 호출
m1.sayHi();
// m2.sayHi();

console.log("m1의 생성자 :" ,m1.constructor); // m1을 생성한 객체 확인 (생성자 확인)
// 동일 객체는 prototype 이라는 공유 영역을 갖고 있다.
// 이 객체를 이용, new 인스턴스화한 모든 인스턴스에 동일한 속성을 공유해줄 수 있따.
// 이를 이용해서 상속의 일부개념을 구현

console.log("Member 객체의 prototype영역 :" , Member.prototype); // 비어있음 

Member.prototype.introduce= function(){
    console.log("Name :" , this.name);
    console.log("Position :" + this.position);
};

console.log("Member 객체의 prototype영역 :" , Member.prototype); // 비어있음 
// 프로토타입에 추가된 속성은 해당 객체로 모든 인스턴스에 공유 가능
m1.introduce();
m2.introduce();

//prototype 영역과 동적 속성 등록의 특성을 활용하면 
//기존 객체들에도 동적으로 속성을 추가할 수 있다.

String.prototype.sayHello = function(){
   return "Hello" + this;
}
console.log("둘리".sayHello());