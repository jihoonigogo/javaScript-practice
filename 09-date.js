let now = new Date();
console.log(now);

let past = new Date(1999,11,22); // 1999년 12월 31일 month 는 0~11이다.
console.log(past);
past = new Date(1999,11,31,12,30,30); // 년 월 일 시 분 초
console.log(past);

console.log("연도 :" , now.getFullYear());// getyear 는 1900년대 기준이라 이거쓰자
console.log("월 :   ", now.getMonth()+1);
console.log("일 :" , now.getDate());
console.log("무슨 요일이게 ", now.getDay()) ; // 0~6 일월화수목금토


//es5 way 합치기 
let arr1 =['홍길동','장길산'];
let arr2 =['임꺽정','전우치'];

console.log(arr1);
console.log(arr2);

let combined = [];
//es5 방법 1. 각 요소를 꺼내서 새 배열에 할당 
combined =[arr1[0],arr1[1],arr2[0],arr2[1]];
console.log(combined);

//es5 방법 2. concat 메서드 사용 (붙이기)
combined = arr1.concat(arr2);
console.log(combined);

//es5 방법3 . 빈배열에 concat 메서드 사용 
combined=[].concat(arr1,arr2);
console.log(combined);

//es6 way 
combined = [...arr1,...arr2]; // ...배열 : 전개 연산자 ! 배열의 요소를 풀어냄
console.log(combined);

//배열의 전개
console.log("원본 배열" , combined);
let [first, second, third="empty",...others] = arr1;
console.log(arr1); // 3,4번 어디감 ? 3은 empty 근데 4는 ?
console.log("전개 :", first,second,third,others); //2개
console.log("combined : ", combined);
[first,second,third="empty",others]= combined; //홍장임전
console.log("전개 :", first,second,third,others);//4개
//무슨차이가 있는가 ?



console.log("===========객======체=====전====개====연=======산");
let obj1 = {one:1,two:2,other:0};
let obj2 ={three:3,four:4,other:-1};

//es5 방식으로 두 객체 합치기 .
console.log("=====수동==========================================");
//방법1. 수동으로 풀어내기 
combined={
   one:obj1.one,
   two:obj1.two,
three : obj2.three,
four:obj2.four,
others:obj2.other
};
console.log(combined);

console.log(obj1);
console.log(obj2);

console.log("====object.assign===================================");
//es5 방법2 . obj.assign
combined=Object.assign({},obj1,obj2);
console.log(combined);
combined=Object.assign({},obj2,obj1); 
// 중복 키워드가 있으면 나중에 오는 값으로 초기화 된다
console.log(combined);
console.log("====...===================================");
//ES6 방식 
combined = {
    ...obj1,
    ...obj2
};
console.log(combined);

//속성의 전개 
console.log("obj combined:", combined );
let { one, two, other, ...otrs} = combined;
console.log(one,two,other,otrs);













