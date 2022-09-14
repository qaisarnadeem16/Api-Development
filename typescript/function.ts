

// to find max and minimum b/w two number;

function checkNum(num1:number ,num2:number ,num3 ?:number ,num4 ?:number ):number{

   if(num3 !=undefined && num4!=undefined){

    if(num1>num2 && num1>num3 && num1>num4){
        console.log(num1 + " : Num1 is maximum number")      
    }else if(num2>num1 && num2>num3 && num2>num4){
        console.log(num2 + " : Num2 is maximum number")
     }else if(num3>num1 && num3>num2 && num3>num4){
        console.log(num3 + " : Num3 is maximum number")
     }else{
        console.log(num4 + " : Num3 is maximum number")
     }
   }
   
}

checkNum(12,14,24,33)


// to find even and odd

function checkEvenOdd(number:number){
    if(number%2==0){
        console.log(number +" :: Number is Even")
    }else{
        console.log(number +" : Number is odd")
    }
}

checkEvenOdd(32)