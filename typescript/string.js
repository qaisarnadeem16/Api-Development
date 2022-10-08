// var str:string="I love Pakistan  "
// var str2:string="I love BWP"
// console.log(str.length);
// console.log(str.charAt(7));
// console.log(str.charCodeAt(3));
// var str3:string=str.concat( str2)
// console.log(str3);
// console.log(str.indexOf('love'));
// console.log(str2.lastIndexOf('love'));
// console.log(str2.search('love'));
// var str4:string='apple are round and apple are juciy'
// var re=/apple/gi;
// // console.log(str4.replace(re,'orange'));
// console.log(str4.search(re));
// var header:string='Languages';
// var items:string[]=['HTMl','CSS','JS','BS','jquery','php'] 
// let html=`<h2>${header}</h2> <Ul>`
// for(let x of items){
//     html+=`<li>${x}</li>`
// }
// html+= `</ul>`
// var demo=document.getElementById('demo')
// demo.innerHTML=html;
var str1 = new String("This is beautiful string");
var index = str1.localeCompare("  ");
// console.log("localeCompare first :" + index );
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
99;
var newstr = str.replace(re, "oranges");
console.log(newstr);
