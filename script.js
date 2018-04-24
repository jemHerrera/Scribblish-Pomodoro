document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if(button.textContent == '+' && button.previousElementSibling.textContent <= 600) button.previousElementSibling.textContent++;
            else if (button.textContent == '-' && button.nextElementSibling.textContent > 1) button.nextElementSibling.textContent--;
            else if (button.textContent == 'START'){
                button.style.display = 'none';
                ['#pause', '#stop', '#session', '#timer'].forEach(function(element){
                    document.querySelector(element).style.display = 'block';
                });
                let timer = setInterval(function(){
                    let seconds = document.querySelector('#seconds').textContent;
                    let minutes = document.querySelector('#minutes').textContent;
                    let hours = document.querySelector('#hours').textContent;
                    function countDown(element){
                        let time = document.querySelector(element);
                        time.textContent--;
                        if (time.textContent <= 9 && time.textContent >= 0) time.textContent = '0'+time.textContent;
                        if (time.textContent < 0) time.textContent = 59;
                    }
                    countDown('#seconds');
                    if (seconds == 0) countDown('#minutes');
                    if (seconds == 0 && minutes == 0)countDown('#hours');
                    if (seconds == 1 && minutes == 1 && hours == 1)clearInterval(timer);
                },1);
            }
            else if (button.textContent == 'Stop'){
                document.querySelector('#start').style.display = 'block';
                ['#pause', '#stop', '#session', '#timer'].forEach(function(element){
                    document.querySelector(element).style.display = 'none';
                });
                clearInterval(timer);
            }
        });
    });
});