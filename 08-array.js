//배열 생성방법 1.Array 이용 
const v1 = new Array(10); // 10개짜리 배열 
const v2 = new Array(); // 빈 배열 
const v3 = new Array(1,"JS",true); // 어떤 객체든 ok

//길이 측정 
console.log(v1.length, v2.length, v3.length); // 10 0 3

//배열의 생성방법 2 . [] 리터럴 (추천)
const v4 = []; // 빈 배열
const colors = ['red', 'green','blue','yellow'];

//배열의 타입체크
console.log(typeof v4, typeof colors); // 둘다 오브젝트 
//배열의 타입체크 (추천)
console.log("배열 체크 : " ,Array.isArray(v4), Array.isArray(colors));// 트루트루

//배열을 기본값으로 채우기 .fill() 메서드 사용 
const v5 = new Array(10).fill(1);
console.log(v5);
v5.fill('change');
console.log(v5);

//객체와 배열의 관계
//객체의 속성들도 배열 인덱스 처럼 접근 가능하다 .

// const person = {
//     name: "홍길동", age =28
// };
// console.log("속성 접근" ,person.name,person.age);
// console.log("속성 접근" ,person['name'],person['age']);

const arr = [];
console.log("length of arr : " , arr.length);
arr[10] = 2021; 
console.log("length of arr : " , arr.length);
console.log(arr);

//배열 합치기 :concat
const veges = ['배추','무','쪽파'];
const sources = ['소금','고추가루','새우젓'];
const ingr = veges.concat(sources);
console.log(veges);
console.log(sources);
console.log(ingr);

console.log(ingr.join(",")); // 배열 요소를 , 기준으로 합침



// pop 맨 뒤에 있는 요소를 추출 후 제거 
// pust  요소를 매 뒤에 추가
let fruits = ['banana','prange','mango','apple'];
console.log(fruits) ; // 내용확인
fruits.push("kiwi"); //맨 뒤에 추가
console.log(fruits) ; // 내용확인

console.log(fruits.pop()); // 배열의 맨 마지막 요소 추출 후 제거
console.log(fruits.pop()); // 배열의 맨 마지막 요소 추출 후 제거

console.log(fruits) ; // 내용확인

let fruit = ['banana','prange','mango','apple'];
console.log("queue:" , fruits); //
console.log(fruit.shift()); // 맨 앞 요소를 추출 후 제거 
console.log(fruit.shift()); // 맨 앞 요소를 추출 후 제거 
console.log(fruit.shift()); // 맨 앞 요소를 추출 후 제거 
console.log("queue:" , fruit);

console.log("=====================splice")
// splice : 요소의 삭제와 추가 
fruit = ['banana','prange','mango','apple'];
console.log("원본 :",fruit);
//인수가 1개 - 해당 인덱스부터 끝까지 추출 후 삭제 
console.log("splice (2) :" , fruit.splice(2) );
console.log("원본 :",fruit);

//인수가 2개 - 첫번째 인덱스부터 두번째 수 만큼 추출 후 삭제
fruit = ['banana','prange','mango','apple'];
console.log("원본 :",fruit);
console.log("splice (2,1) :" , fruit.splice(2,1) );
console.log("원본 :",fruit);

//인수가 3개 - 첫번째 수의 인덱스부터 두번째 수의 인덱스까지 추출,삭제 후
// 3번째 인덱스에는 추가할 데이터들
fruit = ['banana','prange','mango','apple'];
console.log("원본 :",fruit);
console.log("splice (2,1,items...) :" , fruit.splice(2,1,"kiwi","melon") );
console.log("원본 :",fruit);


//reverse (배열 뒤집기), slice (추출o 삭제x)
//fruit = ['banana','prange','mango','apple'];
console.log("원본 :",fruit);
console.log("reverse :" , fruit.reverse());
console.log("원본 :",fruit);
let slices = fruit.slice(1,2);
console.log("slice(1,2) : ", slices);
console.log("원본 :",fruit);



//sort 정렬 (오름차순)
fruit = ['banana','prange','mango','apple'];
console.log("원본 :",fruit);
console.log("정렬 :" , fruit.sort()); // 문자열이므로 알파벳 순서로.

// 내림차순 혹은 사용자 정의 기준 정렬 -  > 정렬 기준 함수 전달해야함 
fruit.sort(function(v1,v2){ // 길이나 알파벳 갯수로 정렬을 바꾸는등 해보기
    // return 값 0: 두 값은 같은 순번이다 
    // return 음수값 : v1이 앞이다. 양수값: v2가 앞이다.
    if(v1==v2) return 0;
    if(v1<v2) return 1;
    if(v1>v2) return -1;

});
console.log("내림차순 정렬 :",fruit);




//split 문자열을 특정 구분자를 기준으로 분리 , 배열로 반환하
const str = "JavaScript is something strange than other languages";
let chunks = str.split(" ");
console.log(chunks);

//반복문을 이용해 분리하는 법 ㅇㄷ 
for(let i =0; i<chunks.length; i++){
    console.log("chunks " ,chunks[i]);
}

