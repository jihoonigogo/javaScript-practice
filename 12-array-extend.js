function testForEach(){
    //배열의 개별 요소들을 한개씩 콜백함수로 전달한다 .
    let source = ['banana','orange','apple','mango'];
    source.forEach(item => {
        console.log("item:", item);
    });
    // 콜백 함수에서 요소의 인덱스가 필요할떄
    source.forEach((item,index) => {
        console.log(`${index +1}번째 item: ${item}`);
    });

    //콜백 내부에서 아이템,인덱스, 배열자체가 필요할때 
    source.forEach((item,index,arr) => {
        //arr 은 배열 자체임 
        console.log(`${arr}의 ${index+1}번째 item은 ${item}입니다. `)
    })
}
// testForEach(); // 여기 내용 못들음 ;;; 
// foreach의 기능 정확히 알아보기 
// index와 item은 키워드 인가 ? 
// 애로우에 대해 정확히 알아보기 

function testFilter(){
    console.log("=================필터이다");
    //배열의 내부 요소 중 조건에 부합하는 요소만 추출하여 새 배열로 
    // 반환한다 .
    const source = [1,2,3,4,5,6,7,8,9,10];
    // sourece 배열 내에서 짝수만 추출하기 
    //ES5 방식 
    let result = []; // 결과를 담기 위한 배열 
    for(let i=0; i<source.length;i++){
        if(source[i]%2==0){
            result.push(source[i])
        }
      
    }  console.log("짝수 필터링 :" ,result);

    //es6 방식 
    result=source.filter(item=> item%2==0);
    console.log("짝수 필터링(filter함수) :" , result);
}
testFilter();

















