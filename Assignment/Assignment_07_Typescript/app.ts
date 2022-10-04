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
// countVowel('typescript the best')

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




// Write a ts program to count frequency of each character in a string.
function getFrequency(str:string) {
   var freq = {};
   for (var i=0; i<str.length;i++) {
       var character = str.charAt(i);
       if (freq[character]) {
          freq[character]++;
       } else {
          freq[character] = 1;
       }  
   }
   console.log(freq);  
 
};
// getFrequency("qaisar gill")
// 21. Write a ts program to remove first occurrence of a character from string.
let removeFirstChar=(str:string)=>{
   let arr=str.split(' ')
   arr.shift()
   let str2=arr.join('  ')
   console.log(str2);
}
// removeFirstChar('qaisar gill 11')
// 22. Write a ts program to remove last occurrence of a character from string.
let removelLastChar=(str:string)=>{
   let arr=str.split(' ')
   arr.pop()
   let str2=arr.join('  ')
   console.log(str2);
}
// removelLastChar('qaisar gill 11')

// 23. Write a ts program to remove all occurrences of a character from string.
let removelAllChar=(str:string)=>{
   // let arr=str.split(' ')
  let arr=str.slice(0,0)
   // let str2=arr.join('  ')
   console.log(arr);
}
// removelAllChar('qaisar gill 11')
// 24. Write a ts program to remove all repeated characters from a given string.
let removeRepeated=(str:string)=>{
   // str=Array.from(new Set(str.split(''))).join('');
   console.log(str);   
}
// removeRepeated('qqaaqrmj')
// 25. Write a ts program to replace first occurrence of a character with another in a string.
let replaceFirst=(str:string,replaceTo:string)=>{
   let arr=str.split('')
   arr.splice(0,1,replaceTo)
   let str2=arr.join('')
   console.log(str2);
     
}
// replaceFirst('qaisar','f')
// 26. Write a ts program to replace last occurrence of a character with another in a string.
let replaceLast=(str:string,replaceTo:string)=>{
   let arr=str.split('')
   arr.splice(-1,1,replaceTo)
   let str2=arr.join('')
   console.log(str2);
     
}
// replaceLast('qaisar','f')
// 27. Write a ts program to replace all occurrences of a character with another in a string.
let replaceAll=(str:string,replaceTo:string)=>{
   console.log(`String Before replace ${str}`);
   let b=str.replace(str,replaceTo)
   console.log(`String After replace ${b}`);    
}
// replaceAll('gill','qaisar')
// 28. Write a ts program to find first occurrence of a word in a given string.
let findFirst=(str:string,target:string)=>{
  let str2=str.indexOf(target)
  console.log(str2);
}
// findFirst('qaisar gill','s')
// 29. Write a ts program to find last occurrence of a word in a given string.
let findLast=(str:string,target:string)=>{
   let str2=str.lastIndexOf(target)
   console.log(str2);
 }
//  findLast('qaisar gill','i')
//  30. Write a ts program to search all occurrences of a word in given string.
let searchall=(str:string,target:string)=>{
   if(str.search(target)==-1){
      console.log(`Word is not found`);   
   }else{
      console.log(`word is at this index ${str.search(target)}`);
   }
 }
//  searchAll("hi there qaisar gill " ,'gill')
// 31. Write a ts program to count occurrences of a word in a given string.
let countSearchWord=(str:string)=>{
   let str2=(str.match(/gill/g)||[]).length
   console.log(str2);
 }
//  countSearchWord("hi there qaisar gill gill")
// 32. Write a ts program to remove first occurrence of a word from string 
let removeFirstWord=(str:string)=>{
   let arr=str.split(' ')
   arr.shift()
   let str2=arr.join(' ')
   console.log(str2);
}
// removeFirstWord('hadi gill')
// 33. Write a ts program to remove last occurrence of a word in given string.
let removeLastWord=(str:string)=>{
   let arr=str.split(' ')
   arr.pop()
   let str2=arr.join(' ')
   console.log(str2);
}
// removeLastWord('hadi gill')
// 34. Write a ts program to remove all occurrence of a word in given string
let removeAllWord=(str:string)=>{
   console.log(str.slice(0,0)); 
}
// removeAllWord('hadi gill')
// 35. Write a ts program to trim leading white space characters from given string.
let trimLeading=(str:string)=>{
   let str2=str.trimStart()
   console.log((str2));  
}
// trimLeading("         hllkwkw       ")
// 35. Write a ts program to trim Trailing white space characters from given string.
let trimTrailing=(str:string)=>{
   let str2=str.trimStart()
   console.log((str2));  
}
// trimTrailing("         hllkwkw       ")
// 37. Write a ts program to trim both leading and trailing white space characters from given string.
let trim=(str:string)=>{
   let str2=str.trim()
   console.log((str2));  
}
// trim("         hllkwkw       ")

// 38. Write a ts program to remove all extra blank spaces from given string.
let removeWhiteSpace=(str:string)=>{
   let str2=str.replace(/\s/g,'')
   console.log(str2);
   
}
// removeWhiteSpace(' hjdf haJH  HEahi  iefUI  IF JBJA   J')






// conditional operators programming exercises

// 1. Write a ts program to find maximum between two numbers using conditional operator.

let maxiNum=(num1:number,num2:number)=>{
   if(num1>num2){
      console.log(`Number : ${num1} is greater then Number : ${num2}`)   
   }else{
      console.log(`Number : ${num1} is Smaller then Number : ${num2}`)   
   }
}
// maxiNum(22,121)
// 2. Write a ts program to find maximum between three numbers using conditional operator.
let max3Num=(num1:number,num2:number,num3:number)=>{
if(num1>num2 && num1>num3){
   console.log(`Number : ${num1} is greater then : ${num2} : ${num3}`)
}else if(num2>num1 && num2>num3){
   console.log(`Number : ${num2} is greater then : ${num1} : ${num3}`)
}else if(num3>num1 && num3>num2){
   console.log(`Number : ${num3} is greater then : ${num2} : ${num1}`)
}
}
// max3Num(5,2,3)
// 3. Write a ts program to check whether a number is even or odd using conditional operator.
let checkEvenOdd=(number:number)=>{
   if(number%2==0){
      console.log(`${number} is even `);
   }else{
      console.log(`${number} is odd `);
   }
}
// checkEvenOdd(2)
// 4. Write a ts program to check whether year is leap year or not using conditional operator.

let checkLeap=(year:number)=>{
   if (year % 400 == 0) {
      console.log(`${year} is a leap year`);
    }else if (year % 100 == 0) {
      console.log(`${year} is a Not  leap year`);
    }else if (year % 4 == 0) {
      console.log(`${year} is a leap year`);
    }
    else {
      console.log(`${year} is a not leap year`);
    }
}
// checkLeap(2006)
// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.
let checkAlphbet=(char:string)=>{
   if(char>='a' && char<='z' ||char>='A' && char<='Z' ){
      console.log(`${char}  : is Alphabet`); 
   }else{
      console.log(`${char}  : is Not Alphabet`); 
   }
}
// checkAlphbet('')

// List of switch case programming exercises

// 1. Write a ts program to print day of week name using switch case.

  let weekDay=(day:number)=>{
   switch (day){
      case 1:{
         console.log('Monday');
         break
      }
      case 2:{
         console.log('Tuesday');
         break
      }
      case 3:{
         console.log('Wednesday');
         break
      }
      case 4:{
         console.log('Thurday');
         break
      }
      case 5:{
         console.log('Friday');
         break
      }
      case 6:{
         console.log('Saturday');
         break
      }
      case 7:{
         console.log('Sunday');
         break
      }
      default:{
         console.log("Invalid choice");
         break;
         }
   }
  }

// weekDay()
// 2. Write a ts program print total number of days in a month using switch case.

let dayInMonth=(Month:string)=>{
   switch(Month){
      case 'January': 
      console.log("31 days");
      break;
  case 'February': 
      console.log("28/29 days");
      break;
  case 'March': 
      console.log("31 days");
      break;
  case 'April': 
      console.log("30 days");
      break;
  case 'May': 
      console.log("31 days");
      break;
  case 'June': 
      console.log("30 days");
      break;
  case 'July': 
      console.log("31 days");
      break;
  case 'August': 
      console.log("31 days");
      break;
  case 'September': 
      console.log("30 days");
      break;
  case 'October': 
      console.log("31 days");
      break;
  case 'November': 
      console.log("30 days");
      break;
  case 'December': 
      console.log("31 days");
      break;
  default: 
      console.log();
      ("Invalid input! Please enter month  between 1-12")
   }
}
// dayInMonth('March')
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.

let checkVowel=(Char:string)=>{
   switch(Char){
     case 'a':{
      console.log("alphabet is vowel");
      break
     }
     case 'e':{
      console.log("alphabet is vowel");
      break
     }
     case 'i':{
      console.log("alphabet is vowel");
      break
     } case 'o':{
      console.log("alphabet is vowel");
      break
     } case 'u':{
      console.log("alphabet is vowel");
      break
     }
     default:{
      console.log("alphabet is Consonant");
      break
     }
   }
}
// checkVowel('d')
// 4. Write a ts program to find maximum between two numbers using switch case.
let checkGreater=(num1:number,num2:number)=>{
  
   switch(num1>num1){
      case true:{
       console.log(`${num1} is Greater then ${num2}`);
      }
      case false:{
         console.log(`${num2} is Greater then ${num1}`);
        }
   }
}
// checkGreater(2,4)
// 5. Write a ts program to check whether a number is even or odd using switch case.
let checkOddEven=(num:number)=>{
   switch(num%2==0){
      case true:{
       console.log(`${num}  is Even`);
      }
      case false:{
         console.log(`${num}  is Odd`);
        }
   }
}
// checkOddEven(9)
// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
let checkNumber=(num:number)=>{
   switch(num>0){
      case true:{
       console.log(`${num} is Postive`);
       break
      }
      case false:{
             switch(num<0){
                  case true:{
                  console.log(`${num} is Negative`);
                  break
                  }
                  case false:{
                  console.log(`${num} is Zero`);
                  break
               }
               }
      }
     
   }
}
// checkNumber(0)
// 7. Write a ts program to find roots of a quadratic equation using switch case.
let rootsOfQuaduratic=(a:number,b:number,c:number)=>{
   let dis=(b*b)-(4*a*c);
   let root1,root2
   
   switch(dis>0){
      case true:{
         root1 = (-b + Math.sqrt(dis)) / (2 * a);
         root2 = (-b - Math.sqrt(dis)) / (2 * a);

         console.log(`"Two distinct and real roots exists: ", ${root1}, ${root2}`);
       break;
      }
      case false:{
             switch(dis<0){
               case true:{
               root1 = root2 = (-b - Math.sqrt(dis)) / (2 * a);
              let imag = (-dis) / (2 * a);
      
               console.log(`"Two distinct complex roots exist: ", ${root1}, ${root2} , ${imag}`);
             break;
               }
                  case false:{
                     root1 = root2 = -b / (2 * a);

                     console.log ("Two equal and real roots exists;")
 
                     break
               }
               }
      }
     
   }
}
// rootsOfQuaduratic(9,4,5)
// 8. Write a ts program to create Simple Calculator using switch case

let Calculator=(num1:number,operator,num2:number)=>{
  let result;
   switch(operator){
      case '+':{
       result=num1+num2
       break;
      }
      case '-':{
         result=num1-num2
         break
        }
      case '*':{
         result=num1*num2
         break
   }
   case '/':{
      result=num1/num2
      break
     }
}
console.log(`${num1} ${operator} ${num2}= ${result}`);

}
Calculator(3,'*',2)