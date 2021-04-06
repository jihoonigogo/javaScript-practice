//js의 숫자 
//산술 연산 가능 
let n1 = 5; // Literal 방식 : 소스 코드에 직접 입력된 값
let n2 = Number(5); // number타입 함수 생성 

console.log(n1,"==",n2,"?",n1==n2);
console.log(typeof n1, typeof n2);

//math내장 객체 활용
console.log(Math.min(1,5,3,2,7,6),Math.max(9,2,6,2,4));
let n3 = 3.567;
console.log(n3,Math.round(n3),Math.trunc(n3),Math.floor(n3));

// 그외 number 객체가 가진 여러가지 상수들 
console.log("표현할 수 있는 최대 정수:", Number.MAX_SAFE_INTEGER);
console.log("표현할 수 있는 가장 큰 수:", Number.MAX_VALUE);
console.log("표현할 수 있는 최소 정수:",Number.MIN_SAFE_INTEGER);
console.log("표현할 수 있는 가장 작은 수:" , Number.MIN_VALUE);


//Casting 
//JS는 문자열로 전달받은 수치 데이터를 number로 변환해야하는 경우가 많다

console.log("============Casting");

//pasrInt , parseFloat 
console.log(parseInt("011")); //011문자를 10진수 정수로 변환
console.log(parseInt("011",2)); // 011문자를 2진수로 진법변환

console.log(parseInt("123.456"));
console.log(parseFloat("123.567"));


//parseint : float를 int로 변환할 때도 사용한다.
console.log(Math.PI,parseInt(Math.PI));

let n4 = parseInt("abc1234"); //숫자로 변환할 수 형태의 캐스팅
console.log(n4 ); // nan
console.log(n4+1111); //nan 포함 산술연산은 nan

//nan 확인법 isnan
console.log(n4, isNaN);

let result = 1/0;
console.log(result,typeof result);

//infinity가 포함된 산술식은 항상 infinity
console.log(result +10);

//isfinite, isnan을 이용해서 객체가 산술연산 가능한 데이터 인지 판별