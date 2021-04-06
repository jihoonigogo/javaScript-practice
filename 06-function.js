//함수 선언문 : function 
function sum (a,b){ //매개변수 a b를 받아서 
    return a+b ; // 결과를 반환한다 // return을 만나면 함수는 종료
}

console.log(sum(10,20)); //호출  매개변수 10 20을 받아 30으로 리턴 ?

//함수 표현식 : 이름이 없는 함수 -> 익명 함수 
//함수는 그 자체로 객체이므로 변수로 할당 될 수 있고 
//다른 함수의 매개변수로 전달될 수 있다.

const asum = function(a,b){
    return a+b;
}

console.log(typeof asum,asum(10,20));
//익명 함 수의 활용은 페이지의 초기화 시 유용하다.

let initText ;
(function(number){
    let textList= ["홀수","짝수"];// 함수 내부에서 사용하고 버리는 값
    if(number %2 ==0){
        initText = textList[1];
    }else{
        initText=textList[0];
    }
    console.log(`매개변수 ${number}를 이용해서 즉시 실행했습니다.`);
})(5);

// console.log("textList : " , textList); // 오류 : 함수 내부에 있으므로 참조 불가
console.log("초기화 진행 후 initText :",initText);


//함수 매개 변수의 이해
//js에서는 매개변수 선언하지 않아도 함수로 전달되는 모든 인수가 arguments 배열로 전달된다

function getNumberTotal() { // 매개변수 선언 안함
//  console.log("매개변수 :", arguments); //모든 인수가 여기로 전달된다

//전달받은 모든 매개변수를 합산 출력 
let result = 0;
for (let i =0; i<arguments.length; i++) {//일종의 배열이므로 길이를 잡음 
    // 전달 받은 변수가 산술연산 할 수 있는 값ㅇㄴ가 ?
    if(typeof arguments[i] =="number"){
        result += arguments[i];
    }
   
}
return result;
}
console.log("getnumbertotal :" , getNumberTotal(1,2,3,4,5)); 
console.log("getNumberTotal :", getNumberTotal(1,2,"3",4,5));

//js 함수는 객체이므로 변수에 참조되거나 다른 함수의 매개변수로 전달될 수 있음 
function calcUsingCallback(val1,val2,func){
    if(typeof func == "function"){ 
        func(val1,val2); //외부에서 전달받은 함수를 내부에서 거꾸로 실행함. call back.
        
    }
}

calcUsingCallback(1,1, function(v1,v2){
    while(v1<=9){
        if(v2<=9){
            console.log(v2,"*",v1,"=",v2*v1);
            v2++;
        }else{break;}
        v1++; }
    
});

calcUsingCallback(3,4,function(v1,v2){
        // 매개변수는 외부에서 받고 함수의 로직은 내부에서 바꿈 ?
        // 함수의 매개변수로 전달되서 타 함수의 내부에서 거꾸로 호출되는 함수. (콜백함수)
    console.log(v1*v2);
});

//es6에서 등장한 함수 : 화살표 함수  =>
console.log("==================화살표 함수 =====================");
const f1 = function(){
    return "hello"
};

const f1Arrow = () => "hello";

console.log(f1());
console.log(f1Arrow());

const f2 = function(name){ return "hello" + name};
const f2Arrow = (name) => "hello , " + name;
console.log(f2("홍길동"));
console.log(f2Arrow("babo"));

const f3 = function(a,b) {return a+b};
const f3Arrow = (a,b) => a+b;

console.log(f3(3,7), f3Arrow(3,7));

//화살표 함수는 함수에 콜백함수를 전달할 때 유용하다 

calcUsingCallback(3,4, (a,b) => console.log(a,b));
