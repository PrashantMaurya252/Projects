const starStopBtn=document.querySelector('#startStopBtn')
const resetBtn=document.querySelector('#resetBtn')

//variable for timer

let seconds=0;
let minute=0;
let hour=0;

//variable for leading zeros
let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;

//variable for setInterval and status
let timeInterval=null;
let timerStatus="stopped"

//Stop Watch Function

function stopWatch(){
    seconds++

    if(seconds/60===1){
        seconds=0;
        minute++;

        if(minute/60===1){
            minute=0;
            hour++;
        }
    }

    if(seconds<10){
        leadingSeconds="0"+seconds.toString()
    }
    else{
        leadingSeconds=seconds
    }
    if(minute<10){
        leadingMinutes="0"+minute.toString()
    }
    else{
        leadingMinutes=minute
    }
    if(hour<10){
        leadingHours="0"+hour.toString()
    }
    else{
        leadingHours=hour
    }
    let displayTimer=document.getElementById('timer').innerText=leadingHours +":"+ leadingMinutes +":"+ leadingSeconds
}


starStopBtn.addEventListener('click',function(){
    if(timerStatus==="stopped"){
    timeInterval=window.setInterval(stopWatch,1000);
    document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-pause" id="pause"></>`;
    timerStatus="started"
    }
    else{
        window.clearInterval(timeInterval)
        document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-play" id="play"></>`;
        timerStatus="stopped"
    }
})
resetBtn.addEventListener('click',function(){
    window.clearInterval(timeInterval);
    seconds=0;
    minute=0;
    hour=0
    document.getElementById('timer').innerHTML="00:00:00"
})