const timerE1 = document.getElementById("timer");
const STARTButtonE1 = document.getElementById("START");
const STOPButtonE1 = document.getElementById("STOP");
const RESETButtonE1 = document.getElementById("RESET");

let STARTTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer(){
    STARTTime = Date.now()-elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() -STARTTime;
        timerE1.textContent = formatTime(elapsedTime);
    },10);

    STARTButtonE1.disabled = true;
    STOPButtonE1.disabled = false;
}

function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime % 1000)/10);
    const seconds = Math.floor((elapsedTime % (1000*60))/1000);
    const minutes = Math.floor((elapsedTime % (1000*60*60))/1000);
    const hours = Math.floor(elapsedTime / (1000*60*60));
    return(
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}
function stopTimer(){
    clearInterval(timerInterval);
    STARTButtonE1.disabled = false;
    STOPButtonE1.disabled = true;
}
function resetTimer(){
    clearInterval(timerInterval);

    elapsedTime = 0 ;
    timerE1.textContent = "00:00:00";

    STARTButtonE1.disabled = false;
    STOPButtonE1.disabled = true;
}
STARTButtonE1.addEventListener("click",startTimer);
STOPButtonE1.addEventListener("click",stopTimer);
RESETButtonE1.addEventListener("click",resetTimer);


