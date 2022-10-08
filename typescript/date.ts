let even=(el,arr)=>{
    return (el>1)
    // if(el%2==0){
    //     return el
    // }
}
var arr:number[]=[1,2,4,0,2,5]

// var passed=arr.filter(even)
// console.log(passed);
// arr.forEach((el)=>{if(el%2==0){console.log(el)}})
var sample = [1, 2, 3] // i am never gonna change Boo! Yeah
var mapped = sample.map(function(elem) {
    return elem - 10;
})
// console.log(mapped);
var multi = [[1, 2, 3], [23, 24, 25]];
for(let i=0; i<multi.length; i++){
    let iL=multi[i].length
    for(let j=0; j<iL; j++){
        console.log((multi[i][j]).toString());
        
    }
}