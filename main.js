/// Countdown timer///
function callback(){
    document.getElementById('countdown').innerHTML="Game Over";
}
function start(){
    function decrease_count(){
        var div = getElementById('countdown');
        if( --div.innerHTML == 0) {
            clearInterval(timer)
            callback();
            }

        }
    var timer = setInterval(decrease_count, 1000);
}
