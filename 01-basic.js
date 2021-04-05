// 한줄 주석 
// /* 여러줄 주석 */ 
// 내장 객체 console : 콘솔에 출력하는 객체 

console.info("정보메세지");
console.debug("디버그 메세지");
console.warn("경고메세지");
console.error("에러메세지");

console.log("가장 일반적인 로그 메세지");

// 내용을 연속으로 출력할때는 ,로 구분 

console.log("String ,2021");

// 객체의 속성, 메서드에 접근할때는 .으로 접근한다 .

console.log(Math.PI) ; // 속성 접근 
console.log(Math.max(1,2,3,4,5)); // 메서드 접근

console.log("----------");

// js는 동적 자바 언어로 데이터가 할당될때 데이터 타입이 결정된다.
// 자바는 정적이므로 변수 선언시 데이터타입을 알려줘야함.

// var let const 
var testVar = 2021; // var는 ES6이전 방식 -> WEB에서는 아직 사용함.

// ES6이후
let testLet ="let"; // let은 재할당 가능변수 
const testConst = "const"; // const는 재할당 불가 변수 , 상수처럼 이용

// 상수는 선언과 동시에 값을 할당해야한ㄷ ㅏ.

console.log(testVar,testLet,testConst);
testVar = "var changed "; 
testLet= "let changed";
// testConst = " const changed"; const는 재할당이 불가능하다 .
// es6가 지원되는 환경에서는 먼저 const로 할 수 있는지 먼저 생각한다.
//          -> 값이 바뀌는 것이 자연스럽다고 생각하면 let으로 바꿔쓰기
console.log(testVar,testLet,testConst);

//자바스크립트는 동적 타이핑 언어! 
//변수 선언시는 데이터의 타입 정해지지 않고 값(데이터)이 할당될때 
//타입이 결정된다.

let v = " this is String";

//데이터 타입 확인
console.log(v, "-> " , typeof v);

//데이터 타입 변환 
v = 2021;
console.log(v, "-> " , typeof v);
