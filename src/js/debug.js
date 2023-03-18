// const ClassSelector = (value)=>{
//     let self = document.getElementsByClassName(value)[0];
//     return self;
// }

// const ajax = {
//     "get": (URL,Selector) => {
//         var httpRequest = new XMLHttpRequest();
//         httpRequest.open("Get", URL, true);
//         // httpRequest.setRequestHeader();
//         httpRequest.send();
//         httpRequest.onreadystatechange = function (Selector){
//             if (httpRequest.readyState == 4 & httpRequest.status == 200) {
//                 ClassSelector(Selector).innerHTML = httpRequest.responseText;
//             }
//         }
//     }
// }

function test() {
    console.log("X:"+window.event.clientX);
    console.log("Y:"+window.event.clientY);
    var wave = document.getElementById("wave");
    wave.style.left = (window.event.clientX-(wave.clientHeight)) + "px";
    wave.style.top = (window.event.clientY-(wave.clientWidth)) + "px";
    if(wave.style.animationName == "wave"){
        wave.style.animationName = "wave1";
    }else if(wave.style.animationName == "wave1"){
        wave.style.animationName = "wave";
    }else{
        wave.style.animationName = "wave";
    }
    wave.addEventListener("animationend",()=>{
        wave.style.animationName = "end";
    })
}
// import {ajax} from "./min.js";
// ajax()