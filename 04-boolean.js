console.log("==========================불린");
//  == 을 이용하여 데이터 타입에 상관없이 값을 비교할 수 있다 .
// === 값 외에 데이터 타입까지 비교한다 .
console.log(123 == "123");
console.log(123 === "123");


//null 과 undefined 
//null 개발자가 의도적으로 빈 값을 할당
//undefined 할당 자체가 이루어지지 않음 .
console.log("==========================불린2 ");
let v1,v2 = null;
console.log(v1 == v2);
console.log(v1 === v2);
console.log(typeof v1, typeof v2);





 console.log("================================");
 let c1 ;  // 선언 o 할당 x
 let c2 = null ; // 선언 o 할당 o(빈값)
 console.log(c1);
 console.log(c2);
 console.log(c1,typeof c1 , c1 == undefined);
 console.log(c1,typeof c1 , c1 == null);

 console.log(c2,typeof c2 , c2 == undefined);
 console.log(c2,typeof c2 , c2 == null);
 

 //undefined 또한 null처럼 할당 될 수 있다. 
 // null은 object이다. 
 
// 비어있다의 의미 
//number  : 값이 없다
//string : 길이가 없다
console.log("=========넘버와================스트링=======");
console.log(Boolean("String"), Boolean(""));
console.log(Boolean(123),Boolean(0));