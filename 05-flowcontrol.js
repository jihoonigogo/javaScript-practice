
console.log("===================for 구구단")
for(let i=1; i<=9; i++){
    
    for(let j=1;j<=9;j++){
        console.log(j,"*",i,"=",j*i);
    }
}


console.log("===================while 구구단")

let i = 1;

while(i<=9){
    let j =1;
    while(j <10){
        console.log(j,"*",i,"=",j*i);
        j++
    }
    i++
}

console.log("===================for 별")

let result =0;
for(let j=1;j<=5;j++){

 for(let i=5; i>=j; i--){
    console.log("*");
  

    }console.log("");
}