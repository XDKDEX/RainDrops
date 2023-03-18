/* RainDrops */"use strict";

var scrollRsate = (a) => {
    let doc;
    if (a == "document") {
        doc = document.documentElement;
    } else {
        doc = document.getElementsByClassName(a)[0];
    }
    return [(doc.scrollTop / (doc.scrollHeight - doc.clientHeight) * 100), (doc.scrollLeft / (doc.scrollWidth - doc.clientLeft) * 100)];
};

var ajaxSetting = {
    "Request": () => {
        return new XMLHttpRequest();
    }, "Zip": false
};
/* setup */
ajaxSetting.Request();

/* ajaxSetting.Zip(false); */
var ajax = (data) => {
    var xmlhttp = ajaxSetting.Request();
    xmlhttp.open("GET", data.url, false);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function (func, response) {
        func = func.replaceAll(/&response/g, response);
        return Function(func)();
    }(data.success, xmlhttp.response);
};

function doc(data, mumber) {
    let a;
    if(data== 'document'){
        a = document.body;
    }else{
        a = document.querySelectorAll(data)[mumber];
    }

    docEvent(a, 'reg');
    return a;
};

function docEvent(a, mode){
    if (mode == 'reg') {
        /* JS */
        a.click = (b) => { a.addEventListener('click', b); };
        a.dblclick = (b) => { a.addEventListener('dblclick', b); };
        a.scroll = (b) => { if (a.nodeName == 'BODY') { window.addEventListener('scroll', b); } else { a.addEventListener('scroll', b); }; };
        a.ready = (b) => { if (a.nodeName == 'BODY') { window.addEventListener('load', b); } else { a.addEventListener("load", b); }; };

        /* CSS */
        a.height = function(){return a.style.clientHeight;};

        a.hide = () => { a.style.display = 'none'; };
        a.show = () => { a.style.display = ''; };
    } else if (mode == 'del') {
        let object = Object.keys(a);
        for (let count = 0; object.length != count; count++) {
            delete a[object[count]];
        }
        return true;
    }
    setTimeout(() => {
        docEvent(a, 'del');
    }, 1);


};

var test = (aaa) => {
    console.log(!this.aaa);
};
console.log("\n %c RainDropJS v1  %c http://aplayer.js.org \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;")