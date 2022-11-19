let dayitem=document.querySelector("#days");
let hoursitem=document.querySelector("#hours");
let minitem=document.querySelector("#min");
let secitem=document.querySelector("#sec");

let countdown = () => {
    let futureDate = new Date("1 jan 2023");
    let currentDate= new Date();
    let myDate=futureDate-currentDate;

    let days=Math.floor(myDate / 1000 / 60 /60 /24);
    let hours=Math.floor(myDate / 1000 / 60 /60) % 24;
    let min=Math.floor(myDate / 1000 / 60) % 24;
    let sec=Math.floor(myDate / 1000 ) % 60;
 
    dayitem.innerHTML=days;
    hoursitem.innerHTML=hours;
    minitem.innerHTML=min;
    secitem.innerHTML=sec;
 
}
countdown()
setInterval(countdown , 1000)
