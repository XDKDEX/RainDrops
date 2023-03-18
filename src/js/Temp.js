//  pass
var ScrollRsate = {
    /**
    * @param {"Id"|"Class"|"Global"} Type
    * @param {Name} Name
    * @return {number}
    */
    "top": (Type, Name) => {
        if (Type == "Id") {
            doc = document.getElementById(Name);
        } else if (Type == "Class") {
            doc = document.getElementsByClassName(Name);
        } else if (Type == "Global") {
            doc = document.documentElement;
        } else {
            return null;
        }
        return (doc.scrollTop / (doc.scrollHeight - doc.clientHeight) * 100);
    },
    "left": function () {
    }

};
// pass
var Time = {
    /**
     * @param {"执行的函数带引号"} Function
     * @param {"间隔时间(秒)"} Seconds
     * @param {"次数"} Count
    */
    "count": (Function, Seconds, Count) => {
        var Interval = setInterval(() => {
            new Function(Function)();
            console.log(Count);
            if (1 == Count) {
                clearInterval(Interval);
            }
            Count--;
        }, (Seconds * 1000));
    },
    "Now": ()=>{
        return new Date().getTime();
    }
}