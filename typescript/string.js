var str = "I love Pakistan  ";
var str2 = "I love BWP";
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
var header = 'Languages';
var items = ['HTMl', 'CSS', 'JS', 'BS', 'jquery', 'php'];
var html = "<h2>".concat(header, "</h2> <Ul>");
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var x = items_1[_i];
    html += "<li>".concat(x, "</li>");
}
html += "</ul>";
var demo = document.getElementById('demo');
demo.innerHTML = html;
