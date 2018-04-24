document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if(button.textContent == '+') button.previousElementSibling.textContent++;
            else if (button.textContent == '-') button.nextElementSibling.textContent--;
            else if (button.textContent == 'START'){
                button.style.display = 'none';
                ['#pause', '#stop', '#session', '#timer'].forEach(function(element){
                    document.querySelector(element).style.display = 'block';
                });
            }
            else if (button.textContent == 'Stop'){
                document.querySelector('#start').style.display = 'block';
                ['#pause', '#stop', '#session', '#timer'].forEach(function(element){
                    document.querySelector(element).style.display = 'none';
                });
            }
        });
    });
});