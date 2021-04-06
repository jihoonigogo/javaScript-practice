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













