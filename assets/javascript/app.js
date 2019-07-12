window.onload = function(){
    $('#start').on('click', countDn)
};

var intervalId;

var countRunning = false;
var time = 21;

function countDn(){

    clearInterval(intervalId);
    intervalId = setInterval(count, 3000);

    if (!countRunning){

    };

};

function count(){
time--;
$('#timeRm').text(time);
console.log(time);

if (time <= 0){
    stop();
}
};

function stop(){
    clearInterval(intervalId);
    return countRunning;
}