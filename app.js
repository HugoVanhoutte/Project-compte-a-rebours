
function Countdown(seconds, minutes, hours) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
}

Countdown.prototype.count = function () {
    if (isNaN(this.hours)){
        this.hours = 0;
    } else if(!Number.isInteger(this.hours)) {
        this.hours = Math.trunc(this.hours)
    }

    if (isNaN(this.minutes)){
        this.minutes = 0;
    } else if(!Number.isInteger(this.minutes)) {
        this.minutes = Math.trunc(this.minutes)
    } else if(this.minutes < 0 || this.minutes > 60) {
        alert("Veuillez entrer des valeurs possibles !");
    }

    if (isNaN(this.seconds)){
        this.seconds = 0;
    } else if(!Number.isInteger(this.seconds)) {
        this.seconds = Math.trunc(this.seconds)
    } else if(this.seconds < 0 || this.seconds > 60) {
        alert("Veuillez entrer des valeurs possibles !");
    }


    let running = setInterval(() => {
        if(this.seconds === 0){

            if(this.minutes === 0){

                if(this.hours === 0){


                    clearInterval(running);
                    console.log("stop");


                } else {
                    this.minutes = 59;
                    this.seconds = 59;
                    --this.hours;
                }

            } else {
                this.seconds = 59;
                --this.minutes;
            }

        } else {
            --this.seconds;
        }

        console.log(`${this.seconds} ${this.minutes} ${this.hours}`);

    }, 1000);
};

const newTimerButton = document.getElementById("newTimerButton");
let newTimerSeconds = document.getElementById("seconds");
let newTimerMinutes = document.getElementById("minutes");
let newTimerHours = document.getElementById("hours");
const timersDiv = document.getElementById("timers");

newTimerButton.addEventListener("click",() => {
    let newTimer = new Countdown(parseInt(newTimerSeconds.value), parseInt(newTimerMinutes.value), parseInt(newTimerHours.value));
    if (parseInt(newTimerHours.value) < 0){
        alert("Veuillez rentrer des valeurs normales")
    }
    else if (parseInt(newTimerMinutes.value) < 0 || parseInt(newTimerMinutes.value) > 60 ){
        alert("Veuillez rentrer des valeurs normales")
    }
    else if (parseInt(newTimerSeconds.value) < 0 || parseInt(newTimerSeconds.value) > 60 ){
        alert("Veuillez rentrer des valeurs normales")
    }
    else {
        let totalTime = (parseInt(newTimerHours.value)*60*60)+(parseInt(newTimerMinutes.value)*60)+parseInt(newTimerSeconds.value);
        console.log(totalTime)
        newTimer.count();
        newTimerSeconds.value = "";
        newTimerMinutes.value = "";
        newTimerHours.value = "";
        let newTimerDiv = document.createElement("div");
        newTimerDiv.style.borderRadius = "4rem";
        newTimerDiv.style.border = "1px black solid";
        let newTimerDisplay = document.createElement("p");
        newTimerDisplay.innerText = `H:${newTimer.hours} M:${newTimer.minutes} S:${newTimer.seconds}`;
        newTimerDisplay.style.padding = "1rem";
        newTimerDisplay.style.fontSize = "2rem";
        newTimerDiv.append(newTimerDisplay);
        timersDiv.append(newTimerDiv);
        setInterval( () => newTimerDisplay.innerText = `H:${newTimer.hours} M:${newTimer.minutes} S:${newTimer.seconds}`,1000);
}});