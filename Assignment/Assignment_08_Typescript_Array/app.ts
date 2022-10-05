// 1. Write a ts program to read and print elements of array.

let printArr=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);    
    }
}
// printArr()
// 2. Write a ts program to print all negative elements in an array.
let printNegative=()=>{
    let arr:number[]=[1,-2,3,-4,5,-6,-78,8,99,4]
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
        console.log(arr[i]);    
    }
}
}
// printNegative()
// 3. Write a ts program to find sum of all array elements. 
let arrSum=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
    let sum:number=0;
    for(let i=0; i<arr.length; i++){
         sum+=arr[i]  
    }
    console.log(sum) 
}
// arrSum()
// 4. Write a ts program to find maximum and minimum element in an array.
let minMax=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
     let min:number=Math.min(...arr)
     let max:number=Math.max(...arr)
     console.log(`Minimum number is ${min}`);
     console.log(`Maximum number is ${max}`);
    
}
// minMax()
// 5. Write a ts program to find second largest element in an array.
let secondLargest=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
    let max:number=Math.max(...arr)
    arr.splice(arr.indexOf(max),1)
    let secondMax:number=Math.max(...arr)
    console.log(`Second largest element in array is ${secondMax}`)
}
// secondLargest()
// 6. Write a ts program to count total number of even and odd elements in an array.
let countEvenOdd=()=>{
    let arr:number[]=[1,2,3,4,5,6,78,8,99,4]
    let even:number=0;
    let odd:number=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            even+=1
        }else{
            odd+=1
        } 
    }
    console.log(`Total Even in Array is ${even}`);
    console.log(`Total Even in Array is ${odd}`);   
}
// countEvenOdd()
// 7. Write a ts program to count total number of negative elements in an array.
let totalNegative=()=>{
    let arr:number[]=[1,-2,3,-4,5,-6,-78,8,99,4]
    let neg:number=0
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
          neg+=1
    }
}
console.log(`Total number of negative elements in an array ${neg} `);
}
// totalNegative()
// 8. Write a ts program to copy all elements from an array to another array.
let copyArr=()=>{
    let arr:number[]=[1,-2,3,-4,5,-6,-78,8,99,4]
    const arr2:number[]=[...arr]
    console.log(arr2);
}
// copyArr()
// 9. Write a ts program to insert an element in an array.
let insertElement=()=>{
    var arr:string[]= [ 'A', 'B', 'E' ];
     arr[2]='C'
     console.log(arr)
}
// insertElement()
// 10. Write a ts program to delete an element from an array at specified position.
let deleteElement=()=>{
    let arr:number[]=[1,-2,3,-4,5,-6,-78,8,99,4]
    let a=arr.splice(3,1,44)
    console.log(arr);   
}
// deleteElement()
// 11. Write a ts program to count frequency of each element in an array.
let countFreq=()=>{
    const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[5], counts[2], counts[9], counts[4]);
}
// countFreq()
// 12. Write a ts program to print all unique elements in the array.
let printUnique=()=>{
    const arr = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,-4,5,-6,-78,8,99, 9, 4];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<9 && arr[i]>2){
            console.log(arr[i]);
            
        }
    }
}

printUnique()