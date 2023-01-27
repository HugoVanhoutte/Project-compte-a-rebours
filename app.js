
const newTimerButton = document.getElementById("newTimerButton");
let newTimerSeconds = document.getElementById("seconds");
let newTimerMinutes = document.getElementById("minutes");
let newTimerHours = document.getElementById("hours");
const timersDiv = document.getElementById("timers");
const name = document.getElementById("name");

//Object Countdown
function Countdown(seconds, minutes, hours, name) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.name = name;
}
//Methods counting seconds
Countdown.prototype.count = function () {
    //Checks if numbers inputs are valid
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

//start counting
Countdown.prototype.running = setInterval(() => {
        if(this.seconds === 0){

            if(this.minutes === 0){

                if(this.hours === 0){


                    clearInterval(this.running);


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

    }, 1000);

    //pause
Countdown.prototype.pause = () => {
        clearInterval(this.running);
    }
};


newTimerButton.addEventListener("click",() => {
    let newTimer = new Countdown(parseInt(newTimerSeconds.value), parseInt(newTimerMinutes.value), parseInt(newTimerHours.value), name.value);
    if (parseInt(newTimerHours.value) < 0){
        alert("Veuillez rentrer des valeurs correctes")
    }
    else if (parseInt(newTimerMinutes.value) < 0 || parseInt(newTimerMinutes.value) > 60 ){
        alert("Veuillez rentrer des valeurs correctes")
    }
    else if (parseInt(newTimerSeconds.value) < 0 || parseInt(newTimerSeconds.value) > 60 ){
        alert("Veuillez rentrer des valeurs correctes")
    }
    else {
        newTimer.count();
        newTimerSeconds.value = "";
        newTimerMinutes.value = "";
        newTimerHours.value = "";

        let newTimerDiv = document.createElement("div");
        newTimerDiv.className = "timer";

        let newTimerDisplay = document.createElement("p");
        let newTimerName = document.createElement("p");
        newTimerName.innerText = newTimer.name;
        newTimerDisplay.innerText = `H:${newTimer.hours} M:${newTimer.minutes} S:${newTimer.seconds}`;
        newTimerDiv.append(newTimerName);
        newTimerDiv.append(newTimerDisplay);
        timersDiv.append(newTimerDiv);

        setInterval( () => newTimerDisplay.innerText = `H:${newTimer.hours} M:${newTimer.minutes} S:${newTimer.seconds}`,1000);
        let newStopButton = document.createElement("button");
        newStopButton.innerText = "pause";
        newTimerDiv.append(newStopButton);


        //Bouton supression du compte a rebours
        let newClearButton = document.createElement("button");
        newClearButton.innerText = 'clear';
        newClearButton.addEventListener('click', function () {
            newTimerDiv.remove();
        })
        newTimerDiv.append(newClearButton);


        //Bouton start/pause
        let buttonStatus = true;
        newStopButton.addEventListener("click", () => {
            if (buttonStatus === true) {
                newTimer.pause();
                newStopButton.innerText = "start";
                buttonStatus = false;
            } else {
                newStopButton.innerText = "pause";
                buttonStatus = true;
                newTimer.count();
            }
        })
    }});

