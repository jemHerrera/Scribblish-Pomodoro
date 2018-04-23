document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if(button.textContent == '+') button.previousElementSibling.textContent++;
            else if (button.textContent == '-') button.nextElementSibling.textContent--;
            else if (button.textContent == 'START'){
                button.style.display = 'none';
                document.querySelector('#pause').style.display='block';
                document.querySelector('#stop').style.display='block';
                document.querySelector('#session').style.display='block';
                document.querySelector('#timer').style.display='block';
            }
        });
    });
});