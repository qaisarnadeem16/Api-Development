// let arr:number=[3,1,2,3,4,5]
// let alph:string=['A','s','f']
// let alpharr=arr.concat(alph);
// console.log(alpharr);
function myReplace(text, replaceTo, replaceWith) {
    console.log("Old Text    :   " + text);
    var splitStr = text.split(replaceTo);
    var finalResult = splitStr.join(replaceWith);
    console.log("After Replacement    :  " + finalResult);
    return finalResult;
    // var finalResult=text.replace(replaceTo,replaceWith)
    // console.log(finalResult);
}
myReplace("I love Pakistan", "love", "like");
// myReplace("I love Punjab","love","like")
