var start=document.getElementById("start");
var pause=document.getElementById("pause");
var reset=document.getElementById("reset");

var wm=document.getElementById("w_minutes");
var ws=document.getElementById("w_seconds");

var bm=document.getElementById("b_minutes");
var bs=document.getElementById("b_seconds");

//store a reference to a timer variable
 var startTimer;

start.addEventListener('click',function()
{
    //document.write("Start is working");
    
    if(startTimer===undefined)
    {
        startTimer=setInterval(timer,1000);
    }else{
        alert("Timer is aready running");
    }
})

reset.addEventListener('click',function()
{
    wm.innerText=25;
        ws.innerText="00";
        bm.innerText=5;
        bs.innerText="00";

        document.getElementById("counter").innerText=0;
        stopTimer();
        startTimer=undefined;
})

function pausefun()
{
    //document.write("Pause is working");
    stopTimer();
    startTimer=undefined;
}



// Start Timer Function
 function timer()
 {
    // Work Timer Function
    if(ws.innerText!=0){
        ws.innerText--;
    }
    else if (wm.innerHTML!=0 && ws.innerText==0)
    {
        ws.innerText=59;
        wm.innerText--;
    }

    // Break Timer Function
    if(wm.innerText==0 && ws.innerText==0)
    {
        if(bs.innerText!=0){
            bs.innerText--;
        }
        else if (bm.innerHTML!=0 && bs.innerText==0)
        {
            bs.innerText=59;
            bm.innerText--;
        }
    }

    // Increment Counter by one if one break cycle is completed
    if(wm.innerText==0 && ws.innerText==0 && bs.innerText==0 && bm.innerText==0)
    {
        wm.innerText=25;
        ws.innerText="00";
        bm.innerText=5;
        bs.innerText="00";

        document.getElementById("counter").innerText++;


    }

 }

 //Stop timer function
 function stopTimer(){
    clearInterval(startTimer);
 }