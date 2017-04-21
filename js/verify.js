var timer = document.getElementById('timer');
var time = 5;
timer.innerHTML = time;
var timerInterval = setInterval(function() {
    timer.innerHTML = --time;
    if (time === 0) {
        window.location = 'home.html'
        clearInterval(timerInterval);
        return;
    }
}, 1000);
