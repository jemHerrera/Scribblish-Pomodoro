document.addEventListener('DOMContentLoaded', function(){

    //select all buttons and add click event listener on each
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){

            // increment or decrement length if + button is clicked
            if(button.textContent == '+' && button.previousElementSibling.textContent <= 600) button.previousElementSibling.textContent++;
            else if (button.textContent == '-' && button.nextElementSibling.textContent > 1) button.nextElementSibling.textContent--;

            //if START button is clicked...
            else if (button.textContent == 'START' || button.textContent == 'Resume'){
                //hide the start button and show the timer
                button.style.display = 'none';
                ['#pause', '#stop1', '#session', '#timer'].forEach(function(element){
                    document.querySelector(element).style.display = 'block';
                });
                //set timer according to session length using setTimer function
                if (button.textContent == 'START')setTimer('#sLength');
                let timer = setInterval(function(){startTimer();}, 1000);
                //if PAUSE button is clicked
                pause.addEventListener('click', function(){
                    if(pause.textContent == 'Pause'){
                        clearInterval(timer);
                        pause.style.display = 'none';
                        resume.style.display = 'block';
                    }
                });
                stop1.addEventListener('click', function(){
                    clearInterval(timer);
                    //show and hide appropriate elements
                    document.querySelector('#start').style.display = 'block';
                    ['#pause', '#stop1', '#session', '#timer', '#resume'].forEach(function(element){
                        document.querySelector(element).style.display = 'none';
                    });
                });
            }
        });
    });
});


// FUNCTIONS

//function to reset Timer
function resetTimer(){
    hours.textContent = '0';
    minutes.textContent = '00';
    seconds.textContent = '00';
}

//function to set timer according to session/break length
function setTimer(element){
    resetTimer();
    //convert 61+ minutes to hour:minutes
    function convert(length){
        if (length<60) return length;
        else {
            let h = Math.floor(length/60);
            let m = length%60;
            return [h,m]
        }
    };
    let converted = convert(document.querySelector(element).textContent);
    if (Array.isArray(converted)){
        hours.textContent = converted[0];
        minutes.textContent = converted[1];
    }
    else minutes.textContent = converted;
    if (minutes.textContent <= 9 && minutes.textContent >=0) minutes.textContent = '0'+minutes.textContent;
}

//overall timer function
function startTimer(){
    function countDown(element){
        element.textContent--;
        if (element != hours && element.textContent<= 9 && element.textContent >= 0) element.textContent = '0'+ element.textContent;
        if (element.textContent < 0) element.textContent = 59;
    }
    countDown(seconds);
    if (seconds.textContent == 59) {
        countDown(minutes);
        if (minutes.textContent == 59){
            if (hours.textContent > 0) countDown(hours);
        }
    }
    else if (hours.textContent == 0 && minutes.textContent == 0 && seconds.textContent == 0){
        if (session.textContent == 'Session'){
            setTimer('#bLength');
            session.textContent = 'Break';
        }
        else{
            setTimer('#sLength');
            session.textContent = 'Session';
        }
    }
}
