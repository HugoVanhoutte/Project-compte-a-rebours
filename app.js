
function Countdown(seconds, minutes,hours) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
}

Countdown.prototype.count = function () {
    let runningSeconds = this.seconds;
    let runningMinutes = this.minutes;
    let runningHours = this.hours;

    let running = setInterval(() => {
        if(runningSeconds === 0){

            if(runningMinutes === 0){

                if(runningHours === 0){


                    clearInterval(running);
                    console.log("stop");


                } else {
                    runningMinutes = 59;
                    runningSeconds = 59;
                    --runningHours;
                }

            } else {
                runningSeconds = 59;
                --runningMinutes;
            }

        } else {
            --runningSeconds;
        }

        console.log(`${runningSeconds} ${runningMinutes} ${runningHours}`);

    }, 1000);
};

testS = parseInt(prompt("Entrez Secondes"));
testM = parseInt(prompt("Entrez Minutes"));
testH = parseInt(prompt("Entrez Heures"));

test = new Countdown(testS, testM, testH);
test.count();

//TODO HTML/CSS, Boutons