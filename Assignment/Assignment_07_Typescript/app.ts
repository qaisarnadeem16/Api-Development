// 1. Write a ts program to find length of a string.

let lenghtOfStr=(str:string)=>{
    let lgth:number=str.length
    console.log("Length of String is : "+ lgth)
}
// lenghtOfStr("this is qaisar Gill")

// 2. Write a ts program to copy one string to another string.
 
let copyStr=(str:string)=>{
    let newStr:string=str
    console.log(newStr);  
}
// copyStr("Yasir ")


// 3. Write a ts program to concatenate two strings.

let concatStr=(str1:string,str2:string)=>{
    let str3:string=str1.concat(str2)
    console.log(str3);  
}
// concatStr("Hi Ali ", "How are you!")
// 4. Write a ts program to compare two strings.
let compareStr=(str1:string,str2:string)=>{
 let result=str1.toUpperCase()===str2.toUpperCase();
 if(result){
    console.log("String are similar"); 
 }else{
    console.log("String are not similar");   
 }
}
// compareStr("hi","he")

// 5. Write a ts program to convert lowercase string to uppercase.
 let upperCaseStr=(str:string)=>{
    console.log(str.toUpperCase());  
 }
//  upperCaseStr("lets do it")

// 6. Write a ts program to convert uppercase string to lowercase.
let lowerCaseStr=(str:string)=>{
    console.log(str.toLowerCase());  
 }
//  lowerCaseStr("LETS DO IT")

// 7. Write a ts program to toggle case of each character of a string.

let toggleCase=(str)=>{
   str=str.split("")
    for (let i = 0; i < str.length; i++){
        if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] =  String.fromCharCode(str[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
        else if (str[i] >= 'a' && str[i] <= 'z')
            str[i] =  String.fromCharCode(str[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0));
    }
    str=str.join('')
    console.log(str.toString());
    
}

// toggleCase("geKKA");


// 8. Write a ts program to find total number of alphabets, digits or special character in a string.
let  strCount=(str:string)=>{
   let alph:number=0;
   let digit:number=0;
   for(let i=0; i<str.length; i++){
      if((str[i]>='a'&& str[i]<='z') ||(str[i]>='A'&& str[i]<='Z')){
         alph=alph+1;
      }else if(str[i]>='0'&& str[i]<='9'){
         digit=digit+1;
      }
   }
   console.log(`Alphabets  ${alph}  Digits  ${digit}`);
   
}
// strCount("javascript Ecma 61")

// 9. Write a ts program to count total number of vowels and consonants in a string.

let countVowel=(str:string)=>{
   let vowel:number=0;
   let consonant:number=0;
   for(let i=0; i<str.length; i++){
      if(str[i]=='a' || str[i]=='e' || str[i]=='o' || str[i]=='i' ||str[i]=='o'){
         vowel+=1;
      }else if((str[i]>='a'&& str[i]<='z') ||(str[i]>='A'&& str[i]<='Z')){
         consonant+=1;
      }
   }
   console.log(`Vowels  ${vowel} || consonants  ${consonant}`);
}
countVowel('typescript the best')

// 10. Write a ts program to count total number of words in a string.
let  countWord=(str:string)=>{
   let word:number=0;
   if(str.length>0){
      word=1;
   }
   for(let i=0; i<str.length; i++){
      if(str[i]==' '){
      word+=1;
      }
   }
   console.log(`Words  : ${word}`);
   
}
// countWord("javascript Ecma 61")

// 11. Write a ts program to find reverse of a string.

let reverseStr=(str:string)=>{
    let str1=str.split('')
    let str2=str1.reverse()
    let reverseStr=str2.join("")
    console.log(reverseStr)
}
// reverseStr("java  script")


// 12. Write a ts program to check whether a string is palindrome or not.

let palindromeStr=(str:string)=>{
   let str1=str.split('')
   let str2=str1.reverse()
   let reverseStr=str2.join("")
   // console.log(reverseStr)
   if(str==reverseStr){
      console.log('It is a palindrome');
   }else{
      console.log('It is a not palindrome');
   }
}
// palindromeStr('madam')
// 13. Write a ts program to reverse order of words in a given string

let reverseWord=(str:string)=>{
   let str1=str.split(' ')
   let str2=str1.reverse()
   let reverseStr=str2.join(" ")
   console.log(reverseStr)
}
// reverseWord("java  script 6 Ecma")

// 14. Write a ts program to find first occurrence of a character in a given string.
let firstOccurrance=(str:string,word:string)=>{
   console.log('The word occurrence At : ' + str.indexOf(word));   
}
// firstOccurrance('javascript js is king', 'js')

// 15. Write a ts program to find last occurrence of a character in a given string.
let lastOccurrance=(str:string,word:string)=>{
   console.log('The word occurrence At : ' + str.lastIndexOf(word));   
}
// lastOccurrance('javascript js a a a js is king', 'js')

// 16. Write a ts program to search all occurrences of a character in given string.
let searchAll=(str:string,word:string)=>{
   console.log('The word occurrence At : ' + str.search(word));   
}
// searchAll('javascript js a a a js is king', 'js')

// 17. Write a ts program to count occurrences of a character in given string.
let countword=(str:string,word:string)=>{
   let count=0;
 for(let i=0; i<str.length; i++){
   if(str[i]==word){
      count+=1;
   }
 } 
 console.log(`${word} is occurrence ${count} time`);
}
// countword('javascript js a a a js is king', 'a')

// 18. Write a ts program to find highest frequency character in a string.

let  getMax =(str:string)=>{
   var max = 0,  maxChar = '';
    str.split('').forEach(function(char){
      if(str.split(char).length > max) {
          max = str.split(char).length;
          maxChar = char;
       }
    });
    console.log(maxChar  , max);
  };

//   getMax('gill')
// 19. Write a ts program to find lowest frequency character in a string.
let  getMini =(str:string)=>{
   var max = 0,  minChar = '';
    str.split('').forEach(function(char){
      if(str.split(char).length > max) {
          max = str.split(char).length;
          minChar = char;
       }
    });
    console.log(minChar  , max);
  };

  getMini('gill')