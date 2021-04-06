//js의 문자열

let s1 = "modern javascript and java"
let s2 = String("modern java script and java");
console.log(s1, s2);
console.log(typeof s1,typeof s2);
console.log(s1==s2); // 값의 비교도 ==로 가능

//문자가 연결된 타입 이므로 길이를 잡을 수 있다
console.log(s1.length);
console.log(s2.length);
console.log(typeof s1.length,typeof s2.length);

//문자열 추출 
console.log(s1);
console.log(s1.charAt(7));
console.log(s1[7]);
console.log(s1.substring(7,15));
console.log(s1.substr(7,8)); //7번 ㅇㄴ덱스로부터 7글자
console.log(s1.substr(7));

//string 문자열 검색 indexof
//string 문자열 대체 replace -- 내부 데이터 변경되지 않는ㄷ ㅏ?  재할당 필요
//trim 문자열내 공백 제거 


console.log("============search");
console.log("원본 :" ,s1);
console.log(s1.indexOf("java"));


let position= s1.indexOf("java"); // s1에서 java를 검색 

console.log(position);
position+=4;
position=s1.indexOf("java",position);
console.log(position);

position = s1.indexOf("Java") ; //없는키워드 ㄱ머색 
console.log("없는 키워드 검색 : ",position);
console.log("뒤부터 검색하기 : ", s1.lastIndexOf("script"));


console.log("============치환");
console.log(s1.replace("java", "j"));
console.log(s1.replace("j", "java"));

//string은 불변 객체다 . 새로운 객체가 생성되어 반환되는 형태임.
console.log(s1); // 원본은 유지된다
console.log(" ab cbcbcbd d d d f e e w ".trim()); // 왜 트림이 안되는가 ?

// string 추가내용 
/*
  \n 개행, 
  \t 탭 
  \' '
  \" "
  \$ 달러기호
  \` 백틱 
*/
// js의 문자열은 "" or ''
let message ="he said, \"hellow ! greeting \"";
message1= ' he said , \'hello\'';

console.log(message);
console.log(message1);

//템플릿 문자열 
console.log("============템플릿 문자열");
let temp = 24;
//현재 실내 온도는 24도 입니다. 
console.log("현재 온도는 ", temp,"도 입니다");

//es6 방식 
//백틱 문자와 ${}로 할 수 있따.

message = `현재 실내 온도는 ${temp}도 입니다`;
console.log(message);

//여러 줄 문자열을 만들 때
message="예전에는 여러줄 문자열을 만드는게\n 쉽지 않았어요";
console.log(message);
message=`하지만 es6에서는 
아주 손쉽게 
여러 줄 문자열을 
만들 수 있습니다.   `;
console.log(message);



